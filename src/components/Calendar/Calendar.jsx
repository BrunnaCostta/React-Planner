import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const months = [
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

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function Calendar({ onSelectDay }) {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [daySelected, setDaySelected] = useState(null);

  const firstDay = new Date(year, selectedMonth, 1);
  const lastDay = new Date(year, selectedMonth + 1, 0);

  const selectDay = (day) => {
    if (day) {
      setDaySelected(day);
      const date = new Date(year, selectedMonth, day);
      if (onSelectDay) {
        onSelectDay(date);
      }
    }
  };

  const generateDays = () => {
    const data = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      data.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      data.push(i);
    }
    return data;
  };

  const days = generateDays();

  const NextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setYear(year + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
    setDaySelected(null);
  };

  const BackMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setYear(year - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
    setDaySelected(null);
  };

  const isToday = (day) =>
    day &&
    day === today.getDate() &&
    selectedMonth === today.getMonth() &&
    year === today.getFullYear();

  return (
    <div className="mx-auto px-4 py-6 lg:w-[50%] ">
      <header className=" px-4 pt-2 flex bg-[#2B2C34] justify-between items-center rounded-t-lg">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-lg font-bold text-center">
          {months[selectedMonth]} {year}
        </h1>

        <div className="flex gap-2 mb-2">
          <button
            className="h-8 w-8 flex items-center justify-center rounded"
            onClick={BackMonth}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>
          <button
            className=" h-8 w-8 flex items-center justify-center rounded"
            onClick={NextMonth}
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      </header>

      <section className="h-[350px] border border-[#30313A] bg-[#2B2C34] rounded-b-lg text-white px-3">
        <div className="grid grid-cols-7 text-center py-6 font-bold">
          {daysOfWeek.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {days.map((day, index) => {
            const isSelected = day && daySelected === day;
            return (
              <button
                key={index}
                onClick={() => selectDay(day)}
                disabled={!day}
                className={`
                  h-10 flex items-center justify-center rounded 
                  ${day ? "cursor-pointer" : "cursor-default"}
                  ${
                    isSelected
                      ? "bg-purple-500 text-white font-bold"
                      : isToday(day)
                      ? "bg-purple-600 text-white font-bold"
                      : " rounded-lg bg-[#383940]"
                  }
                `}
              >
                {day || ""}
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
