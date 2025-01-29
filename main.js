const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&*()-+|}{[]></=\\";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = [];

  // Ensure at least one character from each category
  password.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
  password.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  password.push(number[Math.floor(Math.random() * number.length)]);
  password.push(symbol[Math.floor(Math.random() * symbol.length)]);

  // Fill the rest of the password randomly
  while (password.length < length) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  // Shuffle the password array to randomize character order
  password = password.sort(() => Math.random() - 0.5).join("");

  passwordBox.value = password;
}

function copyPassword() {
  navigator.clipboard.writeText(passwordBox.value)
    .then(() => alert("Password copied!"))
    .catch(err => console.error("Error copying password:", err));
}
