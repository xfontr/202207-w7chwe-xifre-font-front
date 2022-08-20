import { User } from "../store/types/userTypes";

const apiUrl = process.env.REACT_APP_URL as string;

export const getUserById = async (id: string): Promise<User | false> => {
  try {
    const userById = await fetch(`${apiUrl}/users/${id}`);
    const fullUser: User = await userById.json();

    return fullUser;
  } catch (error) {
    return false;
  }
};

export default getUserById;
