import User from "./User";

export default interface IUserService {
  users: Array<User>;

  addUser(user: User): void;

  getUserByMail(mail: string): Promise<User | undefined>;
  getUserByGoogleId(googleId: string): Promise<User | undefined>;

  setUserGoogleId(user: User, googleId: string): void;
}
