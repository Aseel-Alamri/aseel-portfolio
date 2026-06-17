let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


const projectDetails = {
    siraj: {
        title: "Siraj - Solar Digital Twin Platform",
        description: "Siraj is my graduation project, a digital twin platform for solar energy systems. It simulates solar panel performance using historical weather data and provides insights about energy production trends.",
        role: "I worked on the simulation engine, data analysis workflow, preprocessing weather data, and integrating external data sources to support accurate solar energy calculations.",
        tech: "Python, PVLib, Data Analysis, NASA Power API"
    },
    petrolube: {
        title: "AI-Powered Sales Dashboard - PetroLube",
        description: "This project was developed during my internship at PetroLube. The dashboard analyzes revenue trends, profit margins, and business performance metrics to support management decision-making.",
        role: "I contributed to dashboard development, data analysis, KPI tracking, and adding AI-generated insights for automated business summaries.",
        tech: "Power BI, Streamlit, Python, Generative AI"
    }
};

const modal = document.getElementById("projectModal");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".details-btn").forEach(button => {
    button.addEventListener("click", () => {
        const project = projectDetails[button.dataset.project];

        document.getElementById("modalTitle").textContent = project.title;
        document.getElementById("modalDescription").textContent = project.description;
        document.getElementById("modalRole").textContent = project.role;
        document.getElementById("modalTech").textContent = project.tech;

        modal.classList.add("active");
    });
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

const typed = new Typed(".multiple-text", {
    strings: [
        "Software Developer",
        "Data Analyst",
        
        "Full-Stack Developer"
    ],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1200,
    loop: true
});