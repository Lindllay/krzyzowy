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
var blokada;
var wynik = document.getElementById('wynik');

var rezultat = 0;




//       Pierwszy rząd
var r1c1 = document.getElementById('r1c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r1c2 = document.getElementById('r1c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r1c3 = document.getElementById('r1c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r1c4 = document.getElementById('r1c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r1c5 = document.getElementById('r1c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r1c6 = document.getElementById('r1c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r1c7 = document.getElementById('r1c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 0){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});

//       Drugi rząd
var r2c1 = document.getElementById('r1c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r2c2 = document.getElementById('r2c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r2c3 = document.getElementById('r2c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r2c4 = document.getElementById('r2c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r2c5 = document.getElementById('r2c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r2c6 = document.getElementById('r2c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r2c7 = document.getElementById('r2c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 1){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});

//       Trzeci rząd
var r3c1 = document.getElementById('r3c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r3c2 = document.getElementById('r3c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r3c3 = document.getElementById('r3c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r3c4 = document.getElementById('r3c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r3c5 = document.getElementById('r3c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r3c6 = document.getElementById('r3c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r3c7 = document.getElementById('r3c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 2){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});

//       Czwarty rząd
var r4c1 = document.getElementById('r4c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r4c2 = document.getElementById('r4c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r4c3 = document.getElementById('r4c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r4c4 = document.getElementById('r4c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r4c5 = document.getElementById('r4c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r4c6 = document.getElementById('r4c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r4c7 = document.getElementById('r4c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 3){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});

//       Piąty rząd
var r5c1 = document.getElementById('r5c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r5c2 = document.getElementById('r5c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r5c3 = document.getElementById('r5c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r5c4 = document.getElementById('r5c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r5c5 = document.getElementById('r5c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r5c6 = document.getElementById('r5c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r5c7 = document.getElementById('r5c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 4){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});

//       Szósty rząd
var r6c1 = document.getElementById('r6c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r6c2 = document.getElementById('r6c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r6c3 = document.getElementById('r6c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r6c4 = document.getElementById('r6c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r6c5 = document.getElementById('r6c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r6c6 = document.getElementById('r6c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r6c7 = document.getElementById('r6c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 5){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});

//       Siódmy rząd
var r7c1 = document.getElementById('r7c1').addEventListener('click', () => {if(losowaniePoziom == 0 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r7c2 = document.getElementById('r7c2').addEventListener('click', () => {if(losowaniePoziom == 1 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r7c3 = document.getElementById('r7c3').addEventListener('click', () => {if(losowaniePoziom == 2 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r7c4 = document.getElementById('r7c4').addEventListener('click', () => {if(losowaniePoziom == 3 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r7c5 = document.getElementById('r7c5').addEventListener('click', () => {if(losowaniePoziom == 4 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r7c6 = document.getElementById('r7c6').addEventListener('click', () => {if(losowaniePoziom == 5 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});
var r7c7 = document.getElementById('r7c7').addEventListener('click', () => {if(losowaniePoziom == 6 && losowaniePion == 6){if(blokada==true){rezultat = rezultat + 1; wynik.textContent = rezultat; blokada=false;}}});



var start = document.getElementById('start');
var stop = document.getElementById('stop');

var interval;

start.addEventListener('click', ()  => {
interval = setInterval(losowanieLampek, 1200);
start.style.display = 'none';
stop.style.display = 'flex'
});

stop.addEventListener('click', ()  => {
    clearInterval(interval);
    stop.style.display = 'none';
    start.style.display = 'flex';
    wynik.textContent = 0;

    for(let i = 0; i<7;i++){
        tablicaLampekPoziom[i].style.backgroundColor = 'rgb(44, 44, 44)';
    }
    for(let i = 0; i<7;i++){
        tablicaLampekPion[i].style.backgroundColor = 'rgb(44, 44, 44)';
    }
});


var tablicaLampekPoziom = [poziom1, poziom2, poziom3, poziom4, poziom5, poziom6, poziom7];
var tablicaLampekPion = [pion1, pion2, pion3, pion4, pion5, pion6, pion7];
var losowaniePoziom;
var losowaniePion;



function losowanieLampek(){
    blokada = true;
    

    for(let i = 0; i<7;i++){
        tablicaLampekPoziom[i].style.backgroundColor = 'rgb(44, 44, 44)';
        
    }
    for(let j = 0; j<7;j++){
        tablicaLampekPion[j].style.backgroundColor = 'rgb(44, 44, 44)';
        
    }

    losowaniePoziom = Math.floor(Math.random()*tablicaLampekPoziom.length);
    losowaniePion = Math.floor(Math.random()*tablicaLampekPion.length);

    tablicaLampekPoziom[losowaniePoziom].style.backgroundColor = 'yellow';
    tablicaLampekPion[losowaniePion].style.backgroundColor = 'yellow';

}





