import React, { useRef, useEffect, useState } from 'react';
import { Layers, RotateCcw, Sparkles } from 'lucide-react';

interface VectorNode {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  z: number;
  similarity: number;
  status: 'ACCEPTED' | 'REJECTED' | 'TARGET';
}

interface VectorSpace3DProps {
  targetTitle: string;
  candidates: Array<{
    id?: string;
    imageId?: string;
    subject: string;
    category: string;
    similarityScore: number;
    status: 'ACCEPTED' | 'REJECTED';
  }>;
}

export const VectorSpace3D: React.FC<VectorSpace3DProps> = ({ targetTitle, candidates }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0.3, y: 0.5 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });

  // Generate 3D spatial points distributed on a sphere / vector cloud
  const nodes: VectorNode[] = React.useMemo(() => {
    const list: VectorNode[] = [
      {
        id: 'target-origin',
        name: targetTitle || 'Target Article Vector',
        category: 'article',
        x: 0,
        y: 0,
        z: 0,
        similarity: 1.0,
        status: 'TARGET'
      }
    ];

    candidates.slice(0, 16).forEach((c, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / 16);
      const theta = Math.sqrt(16 * Math.PI) * phi;
      const distance = 140 * (1.1 - Math.max(0, Math.min(1, c.similarityScore)));

      list.push({
        id: c.imageId || c.id || `node-${idx}`,
        name: c.subject,
        category: c.category,
        x: distance * Math.cos(theta) * Math.sin(phi),
        y: distance * Math.sin(theta) * Math.sin(phi),
        z: distance * Math.cos(phi),
        similarity: c.similarityScore,
        status: c.status
      });
    });

    return list;
  }, [targetTitle, candidates]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let autoAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const currentRotY = rotation.y + (isDragging ? 0 : autoAngle);
      if (!isDragging) autoAngle += 0.003;

      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      // Project 3D nodes to 2D
      const projected = nodes.map(node => {
        // Rotate Y
        const x1 = node.x * cosY + node.z * sinY;
        const z1 = -node.x * sinY + node.z * cosY;
        // Rotate X
        const y2 = node.y * cosX - z1 * sinX;
        const z2 = node.y * sinX + z1 * cosX;

        const fov = 380;
        const scale = fov / (fov + z2 + 200);
        const px = cx + x1 * scale;
        const py = cy + y2 * scale;

        return { ...node, px, py, scale, depth: z2 };
      });

      // Sort by depth (painter's algorithm)
      projected.sort((a, b) => b.depth - a.depth);

      // Draw vector connector lines from origin
      const origin = projected.find(n => n.status === 'TARGET');
      if (origin) {
        projected.forEach(node => {
          if (node.status === 'TARGET') return;
          ctx.beginPath();
          ctx.moveTo(origin.px, origin.py);
          ctx.lineTo(node.px, node.py);
          
          if (node.status === 'ACCEPTED') {
            ctx.strokeStyle = `rgba(31, 181, 157, ${Math.max(0.15, node.scale * 0.6)})`;
            ctx.lineWidth = Math.max(1, node.scale * 2);
          } else {
            ctx.strokeStyle = `rgba(224, 90, 51, ${Math.max(0.08, node.scale * 0.35)})`;
            ctx.lineWidth = Math.max(0.8, node.scale * 1.2);
            ctx.setLineDash([4, 4]);
          }
          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      // Draw nodes
      projected.forEach(node => {
        const radius = node.status === 'TARGET' ? 8 * node.scale : 5.5 * node.scale;

        // Glow ring
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius * 2, 0, Math.PI * 2);
        if (node.status === 'TARGET') {
          ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        } else if (node.status === 'ACCEPTED') {
          ctx.fillStyle = 'rgba(31, 181, 157, 0.25)';
        } else {
          ctx.fillStyle = 'rgba(224, 90, 51, 0.2)';
        }
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.px, node.py, radius, 0, Math.PI * 2);
        if (node.status === 'TARGET') {
          ctx.fillStyle = '#38bdf8';
        } else if (node.status === 'ACCEPTED') {
          ctx.fillStyle = '#1fb59d';
        } else {
          ctx.fillStyle = '#e05a33';
        }
        ctx.fill();
        ctx.strokeStyle = '#090d0f';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node Label
        if (node.scale > 0.75 || node.status === 'TARGET') {
          ctx.font = `${node.status === 'TARGET' ? '600 11px' : '500 10px'} "IBM Plex Mono", monospace`;
          ctx.fillStyle = node.status === 'TARGET' ? '#f3f6f5' : (node.status === 'ACCEPTED' ? '#1fb59d' : '#8497a1');
          ctx.fillText(node.name, node.px + radius + 4, node.py + 3);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [nodes, rotation, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    setRotation(prev => ({
      x: Math.max(-1.2, Math.min(1.2, prev.x + dy * 0.008)),
      y: prev.y + dx * 0.008
    }));
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative w-full rounded-xl bg-card border border-border overflow-hidden shadow-inner select-none">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-border text-[11px] font-mono">
        <Layers className="w-3.5 h-3.5 text-signal" />
        <span className="text-ink font-semibold">3D Vector Latent Space (Cosine Distances)</span>
      </div>

      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <button 
          onClick={() => setRotation({ x: 0.3, y: 0.5 })}
          className="p-1.5 bg-background/80 backdrop-blur-md hover:bg-card-hover border border-border rounded-md text-muted hover:text-ink text-xs transition-colors"
          title="Reset 3D Camera"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={720}
        height={320}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="w-full h-[280px] cursor-grab active:cursor-grabbing block"
      />

      <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[10px] font-mono text-dim pointer-events-none">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-signal" /> Passed Guard
          <span className="w-2 h-2 rounded-full bg-stamp ml-2" /> Rejected
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] ml-2" /> Article Vector
        </span>
        <span>Drag with mouse to rotate 3D camera</span>
      </div>
    </div>
  );
};
