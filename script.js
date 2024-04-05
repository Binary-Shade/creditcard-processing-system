document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Simulate validation (replace with your actual logic)
  if (document.getElementById('username').value === 'priya' &&
      document.getElementById('password').value === 'priya@123') {

    // Redirect to next page using window.location
    window.location.href = 'dashboard.html'; // Replace with your next page path
  } else {
    // Handle invalid credentials (show error message)
  }
});
																																						