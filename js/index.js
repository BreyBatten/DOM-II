// Your code goes here
const topImg = document.querySelector('.intro img');
topImg.addEventListener('dblclick', function(event){
    document.body.style.background = 'tan';
});

const navItems = document.querySelector('.nav');

navItems.addEventListener('mouseover', function(event){
    event.target.style.color = 'lightblue';
});

navItems.addEventListener('mouseout', function(event){
    event.target.style.color = 'black';
});

const welcome = document.querySelector('.intro h2');
welcome.addEventListener('click', function(event){
    event.target.style.color = 'gold';
});

window.addEventListener('load', function(event){
    console.log('The Page is fully loaded!');
});

const item = document.querySelector('.logo-heading');
item.animate([
    {transform: 'scale(1)', opacity: 1},
    {transform: 'scale(.5) rotate(360deg)', opacity: .5},
    {transform: 'scale(1) rotate(0deg)', opacity: 1},
], {
    duration: 2500,
    easing: 'ease-in-out',
    delay: 10,
    iterations: 1,
    direction: 'alternate',
    fill: 'forwards'
});

const input = document.querySelector('body');
input.addEventListener('keydown', function(event){
    console.log(event);
});

const wholeContainer = document.querySelector('.container', '.home');

wholeContainer.addEventListener('click', function(event){
    console.log('Clicked on the header');
});

const list = document.querySelector('.nav-link');

list.addEventListener('click', function(event){
    event.stopPropagation()
    console.log('Clicked the "Home" nav item');
});