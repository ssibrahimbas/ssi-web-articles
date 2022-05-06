import IUser from "./IUser";

export default interface ICustomer extends IUser {
  pointOfOrder: number;
  discount: number;
}
