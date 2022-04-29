import { IMailService } from "./MailService";
import { ISmsService } from "./SmsService";

export interface IVerificationService {
  sendSms: (phone: string) => Promise<void>;
  sendMail: (email: string) => Promise<void>;
}

export class VerificationService implements IVerificationService {
  private mailService: IMailService;
  private smsService: ISmsService;
  // dependency injection
  constructor(mailService: IMailService, smsService: ISmsService) {
    this.mailService = mailService;
    this.smsService = smsService;
  }

  sendMail = async (email: string): Promise<void> => {
    const content = this.createContent();
    const result: boolean = await this.mailService.sendMail(email, content);
  };

  sendSms = async (phone: string): Promise<void> => {
    const content = this.createContent();
    const result: boolean = await this.smsService.sendSMS(phone, content);
  };

  private createContent = (): string => {
    return "thisIsVerificationContent";
  };
}
