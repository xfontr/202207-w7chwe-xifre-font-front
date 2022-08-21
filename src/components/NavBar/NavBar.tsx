import { Link } from "react-router-dom";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled>
      <Link to="/home">Home</Link>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
    </NavBarStyled>
  );
};

export default NavBar;
