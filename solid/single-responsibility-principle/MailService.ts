export interface IMailService {
  sendMail: (email: string, content: string) => Promise<boolean>;
}

export class MailService implements IMailService {
  constructor() {}

  sendMail = async (email: string, content: string) => {
    return true;
  };
}
