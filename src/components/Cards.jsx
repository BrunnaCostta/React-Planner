import { useState } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import CreateCard from "./CreateCard";

export default function Cards() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="border border-gray-300 rounded-lg  mx-4 lg:w-[38%] lg:mx-auto lg:h-[250px]">
        <div className="flex items-center gap-2 justify-center py-4 bg-[#f3e5ff]">
          <CalendarDaysIcon className="h-5 w-5 text-[#9d4edd]" />
          <h3 className="text-[#9d4edd] font-bold">Tarefas do Dia</h3>
        </div>

        <section className="flex items-center justify-center h-40 px-3">
          <div className="flex flex-col items-center">
            <CalendarDaysIcon className="h-8 w-8 text-[#9d4edd]" />
            <p className="text-gray-700 mt-2 text-center">
              Selecione um dia no calendário para ver as tarefas
            </p>
          </div>
        </section>
      </div>
      <div className="lg:flex lg:justify-center">
        <CreateCard />
      </div>
    </>
  );
}
