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

// EVENT FLOW Y STOPPROPAGATION
// const button = document.querySelector('.boton');
// const contenedor1 = document.querySelector('.cont1');
// const contenedor2 = document.querySelector('.cont2');

// contenedor2.addEventListener('click',(event)=>{
//     alert('di click en un contenedor rojo');
// });

// contenedor1.addEventListener('click',(event)=>{
//     alert('di click en un contenedor azul');
// }); 


// button.addEventListener('click',(event)=>{
//     alert('di click en un boton');
//     event.stopPropagation();
// });

// EVENTOS DEL MOUSE

const button = document.querySelector('.boton');
const contenedor1 = document.querySelector('.cont1');
const contenedor2 = document.querySelector('.cont2');
const inputTexto = document.querySelector('.prueba');


// button.addEventListener('dblclick',(event)=>{
//     alert('di click en un boton');
//     event.stopPropagation();
// });

// contenedor1.addEventListener('mouseover',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });
// contenedor1.addEventListener('mouseout',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });

// contenedor1.addEventListener('contextmenu',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });

// button.addEventListener('mouseenter',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });

// button.addEventListener('mouseleave',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });

// button.addEventListener('mousedown',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });


// button.addEventListener('mouseup',(event)=>{
//     alert('hoeveree sobre el contenedor azul');
//     event.stopPropagation();
// });

// EVENTOS DE TECLAS

// inputTexto.addEventListener('keydown',(e)=>{
//     console.log(e.key);
// });

// inputTexto.addEventListener('keypress',(e)=>{
//     console.log('la tecla ha sido presionada');
// });

// inputTexto.addEventListener('keyup',(e)=>{
//     console.log('la tecla ha sido soltada');
// });

// EVENTOS DE INTERFAZ

const img = document.querySelector('.imagen');
const link = document.querySelector('.link');

// img.addEventListener('error',()=>{
//     console.error('ERROR');
// }
// );

// addEventListener('load',()=>{
//     console.info('cargo papu');
// });

// addEventListener('beforeunload',()=>{
//     console.info('no cargo papu');
// });

// addEventListener('unload',()=>{
//     console.info('no cargo papu');
// });

// addEventListener('resize',()=>{
//     console.info('cambia la resolucion');
// });

// addEventListener('scroll',()=>{
//     console.info('scrollear pagina');
// });

// inputTexto.addEventListener('select',(e)=>{
//     console.log(inputTexto.value.substring(e.target.selectionStart,e.target.selectionEnd));
// });

let paragraph = document.createElement('P');
let fragmento = document.createDocumentFragment();
fragmento.appendChild((paragraph));

window.addEventListener('keypress',(e)=>{
    paragraph.textContent += e.key;
});

contenedor1.appendChild(fragmento);