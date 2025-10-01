import { useState } from "react";
import Input from "../Helpers/Input";
import Button from "../Helpers/Button";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../repository/registerRepository";

export default function Login() {
  const [emailInput, setEmailInput] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const emailAcess = (evento) => {
    const value = evento.target.value;
    setEmailInput(value);
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(value));
  };

  const passwordAcess = (evento) => {
    setPasswordInput(evento.target.value);
  };

  const inputsValid = emailValid && passwordInput.length > 0;

  const handleClick = async () => {
    if (!inputsValid) {
      setErrorMessage("Preencha corretamente os campos!");
      return;
    }

    try {
      const response = await LoginUser({
        email: emailInput,
        password: passwordInput,
      });

      if (response.user && response.user.password === passwordInput) {
        navigate("/home");
      } else {
        setErrorMessage("Usuário ou senha incorretos!");
        alert("Dados inválidos. Verifique e tente novamente");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Dados incorretos. Verique seus dados e tente novamente");
    }
  };

  const createAccount = () => {
    navigate("/Register");
  };

  return (
    <section className="bg-[#14151D] h-screen flex flex-col">
      <header className="font-bold text-center py-2 text-white bg-gradient-to-r from-pink-400 to-purple-600">
        Gerencie suas tarefas com praticidade
      </header>

      <div className="md:w-[40%] w-[80%] bg-[#30313A] flex flex-col items-center mx-auto text-white rounded-lg p-4 my-auto">
        <h3 className="text-center text-xl font-semibold">Faça login</h3>

        <label className="w-full mt-2">
          <Input
            type="text"
            value={emailInput}
            onChange={emailAcess}
            placeholder="Digite seu e-mail"
            className="w-full p-2 rounded-lg bg-gray-700 text-white my-6"
          />
          {!emailValid && emailInput.length > 0 && (
            <p className="text-red-500 text-sm -mt-3">Email inválido</p>
          )}

          <Input
            type="password"
            value={passwordInput}
            onChange={passwordAcess}
            placeholder="Digite sua senha"
            className="w-full p-2 rounded-lg bg-gray-700 text-whitee mt-2"
          />
          {emailInput.length > 0 && passwordInput.length === 0 && (
            <p className="text-red-500 text-sm mt-1">Verifique sua senha</p>
          )}
        </label>

        <div className="flex justify-between w-full text-sm pt-2">
          <span className="px-4 cursor-pointer">Esqueceu a senha?</span>
          <span className="mr-4 cursor-pointer" onClick={createAccount}>
            Não tenho conta
          </span>
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm pt-4 text-center">
            {errorMessage}
          </p>
        )}

        <Button
          className={
            inputsValid
              ? "bg-gradient-to-r from-pink-400 to-purple-600 my-4 px-3 py-2 rounded-xl"
              : "bg-gray-600 my-4 px-3 py-2 rounded-xl"
          }
          onClick={handleClick}
          name="Acessar"
          disable={!inputsValid}
        />
      </div>
    </section>
  );
}
