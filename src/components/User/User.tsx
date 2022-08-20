import { User as IUser } from "../../store/types/userTypes";
import Button from "../Button/Button";
import { ProfileImage, UserStyled } from "./UserStyled";

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps): JSX.Element => {
  return (
    <UserStyled>
      <ProfileImage
        src={user.image}
        alt={user.name}
        loading="lazy"
        width={250}
      />
      <h3>{user.name}</h3>
      <Button content="Friends" type="button" />
      <Button content="Enemies" type="button" />
    </UserStyled>
  );
};

export default User;
