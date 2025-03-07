document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded.");
    // Additional JavaScript for interactive animations can be added here.
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your User ID (replace 'YOUR_EMAILJS_USER_ID')
    emailjs.init("YOUR_EMAILJS_USER_ID");
  
    // Get the contact form element (ensure your form has the class 'contact-form')
    const contactForm = document.querySelector('.contact-form form');
  
    // Listen for form submission
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Send form data using EmailJS
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
          alert("Your message was sent successfully!");
          contactForm.reset(); // Optionally reset the form after submission
        }, function(error) {
          alert("There was an error sending your message. Please try again later.");
          console.error("EmailJS Error:", error);
        });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your User ID (replace 'YOUR_EMAILJS_USER_ID')
    emailjs.init("YOUR_EMAILJS_USER_ID");
  
    // Get the contact form element
    const contactForm = document.querySelector('.contact-form form');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Send form data using EmailJS
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(function(response) {
          // Redirect to the Thank You page upon success
          window.location.href = "thankyou.html";
        }, function(error) {
          alert("There was an error sending your message. Please try again later.");
          console.error("EmailJS Error:", error);
        });
    });
  });
      