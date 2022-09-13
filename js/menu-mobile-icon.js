console.log("hola guap@ <3")

const menuButton = document.querySelector('.menu-button');
let menuOpen = false;

menuButton.addEventListener('click', () => 
{
    if(!menuOpen) 
    {
        menuButton.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuOpen = false;
    }
});