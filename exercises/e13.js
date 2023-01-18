// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

const getDepositsLessThan2000 = (deposits) => {
  let depositTotal = 0;
  for (let index = 0; index < deposits.length; index++) {
    const deposit = deposits[index];
    depositTotal += deposit;
  }
  return depositTotal < 2000;
};

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  const depositsLessThan2000 = [];
  for (let index = 0; index < array.length; index++) {
    const bankAccount = array[index];
    if (
      !bankAccount.deposits ||
      getDepositsLessThan2000(bankAccount.deposits)
    ) {
      depositsLessThan2000.push(bankAccount);
    }
  }
  return depositsLessThan2000;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
