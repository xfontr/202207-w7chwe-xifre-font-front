import { User as IUser } from "../../store/types/userTypes";
import Button from "../Button/Button";
import { ProfileImage, UserStyled } from "./UserStyled";

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps): JSX.Element => {
  return (
    <UserStyled>
      <h3>{user.name}</h3>
      <ProfileImage
        src={user.image}
        alt={user.name}
        loading="lazy"
        width={150}
      />
      <Button content="Friends" type="button" key="friends-button" />
      <Button content="Enemies" type="button" key="enemies-button" />
    </UserStyled>
  );
};

export default User;
