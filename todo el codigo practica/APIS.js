"use strict";

// APIS

// const fecha = new Date();
// console.log(fecha.getDate());
// console.log(fecha.getDay());
// console.log(fecha.getMonth());
// console.log(fecha.getYear()); (menos 1900);
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(Date.now());

const transformarCeros = (tiempo)=>{
    if(tiempo < 10) return"0".concat(tiempo);
    return tiempo;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();
    segundos = transformarCeros(segundos);
    minutos = transformarCeros(minutos);
    hora = transformarCeros(hora);
    document.querySelector('.hor').textContent = hora;
    document.querySelector('.min').textContent = minutos;
    document.querySelector('.seg').textContent = segundos;
}

actualizarHora();

setInterval(actualizarHora,1000);
 