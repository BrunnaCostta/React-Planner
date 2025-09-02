import Button from "./Helpers/Button";
import Input from "../components/Helpers/Input";
import { useState } from "react";

export default function CreateCard({ onAddTask }) {
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input) return;
    const tasks = JSON.parse(localStorage.getItem("Tarefa") || "[]");
    tasks.push(input);
    localStorage.setItem("Tarefa", JSON.stringify(tasks));
    onAddTask(input);
    setInput("");
  };

  return (
    <>
      <div className="flex py-4 justify-between px-2 border border-gray-300 rounded-lg mx-4 my-8 lg:w-[38%]">
        <Input
          type="text"
          value={input}
          placeholder="Nova tarefa..."
          style={{
            border: "1px solid purple",
            borderRadius: "10px",
            padding: "10px",
            width: "60%",
          }}
          onChange={(event) => setInput(event.target.value)}
        />

        <Button
          className={
            "bg-gradient-to-r from-pink-400 to-purple-600 border rounded-lg text-white px-3 py-1"
          }
          name="Adicionar"
          onClick={addTask}
        />
      </div>
    </>
  );
}
