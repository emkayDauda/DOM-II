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
        event.target.style.transform = event.target.style.transform === 'scale(1.2)' ? 'none' : 'scale(1.2)'
    })
})

document.querySelectorAll('.content-section').forEach(content => {
    content.addEventListener('dblclick', (event) => {
        console.log('dblClick')
        event.currentTarget.style.flexDirection = event.currentTarget.style.flexDirection === 'row-reverse' ? 'row' : 'row-reverse'
    })
})

const destinationImage = document.querySelector('.content-destination img')

destinationImage.addEventListener('mousedown', (event) => {
    event.target.style.transition = '.3s'
    event.target.style.transform = 'scale(0.8)'
})

destinationImage.addEventListener('mouseup', (event) => {
    event.target.style.transform = 'none'
})

const headerImage = document.querySelector('header img')


headerImage.addEventListener('drag', (event) => {
    event.target.style.transition = '.3s'
    event.target.style.transform = 'scale(0.8)'
})


headerImage.addEventListener('dragend', (event) => {
    event.target.style.transform = 'none'
})


let counter = 0;
document.addEventListener('keydown', (event) => {
    counter++;
    if(counter >= 20) {
        alert('Wanna release that key, maybe?')
        counter = 0;
    }
})