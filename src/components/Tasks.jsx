import { useState, useEffect } from "react";
import Calendar from "./Calendar/Calendar";
import CreateCard from "./CreateCard";
import Cards from "./Cards";

export default function TaskManager() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("Tarefa")) || []
  );

  useEffect(() => {
    localStorage.setItem("Tarefa", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask]);
  };

  const tasksOfDay = selectedDate
    ? tasks.filter((t) => t.date === selectedDate.toISOString().split("T")[0])
    : [];

  return (
    <div>
      <Calendar onSelectDay={setSelectedDate} />
      <Cards tasks={tasksOfDay} />
      <CreateCard onAddTask={handleAddTask} selectedDate={selectedDate} />
    </div>
  );
}
