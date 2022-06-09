"use strict";

const circulo = document.querySelector('.circulo');
const cuadrado = document.querySelector('.cuadrado');

circulo.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData("papa",e.target.className);
});
// circulo.addEventListener('drag',()=>console.log('2'));
// circulo.addEventListener('dragend',()=>console.log('3'));

cuadrado.addEventListener('dragenter',()=>console.log('enter'));
cuadrado.addEventListener('dragover',(e)=>{
    e.preventDefault();
    console.log('over'); 
});
cuadrado.addEventListener('drop',(e)=>{
    console.log(e.dataTransfer.getData('papa'));
    
});
cuadrado.addEventListener('dragleave',()=>console.log('leave'));

