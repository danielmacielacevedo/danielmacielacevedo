const nameDaniel = document.querySelector(' header > nav > div > a > span');
let prevY = window.scrollY;

window.addEventListener('scroll', function(){

    // if(prevY > window.scrollY){
    //     console.log('volviendo al top');
    //     nameDaniel.classList.remove('off');
    // } else {
    //     console.log('bajando');
    //     nameDaniel.classList.add('off');
    // }

    if(window.scrollY > 168){
        nameDaniel.classList.add('on');
    } else { 
        nameDaniel.classList.remove('on');
    }
    prevY = window.screenY
});