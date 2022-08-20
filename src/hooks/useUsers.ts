import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { signUpActionCreator } from "../store/slices/userSlice";
import { User, ProtoUser } from "../store/types/userTypes";

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

  return { signUp };
};

export default useUsers;
