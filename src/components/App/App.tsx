import { Route, Routes } from "react-router-dom";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled>
      <header className="header">
        <h1>Users</h1>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
