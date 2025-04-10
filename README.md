# 🎉 Kaç Gün Kaldı? - React Geri Sayım Uygulaması

Bu uygulama sayesinde özel günlerinize kaç gün kaldığını şık ve kullanıcı dostu bir arayüzle takip edebilirsiniz. Tarih seçimi, ikon seçimi ve başlık düzenleme gibi özellikler sunar. Veriler tarayıcı `localStorage`'ında saklanır, böylece sayfa yenilense bile bilgiler kaybolmaz.

## 🚀 Özellikler

- 📅 Geri sayım başlatma (varsayılan olarak 30 Ağustos)
- 🇹🇷 Özel günlerden seçim yapma (bayramlar, resmi tatiller vs.)
- 🎨 İkon seçimi (Emoji picker ile)
- ✏️ Başlık düzenleme
- 🗓️ Tarih seçici (güncelleme imkanı)
- 💾 Verileri `localStorage`'a kaydetme
- 🧠 Otomatik olarak kalan süreyi hesaplama (gün, saat, dakika, saniye)
- 📱 Mobil uyumlu ve responsive tasarım (Tailwind CSS kullanılarak)

## 📸 Ekran Görüntüsü

![Ekran Görüntüsü](screenshot.png)

## 🔧 Kurulum

1. Bu projeyi klonlayın:

```bash
git clone https://github.com/kullaniciadi/kac-gun-kaldi.git
cd kac-gun-kaldi
```

2. Gerekli paketleri yükleyin:

```bash
npm install
```

3. Uygulamayı başlatın:

```bash
npm run dev
# veya
npm start
```

4. Tarayıcıda açın: `http://localhost:3000`

## 📁 Proje Yapısı

```
📦 kac-gun-kaldi
├── public
│   └── ...
├── src
│   ├── App.tsx        # Ana bileşen (geri sayım ve ayarlar burada)
│   └── main.tsx       # React uygulamasının giriş noktası
├── package.json
└── README.md
```

## 🛠️ Kullanılan Teknolojiler

- React (Functional Components & Hooks)
- TypeScript (isteğe bağlı)
- Tailwind CSS
- LocalStorage API
- Emoji / Icon picker
- Date utilities (`Date` objesi kullanılarak)

## 🌟 Katkı Sağlayın

İyileştirme önerileriniz veya katkılarınız varsa lütfen bir PR (pull request) gönderin veya [issue](https://github.com/kullaniciadi/kac-gun-kaldi/issues) oluşturun.

## 📜 Lisans

MIT Lisansı

---

Hazırlayan: [Adınız](https://github.com/mustafakaracuha) ❤️  
