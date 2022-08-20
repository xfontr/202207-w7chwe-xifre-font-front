export interface User {
  id: string;
  name: string;
  image: string;
  biography: string;
  contacts: {
    friends: string[];
    enemies: string[];
  };
}

export interface SignInData {
  name: string;
  password: string;
}

export type ProtoUser = Omit<User, "id">;

export type UserToRegister = Omit<ProtoUser, "contacts">;
