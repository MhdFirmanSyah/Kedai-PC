const navbar = document.querySelector('.navbar-nav')


document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active');
};


document.getElementsByTagName('body').onclick = () => {
    navbar.classList.remove('active')

}
