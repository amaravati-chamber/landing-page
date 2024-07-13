document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    
    var form = e.target;
    var data = new FormData(form);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Show a success message or handle the response
            alert('Your response has been submitted successfully!');
            form.reset(); // Clear the form fields
        } else {
            // Handle the error
            alert('There was an error submitting your response. Please try again.');
        }
    };
    
    xhr.send(data);
});
