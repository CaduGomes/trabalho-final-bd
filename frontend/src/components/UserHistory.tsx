import { useState } from "react";
import { useUser } from "../context/auth";

const UserHistory: React.FC = () => {
  const { user } = useUser();
  const [travels, setTravels] = useState<
    {
      travelId: string;
      travelDate: string;
      travelPrice: string;
      poiOriginName: string;
      poiOriginId: string;
      poiDestinationName: string;
      poiDestinationId: string;
    }[]
  >([]);
  console.log(travels);

  const authHandler = async () => {
    if (user.name === "") {
      alert("Você precisa estar logado para acessar essa página!");
      return;
    }

    console.log(user);

    try {
      const response = await fetch(
        `http://localhost:3001/user/${user.id_user}/travels`
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

        <div className="flex flex-col gap-2">
          {travels.map((travel) => (
            <div className="flex flex-col gap-2 border border-slate-600 rounded-md p-2">
              <div>
                <span className="font-bold">Data: </span>
                <span>{travel.travelDate}</span>
              </div>
              <div>
                <span className="font-bold">Preço: </span>
                <span>{travel.travelPrice}</span>
              </div>
              <div>
                <span className="font-bold">Origem: </span>
                <span>{travel.poiOriginName}</span>
              </div>
              <div>
                <span className="font-bold">Destino: </span>
                <span>{travel.poiDestinationName}</span>
              </div>
              <div>
                <span className="font-bold">ID da carona: </span>
                <span>{travel.travelId}</span>
              </div>
              <div>
                <span className="font-bold">Preço: </span>

                <span>{travel.travelPrice}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserHistory;
