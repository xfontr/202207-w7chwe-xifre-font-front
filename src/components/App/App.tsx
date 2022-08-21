import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const shit = useCallback(() => {
    (async () => {
      const token = localStorage.getItem("token");

      if (token) {
        const decodedToken = getTokenData(token);
        const user = await getUserById(decodedToken.id);

        if (user) {
          await dispatch(signUpActionCreator(user));
          navigate("/home");
        } else {
          navigate("/sign-in");
        }
      }
    })();
  }, [dispatch, navigate]);

  const user = useSelector((state: RootState): any => state.users);

  if (!user) {
    shit();
  }

  return (
    <AppStyled>
      <header className="header">
        <h1>Users</h1>
      </header>

      <main className="main">
        <Routes>
          <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/sign-in"} />}
          />

          {user && <Route path="/home" element={<HomePage />} />}
          {!user && <Route path="/home" element={<Navigate to="/sign-in" />} />}

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
