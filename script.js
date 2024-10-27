// Simple 3D rotation on hover effect for the main sections
document.querySelectorAll('.about, .features').forEach(section => {
    section.addEventListener('mouseenter', () => {
        section.style.transform = 'rotateY(10deg)';
    });

    section.addEventListener('mouseleave', () => {
        section.style.transform = 'rotateY(-5deg)';
    });
});
