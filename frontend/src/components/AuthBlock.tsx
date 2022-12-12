import { useState } from "react";
import { useUser } from "../context/auth";

const AuthBlock: React.FC = () => {
  const { login, logout, user } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogged = user.name !== "";

  const authHandler = async () => {
    const response = await login(email, password);
    console.log(response);

    if (response === true) {
      alert("Login realizado com sucesso!");
    } else {
      alert("Erro ao realizar login!");
    }
  };

  return (
    <div className="w-fit h-fit flex flex-col items-center">
      <h1 className="text-2xl font-bold">Autenticação</h1>
      <div className="px-2 py-5 border border-slate-600 rounded-md flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-1 px-3 rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-1 px-3 rounded-md"
        />
        <button
          className="bg-slate-600 hover:bg-slate-400 duration-150 text-white rounded-md p-2"
          onClick={authHandler}
        >
          Entrar
        </button>
        {isLogged && (
          <div>
            <h2 className="font-bold">Autenticado como:</h2>
            <p>Nome: {user.name}</p>
            <p>Id: {user.id_user}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>Id Campus: {user.id_campus}</p>
            <p>CPF: {user.cpf}</p>

            <button
              className="bg-slate-600 hover:bg-slate-400 duration-150 text-white rounded-md p-2"
              onClick={logout}
            >
              Sair
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthBlock;
