export interface ISmsService {
  sendSMS: (phone: string, content: string) => Promise<boolean>;
}

export class SmsService implements ISmsService {
  constructor() {}

  sendSMS = async (phone: string, content: string) => {
    return true;
  };
}
