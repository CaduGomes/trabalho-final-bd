import { Link } from "react-router-dom";
import AuthBlock from "../../components/AuthBlock";
import SearchTravels from "../../components/SearchTravels";
import UserHistory from "../../components/UserHistory";
import { useUser } from "../../context/auth";

const HomePage: React.FC = () => {
  const { login, logout, user } = useUser();
  return (
    <div className="p-10 w-full flex gap-5">
      <AuthBlock />
      <UserHistory />
      <SearchTravels />
    </div>
  );
};

export default HomePage;
