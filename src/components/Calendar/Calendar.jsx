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

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const firstDay = new Date(year, selectedMonth, 1);
  const lastDay = new Date(year, selectedMonth + 1, 0);

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
  };

  const BackMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setYear(year - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <header className="bg-[#e7c6ff] px-4 pt-2 flex justify-between items-center rounded-t-lg">
        <h1 className="text-[#9d4edd] text-lg font-semibold text-center">
          {months[selectedMonth]} {year}
        </h1>

        <div className="flex gap-2 mb-2">
          <button
            className="bg-white h-8 w-8 flex items-center justify-center rounded"
            onClick={BackMonth}
          >
            <ChevronLeftIcon className="h-5 w-5 text-[#9d4edd]" />
          </button>
          <button
            className="bg-white h-8 w-8 flex items-center justify-center rounded"
            onClick={NextMonth}
          >
            <ChevronRightIcon className="h-5 w-5 text-[#9d4edd]" />
          </button>
        </div>
      </header>

      <section className="h-[350px] border border-gray-200 rounded-lg">
        <div className="grid grid-cols-7 text-center py-6 text-[#c77dff] font-bold">
          {daysOfWeek.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 text-center">
          {days.map((day, index) => (
            <div
              key={index}
              className="h-10 flex items-center justify-center border border-gray-100 rounded"
            >
              {day || ""}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
