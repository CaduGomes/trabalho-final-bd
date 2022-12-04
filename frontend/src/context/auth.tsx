import { createContext, useContext, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  name: string;
  id: string;
  age: number;
  email: string;
  id_campus: string;
  cpf: string;
}

const initialData = {
  name: "",
  id: "",
  age: 0,
  email: "",
  id_campus: "",
  cpf: "",
};

const AuthContext = createContext({
  user: initialData,
  login: (email: string, password: string) => Promise.resolve(false),
  logout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<AuthContextData>(initialData);

  const logout = () => {
    setUser(initialData);
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setUser(data);

        return true;
      }

      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useUser = () => {
  const context = useContext(AuthContext);
  return context;
};

export { AuthProvider, useUser };
