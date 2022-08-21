import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutActionCreator } from "../../store/slices/userSlice";
import Button from "../Button/Button";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.clear();
    dispatch(signOutActionCreator());
    navigate("/sign-in");
  };

  return (
    <NavBarStyled>
      <Link to="/home">Home</Link>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
      <Button content="Sign out" type="button" action={handleSignOut} />
    </NavBarStyled>
  );
};

export default NavBar;
