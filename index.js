var poziom1 = document.getElementById('poziom1');
var poziom2 = document.getElementById('poziom2');
var poziom3 = document.getElementById('poziom3');
var poziom4 = document.getElementById('poziom4');
var poziom5 = document.getElementById('poziom5');
var poziom6 = document.getElementById('poziom6');
var poziom7 = document.getElementById('poziom7');
var pion1 = document.getElementById('pion1');
var pion2 = document.getElementById('pion2');
var pion3 = document.getElementById('pion3');
var pion4 = document.getElementById('pion4');
var pion5 = document.getElementById('pion5');
var pion6 = document.getElementById('pion6');
var pion7 = document.getElementById('pion7');
var start = document.getElementById('start');
var stop = document.getElementById('stop');

start.addEventListener('click', interwalOn);
stop.addEventListener('click', interwalOff);

var tablicaLampekPoziom = [poziom1, poziom2, poziom3, poziom4, poziom5, poziom6, poziom7];
var tablicaLampekPion = [pion1, pion2, pion3, pion4, pion5, pion6, pion7];

var interval;

function interwalOn(){
    interval = setInterval(losowanieLampek, 2000);
    start.style.display = 'none';
    stop.style.display = 'flex';
    
}
function interwalOff(){
    clearInterval(interval);
    stop.style.display = 'none';
    start.style.display = 'flex';

    for(let i = 0; i<7;i++){
        tablicaLampekPoziom[i].style.backgroundColor = 'rgb(44, 44, 44)';
    }
    for(let i = 0; i<7;i++){
        tablicaLampekPion[i].style.backgroundColor = 'rgb(44, 44, 44)';
    }

}

function losowanieLampek(){
    
    for(let i = 0; i<7;i++){
        tablicaLampekPoziom[i].style.backgroundColor = 'rgb(44, 44, 44)';
    }
    for(let i = 0; i<7;i++){
        tablicaLampekPion[i].style.backgroundColor = 'rgb(44, 44, 44)';
    }

    let losowaniePoziom = Math.floor(Math.random()*tablicaLampekPoziom.length);
    let losowaniePion = Math.floor(Math.random()*tablicaLampekPion.length);

    tablicaLampekPoziom[losowaniePoziom].style.backgroundColor = "yellow";
    tablicaLampekPion[losowaniePion].style.backgroundColor = "yellow";
}
