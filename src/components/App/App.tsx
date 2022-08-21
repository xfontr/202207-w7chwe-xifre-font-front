import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";
import { signUpActionCreator } from "../../store/slices/userSlice";
import getTokenData from "../../utils/auth";
import getUserById from "../../utils/getById";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const [isUserChecked, setCheck] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const navigator = useCallback(() => {
    (async () => {
      if (!isUserChecked) {
        const token = localStorage.getItem("token");

        if (token) {
          const decodedToken = getTokenData(token);
          const user = await getUserById(decodedToken.id);

          if (user) {
            await dispatch(signUpActionCreator(user));
            location.pathname === "/home" && navigate("/home");
          } else {
            location.pathname === "/home" && navigate("/sign-in");
          }
          setCheck(true);
        }
      }
    })();
  }, [dispatch, navigate, isUserChecked, location.pathname]);

  if (isUserChecked === false) {
    navigator();
  }

  return (
    <AppStyled>
      <header className="header">
        <h1>Users</h1>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          {<Route path="/home" element={<HomePage />} />}
          {<Route path="/home" element={<Navigate to="/sign-in" />} />}

          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
