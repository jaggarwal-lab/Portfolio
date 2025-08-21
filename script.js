document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleResume");
    const resumeSection = document.getElementById("resumeSection");

    toggleBtn.addEventListener("click", () => {
        resumeSection.classList.toggle("hidden");
        toggleBtn.textContent = resumeSection.classList.contains("hidden") ? "View Resume" : "Hide Resume";
    });

    // Animate skill bars
    const skills = document.querySelectorAll(".skill-bar");
    skills.forEach(skill => {
        const fill = document.createElement("div");
        fill.classList.add("skill-fill");
        skill.appendChild(fill);
        const level = skill.getAttribute("data-level");
        setTimeout(() => {
            fill.style.width = level + "%";
        }, 500);
    });
});
