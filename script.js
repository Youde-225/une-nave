const navbar = document.querySelector('.navbar');
const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});