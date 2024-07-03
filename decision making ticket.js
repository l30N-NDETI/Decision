const age = parseInt(prompt("Enter your age: "));

switch (true) {
  case age <= 12:
    console.log("Ticket price: ksh100");
    break;
  case age >= 13 && age <= 17:
    console.log("Ticket price: ksh1500");
    break;
  case age >= 18:
    console.log("Ticket price: ksh2000");
    break;
  default:
    console.log("Invalid age");
}