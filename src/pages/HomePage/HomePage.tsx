import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Users from "../../components/Users/Users";

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState): any => state.users);

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  }, [navigate, user]);

  return (
    <>
      <h2>User list</h2>
      <Users />
    </>
  );
};

export default HomePage;
