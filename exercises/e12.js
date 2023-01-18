// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

const getDepositsOver100 = (deposits) => {
  const depositTotal = [];
  for (let index = 0; index < deposits.length; index++) {
    const deposit = deposits[index];
    if (deposit > 100) {
      depositTotal.push(deposit);
    }
  }
  return depositTotal;
};

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const depositOver100 = [];
  for (let index = 0; index < array.length; index++) {
    const bankAccount = array[index];
    if (bankAccount.deposits) {
      const deposits = getDepositsOver100(bankAccount.deposits);
      depositOver100.push(deposits);
    }
  }
  return depositOver100.flat();
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
