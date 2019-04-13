// Your code goes here
// const topImg = document.querySelector('.intro img');
// topImg.addEventListener('mouseover', function(event){
//     const imageSource = event.target.src;
//     document.body.style.background = `url(${imageSource})`
// });

const funBus = document.querySelector('.nav');
funBus.addEventListener('mouseover', function(event){
    event.target.style.color = 'lightblue';
});

const welcome = document.querySelector('.intro h2');
welcome.addEventListener('dblclick', function(event){
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
    duration: 2000,
    easing: 'ease-in-out',
    delay: 10,
    iterations: 1,
    direction: 'alternate',
    fill: 'forwards'
});