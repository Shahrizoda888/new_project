const burgerIcon = document.querySelector('#burger');
const navbarmenu = document.querySelector('#nav-links');
burgerIcon.addEventListener('click', () => {
    navbarmenu.classList.toggle('is-active');
})