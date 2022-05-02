import User from "./user/User";
import UserService from "./user/UserService";
import BaseAuthProvider from "./auth/provider/BaseProvider";
import AuthGoogleProvider from "./auth/provider/google/AuthGoogleProvider";
import AuthService from "./auth/AuthService";

(async () => {
  const userService = new UserService();

  const baseProvider = new BaseAuthProvider(userService);
  const googleProvider = new AuthGoogleProvider(userService);

  const authService = new AuthService(baseProvider);
  const authServiceSec = new AuthService(googleProvider);

  const sami = new User(
    "Sami Salih",
    "İbrahimbaş",
    "info@ssibrahimbas.com",
    "1234"
  );
  const elon = new User("Elon", "Musk", "info@tesla.com", "1234");
  userService.addUser(sami);
  userService.addUser(elon);
  userService.setUserGoogleId(elon, "YouDon'tHaveEnoughMoneyToBuyMe");

  await authService.login({
    email: "info@ssibrahimbas.com",
    password: "1234",
  }); // success
  await authServiceSec.login({
    googleId: "IWillBuyYouToo", // User Not Found
  });
})();
