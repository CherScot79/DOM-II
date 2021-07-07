// Your code goes here

window.addEventListener('resize', () => {
    console.log(window.innerWidth + window.innerHeight)
})

Array.from(document.links).forEach(function (link) {
    link.addEventListener('mouseover', function (event){
        event.target.style.backgroundColor = 'blue';
        console.log('you clicked a link');
    });
});

Array.from(document.links).forEach(function (link) {
    link.addEventListener('mouseout', function (event){
        event.target.style.backgroundColor = 'pink';
        console.log('after clicking link, you clicked outside on the body');
    });
});

const pContent = document.querySelector('.content-section .text-content p')
document.addEventListener('wheel', function(event) {
    pContent.textContent = 'Changed this content with scroll wheel';
    pContent.style.color = 'green';
});

let footer = document.querySelector('footer');
footer.addEventListener('dblclick', function(event) {
    event.target.style.background = '#62A2B8'
});

document.querySelector('nav').addEventListener('click', function(event) {
    event.preventDefault()
});

const header = document.querySelector('.logo-heading')
header.addEventListener('mouseenter', e =>{
    header.style.color = 'teal'
})
header.addEventListener('mouseleave', e =>{
    header.style.color = 'black'
})

let img = document.querySelector('img')
img.addEventListener('mouseenter', e => {
    img.src = "https://media0.giphy.com/media/3BMsdRXVELShWzUcXj/giphy.gif"
})

img.addEventListener('drag', e => {
    img.src = "https://frogblogmanchester.files.wordpress.com/2014/04/agalychnis-annae.jpg"
})

img.addEventListener('mouseleave', e => {
    img.src = "https://github.com/CherScot79/DOM-II/blob/Cheree-Scott/img/fun-bus.jpg"
})

const preventA = document.querySelectorAll("a");

preventA.forEach(function(a) {
  a.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
  });
});