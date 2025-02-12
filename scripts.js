document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                section.style.display = "none";
            });

            targetSection.style.display = "block";
        });
    });

    // Show the home section by default
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById("home").style.display = "block";
});