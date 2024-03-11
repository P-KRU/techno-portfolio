// Data
const data = {
    name: "Krupa Paramasivam",
    profession: "Web Developer",
    bio: "I'm a passionate web developer with experience in HTML, CSS, JavaScript, and various web development frameworks. Currently, I'm focused on building responsive and user-friendly web applications.",
    projects: [
        { name: "Project 1", description: "Description of Project 1", link: "#" },
        { name: "Project 2", description: "Description of Project 2", link: "#" }
       
        // Add more projects here as needed
    ]
};

// Update content
document.getElementById('name').textContent = data.name;
document.getElementById('profession').textContent = data.profession;
document.getElementById('bio').textContent = data.bio;

const projectsContainer = document.getElementById('projects');
data.projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const projectName = document.createElement('h3');
    projectName.textContent = project.name;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    
    const projectLink = document.createElement('a');
    projectLink.textContent = "View Project";
    projectLink.href = project.link;

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(projectDescription);
    projectDiv.appendChild(projectLink);

    projectsContainer.appendChild(projectDiv);
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const message = document.getElementById('message-input').value;

    // You can add your own logic here to handle form submission, such as sending an email or saving to a database

    // Reset form
    document.getElementById('name-input').value = '';
    document.getElementById('email-input').value = '';
    document.getElementById('message-input').value = '';

    alert('Form submitted successfully!');
});
