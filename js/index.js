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
console.log(header)
header.addEventListener('mouseenter', e =>{
    header.style.color = 'teal'
})
header.addEventListener('mouseleave', e =>{
    header.style.color = 'black'
})