import { useState, memo } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import Modal from "../components/Helpers/Modal";
import { TrashIcon } from "@heroicons/react/24/outline";

function Cards({ tasks = [] }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleClick = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDeleteClick = (item) => {
    setTaskToDelete(item);
    setOpenModal(true);
  };

  const confirmDelete = () => {
    console.log("Deletando tarefa:", taskToDelete); 
    setOpenModal(false);
  };

  return (
    <>
      <div className="border border-[#30313A] rounded-lg mx-4 lg:w-[48%] lg:mx-auto ">
        <div className="flex items-center gap-2 justify-center py-4 bg-[#2B2C34] rounded-t-lg">
          <CalendarDaysIcon className="h-5 w-5 text-[#9d4edd]" />
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500  font-bold">
            Tarefas do Dia
          </h3>
        </div>

        <section className="px-3 py-4">
          {!tasks.length && (
            <div className="flex flex-col items-center text-center">
              <CalendarDaysIcon className="h-8 w-8 text-gray-300" />
              <p className="text-gray-300 mt-2">
                Nenhuma tarefa para esta data.
              </p>
            </div>
          )}
          <div className="flex flex-col  w-full">
            {tasks.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border my-2 border-gray-300 px-3 py-2 w-full rounded text-white"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 w-5 h-5 rounded border-gray-300"
                    style={{ accentColor: "#9d4edd" }}
                    checked={checkedItems[index] || false}
                    onChange={() => handleClick(index)}
                  />
                  <span className={checkedItems[index] ? "line-through" : ""}>
                    {item.text}
                  </span>
                </div>

                <TrashIcon
                  className="h-5 w-5 text-white cursor-pointer"
                  onClick={() => handleDeleteClick(item)}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      {openModal && (
        <Modal
          title="Deseja remover esta tarefa?"
          message="Após a remoção, a ação não poderá ser desfeita"
          confirm="Sim"
          cancel="Não"
          onConfirm={confirmDelete}
          onCancel={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

export default memo(Cards);
