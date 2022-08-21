import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  addEnemyActionCreator,
  addFriendActionCreator,
  signUpActionCreator,
} from "../store/slices/userSlice";
import { Token, TokenContent } from "../store/types/Token";
import { User, ProtoUser, SignInData } from "../store/types/userTypes";
import getTokenData from "../utils/auth";
import getUserById from "../utils/getById";

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

        const fullUser = await getUserById(tokenContent.id);

        if (!fullUser) {
          new Error();
        }

        dispatch(signUpActionCreator(fullUser as User));
        return true;
      } catch (error) {
        return false;
      }
    },
    [dispatch]
  );

  const getAllUsers = useCallback(async (): Promise<User[] | false> => {
    try {
      const allUsers = await fetch(`${apiUrl}/users/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const { users }: { users: User[] } = await allUsers.json();

      if (!users.length) {
        throw new Error();
      }

      return users;
    } catch (error) {
      return false;
    }
  }, []);

  const addContact = useCallback(
    async (userId: string, friendId: string, contact: "friend" | "enemy") => {
      try {
        const newContact = await fetch(
          `${apiUrl}/users/add-${contact}/${userId}/${friendId}`,
          {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const response = await newContact.json();

        if (response["error"]) {
          throw new Error();
        }

        if (contact === "friend") {
          dispatch(addFriendActionCreator(friendId));
        } else {
          dispatch(addEnemyActionCreator(friendId));
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    [dispatch]
  );

  return { signUp, signIn, getAllUsers, addContact };
};

export default useUsers;
