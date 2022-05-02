import IUserService from "./IUserService";
import User from "./User";

export default class UserService implements IUserService {
  users: Array<User> = [];

  constructor() {}

  addUser = (user: User): void => {
    this.users.push(user);
  };

  getUserByGoogleId = async (googleId: string): Promise<User | undefined> => {
    return this.users.find((u) => u.googleId === googleId);
  };

  getUserByMail = async (mail: string): Promise<User | undefined> => {
    return this.users.find((u) => u.email === mail);
  };

  setUserGoogleId = (user: User, googleId: string): void => {
    user.googleId = googleId;
  };
}
