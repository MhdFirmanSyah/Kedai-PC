// Navbar mobile
const navbar = document.querySelector('.navbar-nav')


document.querySelector('#menu-humberger').onclick = () => {
    navbar.classList.toggle('active');
};

const hamburger = document.querySelector('#menu-humberger');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});


// Searching
const searchform = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');


document.querySelector('#search').onclick = (e) => {
    searchform.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

const search = document.querySelector('#search');

document.addEventListener('click', function(e){
    if(!search.contains(e.target) && !searchform.contains(e.target)) {
        searchform.classList.remove('active');
    }
});



// Shopping cart
const cart = document.querySelector('.shopping-cart')


document.querySelector('#shopping-cart').onclick = () => {
    cart.classList.toggle('active');
};

const cartBox = document.querySelector('#shopping-cart');

document.addEventListener('click', function(e){
    if(!cartBox.contains(e.target) && !cart.contains(e.target)) {
        cart.classList.remove('active');
    }
});