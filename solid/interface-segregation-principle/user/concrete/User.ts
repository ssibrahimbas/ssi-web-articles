import IUser from "../abstract/IUser";

export default class User implements IUser {
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
