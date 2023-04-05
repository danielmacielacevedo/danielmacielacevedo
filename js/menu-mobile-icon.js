const menuButton = document.querySelector('.menu-button');
const menuContent = document.querySelector('.menu-mobile-background');
let menuOpen = false;

menuButton.addEventListener('click', () => 
{
    if(!menuOpen) 
    {
        menuButton.classList.add('open');
        menuContent.classList.add('open');
        menuOpen = true;
    } else {
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
    }
});

const link1 = document.querySelector('.link1');

link1.addEventListener('click', () => 
{
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
});

const link2 = document.querySelector('.link2');

link2.addEventListener('click', () => 
{
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
});

const link3 = document.querySelector('.link3');

link3.addEventListener('click', () => {
        menuButton.classList.remove('open');
        menuContent.classList.remove('open');
        menuOpen = false;
})