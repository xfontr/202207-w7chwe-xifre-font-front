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
        {users.map((user) => (
          <li>
            <User user={user} />
          </li>
        ))}
      </UsersStyledList>
    </UsersStyled>
  );
};

export default Users;
