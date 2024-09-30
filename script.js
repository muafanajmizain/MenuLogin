function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  
  errorMessage.innerHTML = ''; // Reset error message

  if (username === "" || password === "") {
      errorMessage.innerHTML = 'Please fill in all fields';
      return false;
  }

  // Simulate a login process (replace with real backend validation)
  if (username === 'admin' && password === '12345') {
      alert('Login successful!');
      return true;
  } else {
      errorMessage.innerHTML = 'Invalid username or password';
      return false;
  }
}
