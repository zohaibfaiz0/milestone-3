// Function to toggle the visibility of the Summary section
function toggleSkillsSection() {
    var skillsSection = document.getElementById('toggleSection');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
}

// Function to generate the resume and display it
function generateResume(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var summary = document.getElementById('summary') ? document.getElementById('summary').value : '';

    // Generate resume output with proper HTML structure
    var resumeOutput = `
        <div class="contact-info">
            <div class="name">${name}</div>
            <div class="email"><strong>Email:</strong> ${email}</div>
            <div class="phone"><strong>Phone:</strong> ${phone}</div>
        </div>
        
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        
        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>
        
        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
        
        ${summary ? `<div class="resume-section">
            <h3>Summary</h3>
            <p>${summary}</p>
        </div>` : ''}
    `;

    // Display the generated resume in the resumeOutput container
    var resumeContainer = document.getElementById('resumeOutput');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeOutput;
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var form = document.getElementById('resumeForm');
    
    // Toggle button click event listener
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleSkillsSection);
    }
    
    // Form submit event listener for generating the resume
    if (form) {
        form.addEventListener('submit', generateResume);
    }
});
