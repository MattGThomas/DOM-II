// Your code goes here
const navLink = document.querySelector('.nav-link');
navLink.addEventListener('mouseover', function(e){
    navLink.style.color = 'red';
});

const button = document.querySelector('.btn');
button.addEventListener('dblclick', function(e){
    button.classList.toggle('large');
    button.textContent = 'Click here for fun!'
});

const button2 = document.querySelector('#btn2');
button2.addEventListener('click', function(e){
    button2.classList.toggle('large');
    button2.textContent = 'Pack your bags!';
});

const button3 = document.querySelector('#btn3');
button3.addEventListener('mouseover', function(e){
    button3.textContent = 'Island Time'
});

// function logSelection(event){
//     const log = document.querySelector('#log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`;
// }
// const introduct = document.querySelector('.intro');
// introduct.addEventListener('select', logSelection)

