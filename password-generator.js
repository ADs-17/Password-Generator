function generatePassword(
  length = 12,
  useUppercase = true,
  useNumbers = true,
  useSpecialChars = true
) {
  if (length < 4) {
    throw new Error("Password length should be at least 4.");
  }

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = useUppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  const numbers = useNumbers ? "0123456789" : "";
  const specialChars = useSpecialChars ? "!@#$%^&*()-_=+[]{}|;:,.<>?" : "";

  const allChars = lowercase + uppercase + numbers + specialChars;

  if (!allChars) {
    throw new Error("At least one character set must be enabled.");
  }

  let password = [
    lowercase[Math.floor(Math.random() * lowercase.length)],
    useUppercase
      ? uppercase[Math.floor(Math.random() * uppercase.length)]
      : lowercase[Math.floor(Math.random() * lowercase.length)],
    useNumbers
      ? numbers[Math.floor(Math.random() * numbers.length)]
      : lowercase[Math.floor(Math.random() * lowercase.length)],
    useSpecialChars
      ? specialChars[Math.floor(Math.random() * specialChars.length)]
      : lowercase[Math.floor(Math.random() * lowercase.length)],
  ];

  for (let i = password.length; i < length; i++) {
    password.push(allChars[Math.floor(Math.random() * allChars.length)]);
  }

  return password.sort(() => Math.random() - 0.5).join("");
}

console.log("Generated Password:", generatePassword(16));
