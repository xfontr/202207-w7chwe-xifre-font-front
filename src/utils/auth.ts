import jwt_decode from "jwt-decode";
import { TokenContent } from "../store/types/Token";

const getTokenData = (token: string): TokenContent => jwt_decode(token);

export default getTokenData;
