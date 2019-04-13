// Your code goes here
// const topImg = document.querySelector('.intro img');
// topImg.addEventListener('mouseover', function(event){
//     const imageSource = event.target.src;
//     document.body.style.background = `url(${imageSource})`
// });

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