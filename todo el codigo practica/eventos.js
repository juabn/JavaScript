// EVENT HANDLERS

// const button = document.querySelector('.boton');

// button.onclick = ()=>{
//     alert('Holaa');
// }

// EVENT LISTENERS

// const button = document.querySelector('.boton');

// button.addEventListener('click',()=>{
//     alert('hoalaa ');
// });

// button.addEventListener('click',saludar);

// function saludar(){
//     alert('Hola');
//     button.removeEventListener('click',saludar);
// }

// OBJETO EVENT

// const button = document.querySelector('.boton');

// button.addEventListener('click',(event)=>{
//     console.log(event.target);
// });

// EVENT FLOW
const button = document.querySelector('.boton');
const contenedor1 = document.querySelector('.cont1');
const contenedor2 = document.querySelector('.cont2');

contenedor1.addEventListener('click',(event)=>{
    alert('di click en un contenedor azul');
}) 

contenedor2.addEventListener('click',(event)=>{
    alert('di click en un contenedor rojo');
}) 

button.addEventListener('click',(event)=>{
    alert('di click en un boton');
})