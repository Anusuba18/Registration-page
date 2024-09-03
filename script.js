document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');

    // Simulate sending email
    if (email) {
        // Here you could add a real API call to send the email
        responseMessage.textContent = 'Verification email sent! (Simulated)';

        // Clear the email input
        document.getElementById('email').value = '';
    } else {
        responseMessage.textContent = 'Please enter a valid email address.';
    }
});
