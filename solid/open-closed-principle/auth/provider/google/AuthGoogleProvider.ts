import UserService from "../../../user/UserService";
import BaseAuthProvider from "../BaseProvider";
import IAuthProvider from "../IAuthProvider";
import { AuthCredential } from "../../credential/AuthCredential";
import User from "../../../user/User";

export default class AuthGoogleProvider implements IAuthProvider {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  login = async (credentials: AuthCredential): Promise<User> => {
    this.checkGoogleIdIsValid(credentials);
    return this.getUserIsThere(credentials.googleId!);
  };

  private checkGoogleIdIsValid = (credentials: AuthCredential): void => {
    if (!credentials.googleId)
      throw new Error("Please provide a valid Google ID");
  };

  private getUserIsThere = async (googleId: string): Promise<User> => {
    const user: User | undefined = await this.userService.getUserByGoogleId(
      googleId
    );
    if (!user) throw new Error("User not found");
    return user;
  };
}
