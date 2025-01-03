// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika egg menu diklik
document.querySelector('#EGG-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}; 


// Klik diluar sidebar untuk menghilangkan nav
const EGG = document.querySelector('#EGG-menu');
document.addEventListener('click', function(e) {
    if(!EGG.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});