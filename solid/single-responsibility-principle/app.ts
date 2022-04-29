import { LoginService } from "./LoginService";
import { MailService } from "./MailService";
import { SmsService } from "./SmsService";
import { VerificationService } from "./VerificationService";
import { MembershipService } from "./MembershipService";

const loginService = new LoginService();
const mailService = new MailService();
const smsService = new SmsService();

const verificationService = new VerificationService(mailService, smsService);
const membershipsService = new MembershipService(
  loginService,
  verificationService
);

(async () => {
  const token = await membershipsService.create(
    "Sami",
    "Salih",
    "info@ssibrahimbas.com"
  );
  console.log("token -> ", token);
})();
