document.addEventListener("DOMContentLoaded", function() {
 const debitForm = document.getElementById("debit-form");
 const popupModal = document.getElementById("popup-modal");
 const popupMessage = document.getElementById("popup-message");

 // Initialize current balance
 let initialBalance = initializeBalance();

 // Form submission event listener
 debitForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  const amount = parseFloat(document.getElementById("amount").value);

  // Validate amount
  if (isNaN(amount) || amount <= 0) {
   alert("Please enter a valid positive amount.");
   return;
  }

  // Update balance
  updateBalance(-amount); // Subtract amount for debit

  // Display updated balance in popup modal
  popupMessage.textContent = `Debited ${amount} rupees. Remaining balance: ${initializeBalance()} rupees.`;
  popupModal.style.display = "block";
 });

 // Close the popup modal when the user clicks on the close button
   document.getElementsByClassName("close")[0].addEventListener("click", function() {
    popupModal.style.display = "none";
window.location.href="details.html";
   });

 // Close the popup modal when the user clicks outside of it
 window.addEventListener("click", function(event) {
  if (event.target === popupModal) {
   popupModal.style.display = "none";
  }
 });
});