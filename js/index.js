// Your code goes here

/*----Navigation Link Mouseover----*/
const navLink = document.querySelector('.nav-link');
navLink.addEventListener('mouseover', function(e){
    navLink.style.color = 'red';
});

/*----Button 1 Size Changer----*/
const button = document.querySelector('.btn');
button.addEventListener('dblclick', function(e){
    button.classList.toggle('large');
    button.textContent = 'Click here for fun!'
});

/*----Button 2 text and size changer----*/
const button2 = document.querySelector('#btn2');
button2.addEventListener('click', function(e){
    button2.classList.toggle('large');
    button2.textContent = 'Pack your bags!';
});

/*----Button 3 Text Changer----*/
const button3 = document.querySelector('#btn3');
button3.addEventListener('mouseover', function(e){
    button3.textContent = 'Island Time'
});

/*----Change Intro Paragraph Color----*/
const intro = document.querySelector('#introduction-text');
intro.addEventListener('click', function(e){
    intro.style.color = 'blue'
});
intro.addEventListener('dblclick', function(e){
    intro.style.color = 'red'
});

/*----Window Sizer----*/
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.onresize = reportWindowSize;