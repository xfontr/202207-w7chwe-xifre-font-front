import mockUser from "../../test-utils/mocks/mockUser";
import User from "../User/User";
import { UsersStyled, UsersStyledList } from "./UsersStyled";

const Users = (): JSX.Element => {
  const usersMock = [mockUser, mockUser, mockUser];

  return (
    <UsersStyled>
      <UsersStyledList>
        {usersMock.map((user) => (
          <li>
            <User user={user} />
          </li>
        ))}
      </UsersStyledList>
    </UsersStyled>
  );
};

export default Users;
