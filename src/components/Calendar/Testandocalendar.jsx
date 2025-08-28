import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { getDate } from "date-fns";

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

export default function Testandocalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [ano, setAno] = useState(new Date().getFullYear());
  const day = useState(new Date().getDate());

  const NextMonth = () => {
    if (selectedMonth === 7) {
      setSelectedMonth(0);
      setAno(ano + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const BackMonth = () => {
    if (selectedMonth == 0) {
      setSelectedMonth(11);
      setAno(ano - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const today = () => {
    day;
  };

  today();
  return (
    <>
      <header>
        <div className="bg-[#e7c6ff] mx-3 px-6 pt-4 my-3 flex justify-between items-center">
          <h1 className="text-[#9d4edd] text-lg font-semibold text-center">
            {months[selectedMonth]} {ano}
          </h1>

          <div className="flex gap-2 mb-2">
            <button
              className="bg-white h-8 w-8 rounded flex items-center justify-center"
              onClick={BackMonth}
            >
              <ChevronLeftIcon className="h-5 w-5 text-[#9d4edd]" />
            </button>
            <button
              className="bg-white h-8 w-8 rounded flex items-center justify-center"
              onClick={NextMonth}
            >
              <ChevronRightIcon className="h-5 w-5 text-[#9d4edd]" />
            </button>
          </div>
        </div>
      </header>

      <section>
        <div className="flex gap-5 justify-center py-6 text-[#c77dff] font-bold">
          {daysOfWeek.map((day, index) => (
            <div key={index}>{day}</div>
          ))}
        </div>
        <div></div>

        <div></div>
      </section>
    </>
  );
}
