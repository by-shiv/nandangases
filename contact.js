document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.textContent = '';
    });

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const description = document.getElementById('description').value.trim();

    // Perform form validation
    let isValid = true;

    if (name === '') {
        document.getElementById('name-error').textContent = 'Please enter your name.';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('email-error').textContent = 'Please enter your email address.';
        isValid = false;
    }

    if (description === '') {
        document.getElementById('description-error').textContent = 'Please enter a description.';
        isValid = false;
    }

    if (isValid) {

        // Display success message
        document.getElementById('success-message').textContent = 'Your query has been received , We will contact you soon.';

        // Reset form
        document.getElementById('contact-form').reset();
    }
});