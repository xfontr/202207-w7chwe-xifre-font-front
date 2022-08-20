import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { signUpActionCreator } from "../store/slices/userSlice";
import { Token, TokenContent } from "../store/types/Token";
import { User, ProtoUser, SignInData } from "../store/types/userTypes";
import getTokenData from "../utils/auth";

const apiUrl = process.env.REACT_APP_URL as string;

const useUsers = () => {
  const dispatch = useDispatch();

  const signUp = useCallback(
    async (user: ProtoUser): Promise<boolean> => {
      try {
        const tryLogin = await fetch(`${apiUrl}/users/sign-up`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const newUser: { newUser: User } = await tryLogin.json();

        dispatch(signUpActionCreator(newUser.newUser));
        return true;
      } catch (error) {
        return false;
      }
    },
    [dispatch]
  );

  const signIn = useCallback(
    async (user: SignInData): Promise<boolean> => {
      try {
        const tryLogin = await fetch(`${apiUrl}/users/sign-in`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        });

        const token: Token = await tryLogin.json();
        const tokenContent: TokenContent = getTokenData(token.user.token);
        localStorage.setItem("token", token.user.token);

        const userById = await fetch(`${apiUrl}/users/${tokenContent.id}`);
        const fullUser: User = await userById.json();

        dispatch(signUpActionCreator(fullUser));
        return true;
      } catch (error) {
        return false;
      }
    },
    [dispatch]
  );

  return { signUp, signIn };
};

export default useUsers;
