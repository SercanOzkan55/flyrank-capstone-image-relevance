# Demo Video Script — AI Image Matching Engine
## 3-5 dakika | OBS Studio ile kayıt

---

### AÇILIŞ (0:00 – 0:30) — Terminal + Proje klasörü görünür

**Söyle:**
"Merhaba. Bu video, FlyRank Backend Capstone projem olan
AI Image Understanding ve Content Matching Engine sisteminin
canlı demosudur. Sistem şunu çözüyor: bir editöryal ekip
elinizde 50 fotoğraf ve 6 blog yazısı var — hangi fotoğraf
hangi yazıya gitmeli, ve daha önemlisi, yanlış eşleşme
otomatik reddedilmeli."

**Ekranda:** Proje klasörü açık, terminal hazır.

---

### BÖLÜM 1 — Kurulum (0:30 – 1:00)

**Söyle:**
"Kurulum tamamen sıfırdan, API key gerektirmez."

**Yap + Söyle:**
```
npm run seed
```
"Bu komut 50 görseli corpus'a ekliyor, vision classification
batch job çalıştırıyor ve maliyet özetini gösteriyor.
Gördüğünüz gibi 50 görsel işlendi, 9 tanesi düşük güven
skoru nedeniyle flaglendi ve toplam maliyet 0.004 dolar."

---

### BÖLÜM 2 — Normal Eşleşme (1:00 – 2:00)

**Söyle:**
"Şimdi sunucuyu başlatıyorum."

**Yap:**
```
npm run start
```

**Söyle:**
"Tarayıcıda http://localhost:3000 adresini açıyorum.
Bu interaktif dashboard capstone'un bir stretch goal'uydu.
Şimdi kırmızı tilki yazısı için en uygun görseli sorguluyorum."

**Yap:** Tarayıcıda dashboard'u göster, sonra terminalde:
```
curl http://localhost:3000/api/posts/red-fox-behavior/images
```

**Söyle:**
"Sistem doğru şekilde fox-01.jpg'i önerdi, similarity score 1.0.
Dikkat edin: yazıda 'red fox', görselde 'Vulpes vulpes' yazıyor —
sistem bu iki kavramın aynı şey olduğunu semantic embedding
sayesinde anlıyor. Bu benim tasarım kararımdan biri: taxonomik
eşdeğerliği keyword eşleşmesiyle değil, anlam uzayında
yakınlıkla çözüyoruz."

---

### BÖLÜM 3 — Mismatch Guard (2:00 – 3:00) ← EN ÖNEMLİ BÖLÜM

**Söyle:**
"Şimdi asıl güvenlik katmanını göstereyim: Mismatch Guard.
Bir editör yanlışlıkla tilki yazısına kurt fotoğrafı
atamaya çalışıyor."

**Yap:**
```
curl -X POST http://localhost:3000/api/posts/red-fox-behavior/force-match \
  -H "Content-Type: application/json" \
  -d '{"candidateImageId": "wolf-01.jpg"}'
```

**Söyle:**
"Status: REJECTED. Reason: Animal category mismatch — expected fox, detected wolf.
Bu benim için en kritik tasarım kararı: sisteme güven sınırı koymak.
Benzerlik skoru düşük olsa bile model yanılabilir, bu yüzden
kategori etiketleri ayrı bir validator katmanından geçiyor.
İkisi birden başarısız olmadan sistem reddetmiyor — bu defense-in-depth."

---

### BÖLÜM 4 — No Confident Match (3:00 – 3:30)

**Söyle:**
"Peki corpus'ta hiç alakalı görsel yoksa ne olur?
Quantum computing yazısına bakıyoruz — elimizde sadece hayvan fotoğrafları var."

**Yap:**
```
curl http://localhost:3000/api/posts/quantum-computing-intro/images
```

**Söyle:**
"Status: NO_MATCH. Sistem 'bilmiyorum' diyor, rastgele bir fotoğraf önermek yerine.
Bu bir limitasyon değil, özellik. Yanlış öneri vermemek, hiç öneri vermemekten daha tehlikeli."

---

### BÖLÜM 5 — Eval + Limitasyon (3:30 – 4:30)

**Yap:**
```
npm run eval
```

**Söyle:**
"10 üzerinden 10 test geçti, Top-1 precision yüzde 100.
Ama bir limitation'ı açıkça söylemem gerekiyor:
Bu sistem 50 görsel için tasarlandı. Eğer corpus 100 bin görsel olsaydı,
şu anki in-process cosine similarity loop yavaşlardı.
Production'da bunu pgvector veya Milvus gibi approximate
nearest-neighbour index ile değiştirmek gerekir.
API yüzeyi değişmez, sadece altındaki lookup mekanizması değişir."

---

### KAPANIŞ (4:30 – 5:00)

**Söyle:**
"Özetle: sistem görseli anlıyor, yazıyla eşleştiriyor,
yanlış eşleşmeyi reddediyor, belirsizlikte bilmiyorum diyor.
README'de kurulum adımları, mimari diyagram, eval sonuçları
ve tüm limitasyonlar mevcut. Teşekkürler."

**Ekranda:** README.md açık son görüntü.

---

## Kayıt İpuçları (OBS)
- Çözünürlük: 1920x1080
- FPS: 30
- Ses: Mikrofon açık, arka plan sesi kapalı
- Tarayıcı + terminal yan yana (split view)
- Upload: YouTube → Unlisted → linki kopyala
