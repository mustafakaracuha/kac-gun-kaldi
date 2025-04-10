# 🎉 How Many Days Left?

With this application, you can track how many days are left until your special days with a stylish and user-friendly interface. It offers features such as date selection, icon selection and title editing. The data is stored in the browser `localStorage`, so the information is not lost even if the page is refreshed.

## 🚀 🚀 Features

- 📅 Start countdown (August 30 by default)
- 🇹🇷 Choose from special days (holidays, public holidays, etc.) - 🎨 Choose icon )
- 🎨 Icon selection (with Emoji picker)
- ✏️ Title editing
- 🗓️ Date picker (update possibility)
- 💾 Save data to `localStorage`
- 🧠 Automatically calculate remaining time (day, hour, minute, second)
- 📱 Mobile-friendly and responsive design (using Tailwind CSS)

## 📸 Screenshot

![Screenshot](screenshot.png)

## 🔧 Installation

1. Clone this project:

```bash
git clone https://github.com/kullaniciadi/kac-gun-kaldi.git
cd kac-gun-kaldi
```

2. Install the required packages:

``bash
npm install
```

3:

```bash
npm run dev
# or
npm start
```

4. Open in browser: `http://localhost:3000`

## 📁 Project Structure

```
Ӧ kac-gun-kaldi
├ ├─── public
│ └── ...
├── src
│ ├─── App.tsx # Main component (countdown and settings here)
│ └── main.tsx # React app entry point
├── package.json
└── README. md
```

## 🛠️ Technologies Used

- React (Functional Components & Hooks)
- TypeScript (optional)
- Tailwind CSS
- LocalStorage API
- Emoji / Icon picker
- Date utilities (using `Date` object)

## 🌟 Contribute

If you have suggestions for improvement or contributions please send a PR (pull request) or create an [issue](https://github.com/kullaniciadi/kac-gun-kaldi/issues).

## 📜 License

MIT License