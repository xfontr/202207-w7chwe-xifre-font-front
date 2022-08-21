import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): JSX.Element => {
  const handleSignOut = () => {};

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
