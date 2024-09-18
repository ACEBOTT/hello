// Toggle mobile navigation
document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('nav-active');
});

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form validation (simple example)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if(name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
        // You can add more actions like sending this data to a backend
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields.');
    }
});