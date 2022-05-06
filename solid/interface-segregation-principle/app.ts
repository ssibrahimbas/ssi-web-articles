import Employee from "./user/concrete/Employee";
import Customer from "./user/concrete/Customer";
import ICustomer from "./user/abstract/ICustomer";
import IEmployee from "./user/abstract/IEmployee";

(() => {
  const sami: IEmployee = new Employee(
    "sami",
    "ibrahimbaş",
    "info@ssibrahimbas.com",
    "1234",
    10
  );
  const zuck: ICustomer = new Customer(
    "mark",
    "zuckerberg",
    "info@meta.com",
    "1234",
    345
  );

  console.log("salary -> ", sami.salary);
  console.log("discount -> ", zuck.discount);
})();
