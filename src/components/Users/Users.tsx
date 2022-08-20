import { useCallback, useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import { User as IUser } from "../../store/types/userTypes";
import User from "../User/User";
import { UsersStyled, UsersStyledList } from "./UsersStyled";

const Users = (): JSX.Element => {
  const { getAllUsers } = useUsers();
  const [users, setUsers] = useState([] as IUser[]);

  const loadUsers = useCallback(async () => {
    const gotUsers = await getAllUsers();

    if (gotUsers) {
      setUsers(gotUsers);
    }
  }, [getAllUsers]);

  if (users.length === 0) {
    loadUsers();
  }

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <UsersStyled>
      <UsersStyledList>
        {users &&
          users.map((user) => (
            <li>
              <User user={user} key={`${user.name}${user.id.slice(0, 5)}`} />
            </li>
          ))}
        {!users.length && (
          <span>
            No users found. Maybe you'd like to talk about us to your friends?
          </span>
        )}
      </UsersStyledList>
    </UsersStyled>
  );
};

export default Users;
