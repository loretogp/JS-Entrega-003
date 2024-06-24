

var pintar = document.querySelector('#cuadrado');
pintar.addEventListener('click', function(){ //aquí se crea una función anónima por requerimiento del ejercicio
    if(pintar.style.backgroundColor!=='green'){
        pintar.style.backgroundColor='green';
    }else{pintar.style.backgroundColor='yellow'}
});