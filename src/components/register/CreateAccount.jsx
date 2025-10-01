import { useState } from "react";
import Input from "../Helpers/Input";
import Button from "../Helpers/Button";
import { useNavigate } from "react-router-dom";
import CreatecreateUser from "../../repository/registerRepository";

import {
  AtSymbolIcon,
  UserIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export default function Register() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [nameInput, setnameInput] = useState("");

  const navigate = useNavigate();

  const emailAcess = (e) => setEmailInput(e.target.value);
  const passwordAcess = (e) => setPasswordInput(e.target.value);
  const confirmPasswordAcess = (e) => setconfirmPassword(e.target.value);
  const nameInputAcess = (e) => setnameInput(e.target.value);

  const inputsValid = emailInput.length > 0 && passwordInput.length > 0;

  const accessLogin = () => {
    navigate("/login");
  };

  const accountCreated = async () => {
    console.log("aa");
    if (!inputsValid || passwordInput !== confirmPassword) {
      alert("Preencha os campos corretamente e confirme a senha!");
      return;
    }

    try {
      const data = await CreatecreateUser({
        name: nameInput,
        email: emailInput,
        password: passwordInput,
      });

      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar a conta. Tente novamente.");
    }
  };

  return (
    <section className="bg-[#14151D] h-screen flex flex-col">
      <header className="font-bold text-center py-2 text-white bg-gradient-to-r from-pink-400 to-purple-600">
        Crie sua conta e organize suas tarefas com praticidade
      </header>

      <div className="w-[484px] bg-[#30313A] flex flex-col items-center text-white rounded-xl py-4 m-auto h-[540px]">
        <h3 className="text-center text-2xl font-semibold">Crie sua conta</h3>

        <section className="flex flex-col gap-8 w-full mt-8 px-6">
          <span className="flex items-center gap-2 w-full bg-gray-700 rounded-lg px-3 py-2">
            <UserIcon className="h-5 w-5 text-gray-400" />
            <Input
              type="text"
              value={nameInput}
              onChange={nameInputAcess}
              placeholder="Digite seu nome"
              className="flex-1 bg-transparent text-white outline-none"
            />
          </span>

          <span className="flex items-center gap-2 w-full bg-gray-700 rounded-lg px-3 py-2">
            <AtSymbolIcon className="h-5 w-5 text-gray-400" />
            <Input
              type="text"
              value={emailInput}
              onChange={emailAcess}
              placeholder="Digite seu e-mail"
              className="flex-1 bg-transparent text-white outline-none"
            />
          </span>

          <span className="flex items-center gap-2 w-full bg-gray-700 rounded-lg px-3 py-2">
            <LockClosedIcon className="h-5 w-5 text-gray-400" />
            <Input
              type="password"
              value={passwordInput}
              onChange={passwordAcess}
              placeholder="Digite sua senha"
              className="flex-1 bg-transparent text-white outline-none"
            />
          </span>

          <span className="flex items-center gap-2 w-full bg-gray-700 rounded-lg px-3 py-2">
            <LockClosedIcon className="h-5 w-5 text-gray-400" />
            <Input
              type="text"
              value={confirmPassword}
              onChange={confirmPasswordAcess}
              placeholder="Confirme a senha"
              className="flex-1 bg-transparent text-white outline-none"
            />
          </span>
        </section>

        <span
          className="mr-4 cursor-pointer flex justify-center w-full text-sm pt-2"
          onClick={accessLogin}
        >
          Já possui login?
        </span>

        <Button
          className={
            inputsValid
              ? "bg-gradient-to-r from-pink-400 to-purple-600 my-4 px-3 py-2 rounded-xl my-auto cursor-pointer"
              : "bg-gray-600 my-4 px-3 py-2 rounded-xl my-auto  cursor-pointer"
          }
          onClick={accountCreated}
          name="Criar conta"
          disable={!inputsValid}
        />
      </div>
    </section>
  );
}
