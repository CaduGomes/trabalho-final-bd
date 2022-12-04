import { useState } from "react";
import { useUser } from "../context/auth";

const UserHistory: React.FC = () => {
  const { user } = useUser();
  const [travels, setTravels] = useState([]);

  const authHandler = async () => {
    if (user.name === "") {
      alert("Você precisa estar logado para acessar essa página!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/travel/user?id=${user.id}`
      );

      if (response.status === 200) {
        const data = await response.json();
        setTravels(data);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar busca!");
    }
  };

  return (
    <div className="w-fit h-fit flex flex-col items-center">
      <h1 className="text-2xl font-bold">Histórico de caronas</h1>
      <div className="px-2 py-5 border border-slate-600 rounded-md flex flex-col gap-2 w-80">
        <button
          className="bg-slate-600 hover:bg-slate-400 duration-150 text-white rounded-md p-2"
          onClick={authHandler}
        >
          Buscar suas caronas
        </button>
      </div>
    </div>
  );
};

export default UserHistory;
