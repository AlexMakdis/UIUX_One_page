let basil = document.getElementById('basil');
let brushes = document.getElementById('brushes');
let dorian_flower = document.getElementById('dorian_flower');
let begin = document.getElementById('begin');
let henry = document.getElementById('henry');
let death = document.getElementById('death');

document.onmousemove=function(e){
    let xPos = e.clientX;
    let yPos = e.clientY;
    
    let xFactor = (window.innerWidth/2 - xPos) / (window.innerWidth/10);
    let yFactor = (window.innerHeight/2 - yPos) / (window.innerHeight/5);

    basil.style.left =0+ -xFactor*2 + 'px';
    basil.style.bottom =0+ -yFactor*2 + 'px';
    brushes.style.left =244+ -xFactor*2 + 'px';
    brushes.style.bottom =0+ -yFactor*2 + 'px';
    dorian_flower.style.left =284+ xFactor*2 + 'px';
    dorian_flower.style.bottom =0+ -yFactor*2 + 'px';
    begin.style.right =511+ xFactor*2 + 'px';
    begin.style.bottom =0+ -yFactor*2 + 'px';
    henry.style.right =124+ xFactor*2 + 'px';
    henry.style.bottom =0+ -yFactor*2 + 'px';
    death.style.bottom =0+ -yFactor*2 + 'px';
    
};