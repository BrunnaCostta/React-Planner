import Button from "./Helpers/Button";
import Input from "../components/Helpers/Input";

export default function CreateCard() {
  
  const createTask = () => {


  };

  return (
    <>
      <div className="flex py-4 justify-between px-2 border border-gray-300 rounded-lg mx-4 my-8 lg:w-[38%]">
        <Input type="text" placeholder="Nova tarefa..." className={""} />

        <Button
          className={
            "bg-gradient-to-r from-pink-400 to-purple-600 border rounded-lg text-white px-3 py-1"
          }
          name="Adicionar"
        />
      </div>
    </>
  );
}
