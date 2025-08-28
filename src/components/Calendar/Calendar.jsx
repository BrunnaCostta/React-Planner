"use client";
import { useState, useMemo } from "react";

const DAYS_OF_WEEK_PT = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const MONTHS_PT = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export default function CustomCalendar({
  events = [],
  onDateSelect,
  initialDate = new Date(),
  primaryColor = "#e7c6ff",
  secondaryColor = "#e5e7eb",
  showWeekNumbers = false,
  firstDayOfWeek = 0,
}) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const isSameDay = (a, b) => a.toDateString() === b.toDateString();

  const monthDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(
      startDate.getDate() - ((firstDay.getDay() - firstDayOfWeek + 7) % 7)
    );

    const days = [];
    const date = new Date(startDate);
    for (let i = 0; i < 42; i++) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }, [currentDate, firstDayOfWeek]);

  const navigateMonth = (dir) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + (dir === "next" ? 1 : -1));
      return newDate;
    });
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onDateSelect?.(date);
  };

  const getWeekNumber = (date) => {
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  };

  return (
    <div
      style={{
        width: "95vw",
        maxWidth: "1200px",
        margin: "auto",
        padding: "1rem",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={() => navigateMonth("prev")}
          style={{ fontSize: "1.2rem" }}
        >
          {"<"}
        </button>
        <h2>
          {MONTHS_PT[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
        <button
          onClick={() => navigateMonth("next")}
          style={{ fontSize: "1.2rem" }}
        >
          {">"}
        </button>
      </div>

      {/* Week Days */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginBottom: "0.5rem",
        }}
      >
        {DAYS_OF_WEEK_PT.map((day) => (
          <div key={day} style={{ textAlign: "center", fontWeight: "bold" }}>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "4px",
        }}
      >
        {monthDays.map((date, idx) => {
          const isToday = isSameDay(date, new Date());
          const isSelected = isSameDay(date, selectedDate);
          const isCurrentMonth = date.getMonth() === currentDate.getMonth();

          return (
            <div
              key={idx}
              onClick={() => handleDateSelect(date)}
              style={{
                padding: "1rem",
                textAlign: "center",
                cursor: "pointer",
                borderRadius: "0.5rem",
                backgroundColor: isSelected ? primaryColor : "transparent",
                color: isSelected ? "#fff" : isCurrentMonth ? "#000" : "#999",
                fontWeight: isToday ? "bold" : "normal",
              }}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
