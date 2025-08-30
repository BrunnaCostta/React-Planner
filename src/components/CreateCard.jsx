import Button from "./Helpers/Button";
import Input from "../components/Helpers/Input";
import { useEffect, useState } from "react";

export default function CreateCard() {


    
  return (
    <div className="flex py-4 justify-around border border-gray-300 rounded-lg  mx-4 my-8 ">
      <Input type="text" placeholder="Nova tarefa..." className={""} />

      <Button
        className={"bg-black border rounded-lg text-white px-3 py-1"}
        name="Adicionar"
      />
    </div>
  );
}
