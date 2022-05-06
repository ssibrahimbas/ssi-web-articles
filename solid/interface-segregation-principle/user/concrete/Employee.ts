import User from "./User";
import IEmployee from "../abstract/IEmployee";

export default class Employee extends User implements IEmployee {
  readonly hourOfWork: number;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    hourOfWork: number
  ) {
    super(firstName, lastName, email, password);
    this.hourOfWork = hourOfWork;
  }

  get salary(): number {
    return this.hourOfWork * 23 * 26;
  }
}
