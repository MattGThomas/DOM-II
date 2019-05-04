// Your code goes here
const navLink = document.querySelector('.nav-link');
navLink.addEventListener('mouseover', function(e){
    navLink.style.color = 'red';
});

const button = document.querySelector('.btn');
button.addEventListener('dblclick', function(e){
    button.classList.toggle('large');
});