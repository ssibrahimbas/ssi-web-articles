import { User } from "./user.model";

export interface ILoginService {
  login: (user: User) => Promise<string>;
  register: (user: User) => Promise<string>;
}

export class LoginService implements ILoginService {
  constructor() {}

  login = async (user: User) => {
    return "thisIsAToken";
  };

  register = async (user: User) => {
    return "thisIsAToken";
  };
}
