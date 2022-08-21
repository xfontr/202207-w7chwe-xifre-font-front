import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useUsers from "../../hooks/useUsers";
import { User as IUser } from "../../store/types/userTypes";
import Button from "../Button/Button";
import { ProfileImage, UserStyled } from "./UserStyled";

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps): JSX.Element => {
  const { addContact } = useUsers();
  const thisUser = useSelector((state: RootState): any => state.users);

  const handleAddContact = async (
    contact: "friend" | "enemy"
  ): Promise<void> => {
    await addContact(thisUser.id, user.id, contact);
  };

  return (
    <UserStyled>
      <h3>{user.name}</h3>
      <ProfileImage
        src={user.image}
        alt={user.name}
        loading="lazy"
        width={150}
      />
      <Button
        content="Friends"
        type="button"
        key="friends-button"
        action={() => handleAddContact("friend")}
      />
      <Button
        content="Enemies"
        type="button"
        key="enemies-button"
        action={() => handleAddContact("enemy")}
      />
    </UserStyled>
  );
};

export default User;
