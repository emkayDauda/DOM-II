// Your code goes here

document.querySelectorAll('.nav-link').forEach(navItem => {
    navItem.addEventListener('mouseover', (event) => { event.target.style.color = 'gold' })
    navItem.addEventListener('mouseout', (event) => { event.target.style.color = 'silver' })
})