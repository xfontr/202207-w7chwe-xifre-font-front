import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "../../app/store";
import HomePage from "../../pages/HomePage/HomePage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import { signUpActionCreator } from "../../store/slices/userSlice";
import getTokenData from "../../utils/auth";
import getUserById from "../../utils/getById";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const decodedToken = getTokenData(token);
        const user = await getUserById(decodedToken.id);

        if (user) {
          dispatch(signUpActionCreator(user));
        }
      }
    })();
  }, [dispatch]);

  const user = useSelector((state: RootState): any => state.users);

  const isUserLogged = user.name ? true : false;
  console.log(isUserLogged);

  return (
    <AppStyled>
      <header className="header">
        <h1>Users</h1>
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isUserLogged ? "/home" : "/sign-in"} />}
          />

          {isUserLogged && <Route path="/home" element={<HomePage />} />}
          {!isUserLogged && (
            <Route path="/home" element={<Navigate to="/sign-in" />} />
          )}

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
