// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

const checkForLetter = (name, letter) => {
  return name.toLowerCase().includes(letter);
};

export function getClientsWithLetterInName(array, letter) {
  // Your code goes here...
  const clients = [];
  for (let index = 0; index < array.length; index++) {
    const bankAccount = array[index];
    if (checkForLetter(bankAccount.name, letter)) {
      clients.push(bankAccount.name);
    }
  }
  return clients;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
