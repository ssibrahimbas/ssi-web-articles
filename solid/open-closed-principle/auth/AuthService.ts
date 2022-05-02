import IAuthService from "./IAuthService";
import IAuthProvider from "./provider/IAuthProvider";
import { AuthCredential } from "./credential/AuthCredential";
import User from "../user/User";

export default class AuthService implements IAuthService {
  provider: IAuthProvider;

  constructor(provider: IAuthProvider) {
    this.provider = provider;
  }

  login = async (credentials: AuthCredential): Promise<User> => {
    return this.provider.login(credentials);
  };
}
