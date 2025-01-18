document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_1c2g5ev', 'template_oyn2ybp', this)
        .then(function(response) {
            alert('Message sent successfully!');
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});
emailjs.init('uJg5yVrDMQ62Cl4d0');