import IUser from "./IUser";

export default interface IEmployee extends IUser {
  hourOfWork: number;
  salary: number;
}
