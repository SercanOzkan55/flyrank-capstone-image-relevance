import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Layers, RotateCcw, Sparkles, Activity, ShieldCheck } from 'lucide-react';

interface Candidate {
  id?: string;
  imageId?: string;
  filename?: string;
  subject: string;
  category: string;
  similarityScore: number;
  status: 'ACCEPTED' | 'REJECTED';
}

interface ThreeVectorSpaceProps {
  targetTitle: string;
  candidates: Candidate[];
}

export const ThreeVectorSpace: React.FC<ThreeVectorSpaceProps> = ({ targetTitle, candidates }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<{ name: string; score: number; status: string } | null>(null);
  const [is3DActive, setIs3DActive] = useState<boolean>(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    } catch (e) {
      setIs3DActive(false);
      return;
    }

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 30, 85);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x10b981, 2, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Background Particle Grid
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 120;
      particlePositions[i + 1] = (Math.random() - 0.5) * 80;
      particlePositions[i + 2] = (Math.random() - 0.5) * 120;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x222731,
      size: 1.2,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Group for all vector nodes & rays
    const group = new THREE.Group();
    scene.add(group);

    // Latent Orbit Rings
    const ringGeo = new THREE.RingGeometry(35, 35.4, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x15181e, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 2;
    group.add(ringMesh);

    // 1. Origin Node (Target Article Prompt Vector)
    const targetGeo = new THREE.SphereGeometry(2.8, 32, 32);
    const targetMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8
    });
    const targetMesh = new THREE.Mesh(targetGeo, targetMat);
    targetMesh.position.set(0, 0, 0);
    group.add(targetMesh);

    // Target Glow Halo
    const haloGeo = new THREE.SphereGeometry(4.2, 16, 16);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.15, wireframe: true });
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    targetMesh.add(haloMesh);

    // 2. Candidate Nodes
    const interactiveMeshes: THREE.Mesh[] = [];
    const candidateList = candidates.slice(0, 18);

    candidateList.forEach((cand, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / candidateList.length);
      const theta = Math.sqrt(candidateList.length * Math.PI) * phi;
      const sim = cand.similarityScore;
      
      // High similarity = closer to origin center
      const radius = 20 + (1.0 - Math.min(1.0, Math.max(0, sim))) * 45;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = (radius * Math.sin(theta) * Math.sin(phi)) * 0.6; // flatten slightly
      const z = radius * Math.cos(phi);

      const isAccepted = cand.status === 'ACCEPTED';
      const nodeColor = isAccepted ? 0x10b981 : 0xf43f5e;

      const nodeGeo = new THREE.SphereGeometry(isAccepted ? 1.8 : 1.4, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: nodeColor,
        emissive: nodeColor,
        emissiveIntensity: isAccepted ? 0.6 : 0.3,
        roughness: 0.3
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      nodeMesh.userData = {
        name: cand.subject,
        score: cand.similarityScore,
        status: cand.status
      };
      group.add(nodeMesh);
      interactiveMeshes.push(nodeMesh);

      // Line connecting to origin
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z)
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: nodeColor,
        transparent: true,
        opacity: isAccepted ? 0.35 : 0.12
      });
      const line = new THREE.Line(lineGeo, lineMat);
      group.add(line);
    });

    // Raycaster for mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Mouse Drag Controls
    let isDragging = false;
    let previousMouse = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - previousMouse.x;
        const deltaY = e.clientY - previousMouse.y;
        group.rotation.y += deltaX * 0.006;
        group.rotation.x = Math.max(-0.6, Math.min(0.6, group.rotation.x + deltaY * 0.006));
        previousMouse = { x: e.clientX, y: e.clientY };
      }

      // Check hover
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(interactiveMeshes);
      if (intersects.length > 0) {
        const data = intersects[0].object.userData;
        setHoveredNode({ name: data.name, score: data.score, status: data.status });
      } else {
        setHoveredNode(null);
      }
    };

    const onMouseUp = () => { isDragging = false; };

    mount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (!isDragging) {
        group.rotation.y += 0.002;
        particles.rotation.y += 0.0005;
      }
      haloMesh.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', handleResize);
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [targetTitle, candidates]);

  return (
    <div className="relative w-full h-[360px] md:h-[400px] rounded-2xl bg-bg-subtle border border-border-default overflow-hidden shadow-elevated">
      {/* 3D WebGL Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Overlay Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-bg-base/80 backdrop-blur-md border border-border-subtle text-xs font-mono">
        <Activity className="w-3.5 h-3.5 text-brand-primary" />
        <span className="text-text-primary font-semibold">Multimodal Latent Space (3D Cosine Projection)</span>
      </div>

      {/* Live Hover Inspector Tooltip */}
      {hoveredNode ? (
        <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-xl bg-bg-elevated/90 backdrop-blur-md border border-border-strong text-xs font-mono shadow-lg animate-in fade-in duration-150">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-text-primary capitalize">{hoveredNode.name}</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              hoveredNode.status === 'ACCEPTED' 
                ? 'bg-brand-faint text-brand-primary border border-brand-border' 
                : 'bg-danger-faint text-danger-primary border border-danger-border'
            }`}>
              {hoveredNode.status}
            </span>
          </div>
          <div className="text-[11px] text-text-secondary">
            Cosine Similarity: <strong className="text-brand-primary font-bold">{(hoveredNode.score * 100).toFixed(1)}%</strong>
          </div>
        </div>
      ) : (
        <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-base/80 backdrop-blur-md border border-border-subtle text-[11px] font-mono text-text-muted">
          <span>Click & Drag to Orbit Space</span>
        </div>
      )}

      {/* Bottom Legend */}
      <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] font-mono text-text-muted pointer-events-none">
        <div className="flex items-center gap-3 bg-bg-base/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border-subtle">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" /> Target Prompt
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-primary" /> Guard Approved
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-danger-primary" /> Guard Rejected
          </span>
        </div>
        <div className="hidden md:block bg-bg-base/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-border-subtle">
          <span>WebGL 2.0 · 60 FPS</span>
        </div>
      </div>
    </div>
  );
};
