document.addEventListener('DOMContentLoaded', () => {
    // Console log for verification
    console.log("Resume for Ram Hirthick S loaded successfully.");

    // Simple highlight effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.borderLeft = "2px solid #1e3a8a";
            section.style.paddingLeft = "10px";
            section.style.transition = "0.3s all ease";
        });
        section.addEventListener('mouseleave', () => {
            section.style.borderLeft = "none";
            section.style.paddingLeft = "0";
        });
    });
});