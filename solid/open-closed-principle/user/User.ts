export default class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  googleId?: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    googleId?: string
  ) {
    this.id = this.createId();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.googleId = googleId;
  }

  private createId = (): number => {
    return Math.floor(Math.random() * 1000);
  };
}
