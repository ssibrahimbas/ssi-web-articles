import User from "./User";
import ICustomer from "../abstract/ICustomer";

export default class Customer extends User implements ICustomer {
  readonly pointOfOrder: number;
  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    pointOfOrder: number
  ) {
    super(firstName, lastName, email, password);
    this.pointOfOrder = pointOfOrder;
  }

  get discount(): number {
    return this.pointOfOrder === 0 ? 0 : this.pointOfOrder / 100;
  }
}
