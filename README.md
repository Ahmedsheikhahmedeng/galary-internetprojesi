# 📷 Editorial Fotoğrafçılık & Sanat Portfolyosu

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

Bu proje, **İnternet Tabanlı Programlama** dersi ödevi/projesi kapsamında geliştirilmiş modern, estetik ve tipografi odaklı bir web portfolyo ve galeri uygulamasıdır.

---

## ✨ Öne Çıkan Özellikler

* **🌙 / ☀️ Gece ve Sabah (Gündüz) Modu**: 
  - Tüm sayfalarda (`index.html` ve `contact.html`) eş zamanlı çalışan tema desteği.
  - `localStorage` entegrasyonu sayesinde kullanıcı tema tercihi hatırlandığı için sayfa geçişlerinde parlama (FOUT) yaşanmaz.
* **📜 İnteraktif Tam Ekran Menü**:
  - Akıcı animasyonlarla açılan tam ekran yönlendirme menüsü.
* **🎞️ GSAP & ScrollTrigger Yatay Galeri**:
  - Sayfa dikey kaydırıldıkça yatay olarak akış gösteren özel fotoğraf kadraj kartları.
* **🖼️ Tipografik & Dinamik Grid Galeri**:
  - Farklı boyutlardaki fotoğrafları estetik bir düzenle sunan CSS Grid galeri yapısı.
* **✉️ İletişim Formu & Validasyon**:
  - Telefon, isim ve mesaj uzunluğunu denetleyen saf JavaScript form doğrulaması.
* **🎨 Cam Efektli (Glassmorphism) Navigasyon**:
  - Arka planla uyumlu, bulanıklaştırma efektine ve tema geçişlerine duyarlı sabitleştirilmiş navigasyon barı.

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5**: Semantik etiket yapısı.
- **CSS3**: CSS Custom Properties (Değişkenler), Flexbox, CSS Grid, Glassmorphism ve Smooth Transitions.
- **JavaScript (ES6+)**: DOM manipülasyonu, Event Listener yapıları ve `localStorage` kullanımı.
- **GSAP & ScrollTrigger**: Kaydırma (scroll) bazlı gelişmiş animasyon kütüphaneleri.
- **Google Fonts**: *Cormorant Garamond* (Serif) ve *Manrope* (Sans-serif) font aileleri.

---

## 📁 Proje Dosya Yapısı

```bash
.
├── index.html       # Ana sayfa (Hero, Yatay Galeri, Grid Galeri, Footer)
├── contact.html     # İletişim sayfası ve form alanı
├── style.css        # Ana sayfa ve genel tema CSS stilleri
├── contact.css      # İletişim sayfası özel stilleri
├── theme.js         # Kalıcı Gece/Sabah modu tema yöneticisi
├── main.js          # Ana sayfa animasyonları, menü & GSAP mantığı
├── contact.js       # İletişim formu validasyon mantığı
└── README.md        # Proje dokümantasyonu
```

---

## 🚀 Kurulum ve Çalıştırma

Projede herhangi bir paket yöneticisi veya derleme adımı gerekmez. Saf HTML/CSS/JS ile oluşturulmuştur.

1. **Projeyi Klonlayın veya İndirin:**
   ```bash
   git clone https://github.com/kullanici-adi/proje-adi.git
   cd proje-adi
   ```

2. **Çalıştırın:**
   - `index.html` dosyasını tarayıcınızda çift tıklayarak açabilirsiniz.
   - Veya VS Code **Live Server** eklentisi / Python HTTP Server ile çalıştırabilirsiniz:
     ```bash
     python3 -m http.server 3000
     ```

---

## 📤 GitHub'a Yükleme Adımları

Projeyi kendi GitHub hesabınızda paylaşmak için terminalde aşağıdaki komutları uygulayabilirsiniz:

```bash
# 1. Git deposunu başlatın
git init

# 2. Tüm dosyaları ekleyin
git add .

# 3. İlk commit'i oluşturun
git commit -m "feat: İnternet tabanlı programlama ders projesi tamamlandı"

# 4. Ana dal ismini belirleyin
git branch -M main

# 5. GitHub reponuzu bağlayın (kendi repo linkinizi yazın)
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git

# 6. GitHub'a yükleyin
git push -u origin main
```

---

📝 *Bu proje İnternet Tabanlı Programlama dersi ödev çalışması amacıyla geliştirilmiştir.*
