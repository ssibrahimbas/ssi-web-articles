import UserService from "../../user/UserService";
import { AuthCredential } from "../credential/AuthCredential";
import User from "../../user/User";

export default interface IAuthProvider {
  userService: UserService;

  login(credentials: AuthCredential): Promise<User>;
}
