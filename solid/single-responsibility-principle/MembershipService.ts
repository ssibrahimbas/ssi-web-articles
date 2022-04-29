import { ILoginService } from "./LoginService";
import { IVerificationService } from "./VerificationService";

export interface IMembershipService {
  create: (
    firstName: string,
    lastName: string,
    email: string,
    phone?: string
  ) => Promise<string>;
}

export class MembershipService implements IMembershipService {
  private loginService: ILoginService;
  private verificationService: IVerificationService;

  constructor(
    loginService: ILoginService,
    verificationService: IVerificationService
  ) {
    this.loginService = loginService;
    this.verificationService = verificationService;
  }

  create = async (
    firstName: string,
    lastName: string,
    email: string,
    phone?: string
  ) => {
    const token: string = await this.loginService.login({
      firstName,
      lastName,
      email,
      phone,
    });
    this.verificationService.sendMail(email).then();
    return token;
  };
}
