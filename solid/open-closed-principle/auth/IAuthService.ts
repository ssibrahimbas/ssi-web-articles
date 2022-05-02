import IAuthProvider from "./provider/IAuthProvider";
import User from "../user/User";
import { AuthCredential } from "./credential/AuthCredential";

export default interface IAuthService {
  provider: IAuthProvider;

  login: (credentials: AuthCredential) => Promise<User>;
}
