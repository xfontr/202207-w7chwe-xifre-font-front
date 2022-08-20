interface User {
  id: string;
  name: string;
  image: string;
  biography: string;
  contact: {
    friends: string[];
    enemies: string[];
  };
}
export default User;
