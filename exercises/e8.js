// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let clients;
  for (let index = 0; index < array.length; index++) {
    const bankAccount = array[index];
    if (!clients) {
      clients = bankAccount;
    }
    if (clients.balance < bankAccount.balance && bankAccount.balance > 0) {
      clients = bankAccount;
    }
  }
  return [clients];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
