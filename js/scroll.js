const nameDaniel = document.querySelector(' header > nav > div > span');
let prevY = window.scrollY;

window.addEventListener('scroll', function(){

    if(window.scrollY > 70){
        nameDaniel.classList.add('on');
    } else { 
        nameDaniel.classList.remove('on');
    }
    prevY = window.screenY
});