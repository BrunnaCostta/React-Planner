import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <div className="relative font-bold text-center py-2 text-white bg-gradient-to-r from-pink-400 to-purple-600">
        Minha Agenda
        <span
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={logout}
        >
          Sair
        </span>
      </div>

      <div className=" text-center text-gray-200 pt-8">
        Organize suas tarefas de forma simples e eficiente
      </div>
    </>
  );
}
