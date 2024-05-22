document.addEventListener("DOMContentLoaded", function() {
    emailjs.init({
  publicKey: 'AlWDOlXXxjQZo3YRr'});

    const form = document.getElementById("contact-form");
    const themeToggle = document.getElementById("theme-toggle");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Send the form data using EmailJS
        emailjs.send("service_zt3gi6e","template_p6z2gqd", {
            message: document.getElementById("message").value
        }).then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again later.");
        });
    });

    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("bright");
        if (document.body.classList.contains("bright")) {
            themeToggle.textContent = "Dark Mode";
        } else {
            themeToggle.textContent = "Bright Mode";
        }
    });
});


