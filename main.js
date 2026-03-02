document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.glass-card');
    const container = document.querySelector('.container');

    // Subtle parallax effect on mouse move
    container.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // Reset on mouse leave
    container.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateY(0deg) rotateX(0deg)';
        card.style.transition = 'all 0.5s ease';
    });

    // Remove transition on enter for smooth tracking
    container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
    });

    // Button click animation
    const btn = document.getElementById('explore-btn');
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
            alert('Chào mừng bạn! Hệ thống đã sẵn sàng.');
        }, 150);
    });
});
