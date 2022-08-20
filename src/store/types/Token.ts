export interface Token {
  user: {
    token: string;
  };
}

export interface TokenContent {
  id: string;
  username: string;
  iat: number;
}
