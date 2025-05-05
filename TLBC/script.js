// Menu Toggle Functionality
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Toggle the visibility of the navigation list when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('show'); // Add or remove the 'show' class
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
        navList.classList.remove('show'); // Remove the 'show' class
    }
});

// Smooth Scrolling for Same-Page Navigation Links
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Get the target section ID
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
        }
        // Close the navigation list after clicking a link (for mobile)
        navList.classList.remove('show');
    });
});

// External Links (e.g., about.html, services.html)
const externalLinks = document.querySelectorAll('.nav-links a[href^="http"], .nav-links a[href$=".html"]');
externalLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('show'); // Close the navigation list (for mobile)
    });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        // Get form values
        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();

        // Validate form fields
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for reaching out! We will get back to you soon.');
            contactForm.reset(); // Reset the form after submission
        }
    });
}

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Map Interaction (Optional Example)
const mapContainer = document.querySelector('#map iframe');
if (mapContainer) {
    mapContainer.addEventListener('load', () => {
        console.log('Map loaded successfully.');
    });
}

// FAQ Toggle (Example for Room for Questions Section)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.classList.toggle('show');
    });
});

// FAQ Toggle Functionality
const faqItemsToggle = document.querySelectorAll('.faq-item h4');
faqItemsToggle.forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

// Services Data
const services = [
    {
        title: "Counseling",
        description: "We provide spiritual and emotional counseling to help you grow.",
        icon: "fas fa-hand-holding-heart"
    },
    {
        title: "Community Events",
        description: "Join our events to connect with like-minded individuals.",
        icon: "fas fa-users"
    },
    {
        title: "Youth Empowerment",
        description: "Empowering the next generation to live beyond the ordinary.",
        icon: "fas fa-lightbulb"
    },
    {
        title: "Leadership Training",
        description: "Equipping individuals to lead with love and purpose.",
        icon: "fas fa-chalkboard-teacher"
    },
    {
        title: "Outreach Programs",
        description: "Reaching out to communities with love and support.",
        icon: "fas fa-hands-helping"
    }
];

// Function to Display Services
function displayServices() {
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = ""; // Clear existing content

    services.forEach(service => {
        const serviceElement = document.createElement('div');
        serviceElement.classList.add('service');
        serviceElement.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(serviceElement);
    });
}

// Call the function to display services
displayServices();

// Handle Question Form Submission
const questionForm = document.getElementById('question-form');
const questionsList = document.getElementById('questions-list');

questionForm.addEventListener('submit'), (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the question from the textarea
    const questionInput = document.getElementById('question');
    const questionText = questionInput.value.trim();

    if (questionText) {
        // Add the question to the submitted questions list
        const questionItem = document.createElement('li');
        questionItem.textContent = questionText;
        questionsList.appendChild(questionItem);

        // Clear the textarea
        questionInput.value = '';

        // Show a success message
        alert('Your question has been submitted!');
    } else {
        alert('Please enter a question before submitting.');
    }
}

// Upcoming Programs Data
const programs = [
    {
        title: "Youth Empowerment Seminar",
        description: "A seminar to empower the youth to live beyond limitations. Join us on March 15th, 2025.",
        image: "youth-empowerment.jpg" // Path to the program image
    },
    {
        title: "Leadership Training Workshop",
        description: "A workshop to equip leaders with tools to lead with love and purpose. Scheduled for April 10th, 2025.",
        image: "leadership-training.jpg" // Path to the program image
    },
    {
        title: "Community Outreach",
        description: "Join us as we reach out to the community with love and support on May 5th, 2025.",
        image: "community-outreach.jpg" // Path to the program image
    }
];

// Function to Display Upcoming Programs
function displayPrograms() {
    const programsContainer = document.getElementById('programs-container');
    programs.forEach(program => {
        const programElement = document.createElement('div');
        programElement.classList.add('program');
        programElement.innerHTML = `
            <div class="program-video">
                <img src="${program.image}" alt="${program.title}" class="program-image">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <h3>${program.title}</h3>
            <p>${program.description}</p>
        `;
        programsContainer.appendChild(programElement);
    });
}

// Call the function to display programs
displayPrograms();

// Show or Hide the Returning Menu
const returnMenu = document.getElementById('return-menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        returnMenu.style.display = 'block'; // Show the menu when scrolled down
    } else {
        returnMenu.style.display = 'none'; // Hide the menu when at the top
    }
});

// Smooth Scroll to Top
const returnButton = document.querySelector('.return-button');
returnButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});

// Load Footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => {
        console.error('Error loading footer:', error);
        document.body.insertAdjacentHTML('beforeend', '<footer><p>Footer could not be loaded.</p></footer>');
    });

