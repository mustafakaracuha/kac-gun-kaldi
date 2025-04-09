import { useEffect, useState } from "react";

export default function App() {
  const getSavedDate = () => {
    const savedDate = localStorage.getItem("targetDate");
    return savedDate
      ? new Date(savedDate)
      : new Date("2025-08-29T21:00:00.000Z");
  };

  const getSavedIcon = () => {
    return localStorage.getItem("selectedIcon") || "🇹🇷";
  };

  const getSavedTitle = () => {
    return localStorage.getItem("eventTitle") || "30 Ağustos";
  };

  const [targetDate, setTargetDate] = useState(getSavedDate);
  const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
  const [icon, setIcon] = useState(getSavedIcon);
  const [title, setTitle] = useState(getSavedTitle);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTitleEditing, setIsTitleEditing] = useState(false);

  const specialDates = [
    { label: "Kurban Bayramı", date: "2025-06-06T00:00:00", icon: "🐐" },
    { label: "Yılbaşı", date: "2026-01-01T00:00:00", icon: "🎆" },
    { label: "İşçi Bayramı", date: "2025-05-01T00:00:00", icon: "💼" },
    { label: "Sevgililer Günü", date: "2025-02-14T00:00:00", icon: "❤️" },
    { label: "Kadınlar Günü", date: "2025-03-08T00:00:00", icon: "👸🏻" },
    { label: "23 Nisan", date: "2025-04-23T00:00:00", icon: "👦🏻" },
    { label: "Anneler Günü", date: "2025-05-11T00:00:00", icon: "🌸" },
    { label: "19 Mayıs", date: "2025-05-19T00:00:00", icon: "🏅" },
    { label: "Babalar Günü", date: "2025-06-15T00:00:00", icon: "👔" },
    { label: "30 Ağustos", date: "2025-08-30T00:00:00", icon: "🇹🇷" },
    { label: "Cumhuriyet Bayramı", date: "2025-10-29T00:00:00", icon: "🏛️" },
    { label: "Öğretmenler Günü", date: "2025-11-24T00:00:00", icon: "📚" },
    { label: "Yılbaşı Arifesi", date: "2025-12-31T00:00:00", icon: "🎉" },
  ];

  const iconOptions = [
    "💍",
    "🎓",
    "🎉",
    "🎂",
    "🏆",
    "✈️",
    "🏠",
    "👶",
    "💼",
    "🎯",
    "🎄",
    "🎁",
    "💵",
    "⏰",
    "🗓️",
    "❤️",
    "🏝️",
    "🎸",
    "🏡",
    "📚",
  ];

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const remainingDuration = targetDate.getTime() - now.getTime();
      if (remainingDuration > 0) {
        const days = Math.floor(remainingDuration / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingDuration % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingDuration % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    localStorage.setItem("targetDate", targetDate.toISOString());
    localStorage.setItem("eventTitle", title);
    localStorage.setItem("selectedIcon", icon);
  }, [targetDate, title, icon]);

  const formatNumber = (num = 0) => (num < 10 ? `0${num}` : num);

  const handleSpecialDateSelect = (
    date: string,
    label: string,
    icon: string
  ) => {
    setTargetDate(new Date(date));
    setTitle(label);
    setIcon(icon);
  };

  const toggleIconPicker = () => setIsIconPickerOpen(!isIconPickerOpen);

  const formatDate = (date = new Date()) =>
    date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(new Date(e.target.value));
    setIsDatePickerOpen(false);
  };

  const handleIconChange = (selectedIcon: string) => setIcon(selectedIcon);

  const handleTitleClick = () => {
    setIsTitleEditing(!isTitleEditing); // Başlık düzenleme modunu aktif et
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const formatDateForInput = (date: Date) => date.toISOString().split("T")[0];

  const toggleDatePicker = () => setIsDatePickerOpen(!isDatePickerOpen);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center max-sm:bg-white bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="bg-white max-sm:bg-transparent rounded-xl max-sm:shadow-none shadow-lg max-w-lg w-full max-sm:p-0 p-10 border border-gray-100">
        <div className="w-full flex items-center justify-between mb-7">
          <p className="text-indigo-700 font-semibold text-xl">
            Kaç gün kaldı ?
          </p>
          <p className="text-gray-500 text-sm">
            Bugün: {formatDate(new Date())}
          </p>
        </div>

        <div className="mb-6 text-center">
          <div className="grid grid-cols-4 overflow-auto overflow-x-auto mb-8 gap-3">
            {specialDates
              .filter(({ date }) => new Date(date) > new Date())
              .map(({ label, date, icon }) => {
                const isSelected =
                  new Date(date).toDateString() === targetDate.toDateString();
                return (
                  <button
                    key={label}
                    onClick={() => handleSpecialDateSelect(date, label, icon)}
                    className={`px-5 py-1 cursor-pointer rounded-lg text-xs border border-gray-200 transition-colors ${
                      isSelected
                        ? "bg-indigo-600 text-white border-blue-600"
                        : "bg-gray-100 max-sm:bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
          </div>
          <div className="flex flex-col items-center justify-center mb-3 gap-3">
            <div className="text-5xl mt-4 mb-2">{icon}</div>

            <input
              type="text"
              className={`w-full text-center text-xl py-1 rounded-lg font-medium text-gray-800 ${
                isTitleEditing ? "border border-indigo-600" : ""
              } focus:outline-none transition-colors`}
              value={title}
              disabled={!isTitleEditing}
              onChange={handleTitleChange}
              placeholder="Etkinlik Başlığı"
            />
            <div className="flex items-center justify-center gap-2">
              <p
                onClick={handleTitleClick}
                className="text-sm text-gray-500 cursor-pointer hover:text-indigo-600"
              >
                {isTitleEditing ? "Kaydet" : "Düzenle |"}
              </p>
              <button
                onClick={toggleIconPicker}
                className="text-sm text-gray-500 cursor-pointer hover:text-indigo-600 transition-colors"
              >
                {isIconPickerOpen ? "İkon Seçimini Gizle" : "İkon Seç"}
              </button>
            </div>

            <button
              onClick={toggleDatePicker}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors font-medium"
            >
              <span className="text-lg">{formatDate(targetDate)}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDatePickerOpen && (
              <div className="mt-2 p-2 bg-white rounded-lg shadow-lg border border-gray-200">
                <input
                  type="date"
                  className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={formatDateForInput(targetDate)}
                  onChange={handleDateChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          {isIconPickerOpen && (
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid grid-cols-10 gap-2">
                {iconOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleIconChange(opt)}
                    className={`text-xl p-2 rounded-md hover:bg-gray-100 transition-colors ${
                      icon === opt ? "bg-blue-100 shadow-sm" : ""
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {["GÜN", "SAAT", "DAKİKA", "SANİYE"].map((label, index) => (
            <div className="text-center" key={label}>
              <div className="bg-gray-100 max-sm:bg-white rounded-lg py-3 px-1">
                <span
                  className={`text-3xl font-mono font-medium text-gray-800 ${
                    label === "SANİYE" ? "animate-pulse" : ""
                  }`}
                >
                  {
                    [
                      formatNumber(timeLeft.days),
                      formatNumber(timeLeft.hours),
                      formatNumber(timeLeft.minutes),
                      formatNumber(timeLeft.seconds),
                    ][index]
                  }
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
