import Button from "./Helpers/Button";
import Input from "../components/Helpers/Input";
import { useState } from "react";

export default function CreateCard({ onAddTask, selectedDate }) {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Tarefa")) || []
  );

  const addTask = () => {
    if (!input || !selectedDate) return; 

    const newTask = {
      text: input,
      done: false,
      date: selectedDate.toISOString().split("T")[0], 
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("Tarefa", JSON.stringify(updatedTasks));
    onAddTask(newTask);
    setInput("");
  };

  return (
    <div className="flex py-4 justify-between mx-4 px-2 border border-[#30313A] bg-[#2B2C34] rounded-lg lg:mx-auto my-8 lg:w-[48%]">
      <Input
        type="text"
        value={input}
        placeholder={
          selectedDate ? "Nova tarefa..." : "Selecione uma data no calendário"
        }
        className="text-white bg-[#] "
        style={{
          border: "1px solid gray",
          borderRadius: "10px",
          padding: "10px",
          width: "60%",
        }}
        onChange={(event) => setInput(event.target.value)}
        disabled={!selectedDate}
      />

      <Button
        className={
          "bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg text-white px-3 py-1"
        }
        name="Adicionar"
        onClick={addTask}
      />
    </div>
  );
}
