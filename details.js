// Get today's date
const today = new Date();

// Format the date as YYYY-MM-DD
const formattedDate = today.toISOString().split('T')[0];

// Set the placeholder attribute of the date input to the formatted date
document.getElementById('tdate').setAttribute('placeholder', formattedDate);

// Add event listener to form submit
document.getElementById("second-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const queryString = new URLSearchParams(formData).toString();
  
  // Redirect to details.html with form data as URL parameters
  window.location.href = "details.html?" + queryString;
});
