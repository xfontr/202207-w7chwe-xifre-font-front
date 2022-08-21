import { Link } from "react-router-dom";

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/sign-in">Sign in</Link>
      <Link to="/sign-up">Sign up</Link>
    </nav>
  );
};

export default NavBar;
