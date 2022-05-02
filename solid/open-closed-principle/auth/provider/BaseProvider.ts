import IAuthProvider from "./IAuthProvider";
import IUserService from "../../user/IUserService";
import { AuthCredential } from "../credential/AuthCredential";
import User from "../../user/User";

export default class BaseAuthProvider implements IAuthProvider {
  userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  login = async (credentials: AuthCredential): Promise<User> => {
    this.checkMailAddressIsValid(credentials);
    this.checkPasswordIsValid(credentials);
    const user = await this.getUserIsThere(credentials.email!);
    this.checkPasswordsIsMatch(user, credentials.password!);
    return user;
  };

  private checkMailAddressIsValid = (credentials: AuthCredential): void => {
    if (!credentials.email)
      throw new Error("Please provide a valid email address");
  };

  private checkPasswordIsValid = (credentials: AuthCredential): void => {
    if (!credentials.password)
      throw new Error("Please provide a valid password");
  };

  private getUserIsThere = async (mail: string): Promise<User> => {
    const user: User | undefined = await this.userService.getUserByMail(mail);
    if (!user) throw new Error("User not found");
    return user;
  };

  private checkPasswordsIsMatch = (user: User, password: string): void => {
    if (user.password !== password) throw new Error("Wrong password");
  };
}
