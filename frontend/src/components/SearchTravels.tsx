import { useState } from "react";

const CheckIcon = () => (
  <svg
    className="absolute top-1 right-0 fill-green-500"
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
);

const SearchTravels: React.FC = () => {
  const [date, setDate] = useState<string>();
  const [POIOrigin, setPOIOrigin] = useState<{ id_poi: string } | null>(null);
  const [POIDestination, setPOIDestination] = useState<{
    id_poi: string;
  } | null>(null);
  const [data, setData] = useState<{ date: string; id_travel: string }[]>([]);
  const [selectedSearch, setSelectedSearch] = useState<
    | {
        id_user: string;
        name: string;
        age: number;
        campusName: string;
        destinationCityName: string;
        originCityName: string;
      }[]
    | null
  >(null);
  console.log(selectedSearch);

  const searchTravel = async () => {
    if (POIDestination === null || POIOrigin === null || date === undefined) {
      alert("Preencha todos os campos para realizar a busca!");
      return;
    }

    const url = new URLSearchParams();

    url.append("date", date || "");
    url.append("origin", POIOrigin?.id_poi || "");
    url.append("destination", POIDestination?.id_poi || "");

    try {
      const response = await fetch(
        `http://localhost:3001/travels/search?${url.toString()}`
      );

      if (response.status === 200) {
        const data = await response.json();
        setData(data);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar busca!");
    }
  };

  const handleCityOriginChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const response = await fetch(
      `http://localhost:3001/poi/city?name=${e.target.value}`
    );
    if (response.status === 200) {
      const data = await response.json();
      setPOIOrigin(data[0]);
    } else {
      setPOIOrigin(null);
    }
  };

  const handleCityDestinationChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const response = await fetch(
      `http://localhost:3001/poi/city?name=${e.target.value}`
    );
    if (response.status === 200) {
      const data = await response.json();
      setPOIDestination(data[0]);
    } else {
      setPOIDestination(null);
    }
  };

  const handleTravelSelect = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3001/travels/${id}`);

      if (response.status === 200) {
        const data = await response.json();
        setSelectedSearch(data);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao realizar busca dos detalhes da carona!");
    }
  };

  return (
    <div className="flex gap-5">
      <div className="w-fit h-fit flex flex-col items-center">
        <h1 className="text-2xl font-bold">Buscar Caronas</h1>
        <div className="px-2 py-5 border border-slate-600 rounded-md flex flex-col gap-2">
          <div>
            <label htmlFor="date">Selecione a data: </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="py-1 ml-1 rounded-md px-3"
            />
          </div>
          <div className="relative">
            {POIOrigin != null && <CheckIcon />}
            <input
              id="city"
              type="text"
              placeholder="Cidade de origem"
              onChange={handleCityOriginChange}
              className="py-1 ml-1 rounded-md px-3 w-full"
            />
          </div>
          <div className="relative">
            {POIDestination != null && <CheckIcon />}
            <input
              id="city"
              type="text"
              placeholder="Cidade de destino"
              onChange={handleCityDestinationChange}
              className="py-1 ml-1 rounded-md px-3 w-full"
            />
          </div>

          <button
            className="bg-slate-600 hover:bg-slate-400 duration-150 text-white rounded-md p-2"
            onClick={searchTravel}
          >
            Buscar
          </button>

          <br />
          {data.map((travel) => (
            <div
              className="border border-slate-600 rounded-md p-2"
              onClick={() => handleTravelSelect(travel.id_travel)}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <div className="font-bold">id:</div>
                  <div>{travel.id_travel}</div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="font-bold">data:</div>
                  <div>{travel.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-fit h-fit flex flex-col items-center">
        <h1 className="text-2xl font-bold">Detalhes da Carona</h1>
        <div className="px-2 py-5 border border-slate-600 rounded-md flex flex-col gap-2 w-80">
          {selectedSearch == null ? (
            <p className="text-center">Selecione uma carona</p>
          ) : (
            <div>
              <>usuários da carona selecionada:</>
              <div className="flex flex-col gap-2">
                {selectedSearch.map((user) => (
                  <div className="border border-slate-600 rounded-md p-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row gap-2">
                        <div className="font-bold">id:</div>
                        <div>{user.id_user}</div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="font-bold">nome:</div>
                        <div>{user.name}</div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="font-bold">campus:</div>
                        <div>{user.campusName}</div>
                      </div>
                      <div className="flex flex-row gap-2">
                        <div className="font-bold">cidade destino:</div>
                        <div>{user.destinationCityName}</div>
                      </div>

                      <div className="flex flex-row gap-2">
                        <div className="font-bold">cidade origem:</div>
                        <div>{user.originCityName}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchTravels;
