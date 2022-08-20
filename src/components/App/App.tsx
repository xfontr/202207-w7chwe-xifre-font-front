import AppStyled from "./AppStyled";
import SignForm from "../SignForm/SignForm";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <header className="header">
        <h1>Users</h1>
      </header>

      <main className="main">
        <SignForm isSignIn={true} />
      </main>
    </AppStyled>
  );
};

export default App;
