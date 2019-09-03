// Your code goes here

document.querySelectorAll('.nav-link').forEach(navItem => {
    navItem.addEventListener('mouseover', (event) => { event.target.style.color = 'gold' })
    navItem.addEventListener('mouseout', (event) => { event.target.style.color = 'silver' })
})

Array.from(document.getElementsByTagName('img')).forEach(element => {
    element.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        alert('NOT ALLOWEDDDD!!!!')
})
})

const descriptions = document.querySelectorAll('.text-content')
const images = document.querySelectorAll('.img-content');
images.forEach(image => {
    image.addEventListener('click', (event) => {
        event.target.style.transition = '0.3s';
        event.target.style.transform = event.target.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)'
    })
})