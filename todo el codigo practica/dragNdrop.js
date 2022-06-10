"use strict";

const titulo = document.querySelector('.titulo');
const divTexturas = document.querySelector('.texturas');
const cuadrado = document.querySelector('.cuadrado');
const madera = document.querySelector('.madera');
const piedra = document.querySelector('.piedra');
const ladrillo = document.querySelector('.ladrillo');



// const circulo = document.querySelector('.circulo');

// circulo.addEventListener('dragstart',(e)=>{
//     e.dataTransfer.setData("papa",e.target.className);
// });
// circulo.addEventListener('drag',()=>console.log('2'));
// circulo.addEventListener('dragend',()=>console.log('3'));

// cuadrado.addEventListener('dragenter',()=>console.log('enter'));
// cuadrado.addEventListener('dragover',(e)=>{
//     e.preventDefault();
//     console.log('over'); 
// });
// cuadrado.addEventListener('drop',(e)=>{
//     console.log(e.dataTransfer.getData('papa'));
    
// });
// cuadrado.addEventListener('dragleave',()=>console.log('leave'));

const reemplazarTextura = (textura)=>{
    if(textura == 'madera'){
        titulo.style.backgroundImage = 'url(resources/fondo-textura-madera_53876-14865.jpg)';
        cuadrado.style.background = 'url(resources/fondo-textura-madera_53876-14865.jpg)';
        madera.style.boxShadow = '0 0 5px lavender';
    }
    else if(textura == 'piedra'){
        titulo.style.backgroundImage = 'url(resources/textura-de-piedra-5940378.jpg)';
        cuadrado.style.background = 'url(resources/textura-de-piedra-5940378.jpg)';
        piedra.style.boxShadow = '0 0 5px lavender';
    }
    else if(textura == 'ladrillo'){
        titulo.style.backgroundImage = 'url(resources/depositphotos_4175487-stock-photo-weathered-stained-old-brick-wall.jpg)';
        cuadrado.style.background = 'url(resources/depositphotos_4175487-stock-photo-weathered-stained-old-brick-wall.jpg)';
        ladrillo.style.boxShadow = '0 0 5px lavender';
    }
    else{
        return 'no es textura';
    }
}

madera.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('textura',e.target.id);
});
piedra.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('textura',e.target.id);
});
ladrillo.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('textura',e.target.id);
});


cuadrado.addEventListener('dragover',(e)=>{
    e.preventDefault();
})
cuadrado.addEventListener('drop',(e)=>{
    let textura = e.dataTransfer.getData('textura');
    reemplazarTextura(textura);
});

