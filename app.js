const icon = document.querySelector('.menu');
const menu = document.querySelector('.menus');

icon.addEventListener('click', () =>
{
    menu.classList.toggle('active');
})