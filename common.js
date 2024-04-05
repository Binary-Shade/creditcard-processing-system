// Function to initialize or retrieve current balance from local storage
function initializeBalance() {
  let currentBalance = localStorage.getItem("currentBalance");
  if (currentBalance === null) {
    // If current balance is not set in local storage, set it to 1000
    currentBalance = 1000;
    localStorage.setItem("currentBalance", currentBalance);
  }
  return parseFloat(currentBalance);
}

// Function to update current balance in local storage
function updateBalance(amount) {
  let currentBalance = initializeBalance();
  currentBalance += amount;
  localStorage.setItem("currentBalance", currentBalance);
}
