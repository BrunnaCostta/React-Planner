import { useState, memo } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import CreateCard from "./CreateCard";

function Cards() {
  const [show, setShow] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  let tasks = JSON.parse(localStorage.getItem("Tarefa")) || [];

  const getTask = (input) => {
    console.log(input, "Input");

    tasks.push(input);

    localStorage.setItem("Tarefa", JSON.stringify(tasks));

    console.log(tasks, "tasks");
  };

  const handleClick=(index)=>{
setCheckedItems =>(checkedItems)

  }

  return (
    <>
      <div className="border border-gray-300 rounded-lg mx-4 lg:w-[38%] lg:mx-auto">
        <div className="flex items-center gap-2 justify-center py-4 bg-[#f3e5ff] rounded-t-lg">
          <CalendarDaysIcon className="h-5 w-5 text-[#9d4edd]" />
          <h3 className="text-[#9d4edd] font-bold">Tarefas do Dia</h3>
        </div>

        <section className="px-3 py-4">
          {setShow && !tasks.length && (
            <div className="flex flex-col items-center text-center">
              <CalendarDaysIcon className="h-8 w-8 text-[#9d4edd]" />
              <p className="text-gray-700 mt-2">
                Selecione um dia no calendário para ver as tarefas
              </p>
            </div>
          )}
          <div className="flex flex-col items-center w-full">
            {tasks.map((item, index) => (
              <label
                key={index}
                className="flex items-center border my-2 border-gray-300 px-3 py-2 w-full rounded"
              >
                <input
                  type="checkbox"
                  className="mr-2 w-5 h-5 rounded border-gray-300 "
                  style={{ accentColor: "#9d4edd" }}
                />
                <p className="line-through">{item}</p>
              </label>
            ))}
          </div>
        </section>
      </div>

      <div className="lg:flex lg:justify-center">
        <CreateCard onAddTask={getTask} />
      </div>
    </>
  );
}
export default memo(Cards);
