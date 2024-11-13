// Function to toggle the visibility of the Skills section
// function toggleSkillsSection(): void {
//     const skillsSection = document.getElementById('toggleSection');
//     if (skillsSection) {
//         skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
//     }
// }

// Function to generate the resume and display it
function generateResume(event: Event): void {
    event.preventDefault(); // Prevent the default form submission
    
    // Retrieve form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement)?.value || '';

    // Generate resume output
    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        ${skills ? `<h3>Skills</h3><p>${skills}</p>` : ''}
    `;

    // Display resume output
    const resumeContainer = document.getElementById('resumeOutput');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeOutput;
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const form = document.getElementById('resumeForm');
    
    // if (toggleButton) {
    //     toggleButton.addEventListener('click', toggleSkillsSection);
    //}
    
    if (form) {
        form.addEventListener('submit', generateResume);
    }
});
