const navbar = document.querySelector('.navbar-nav')


document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
};

const hamburger = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});