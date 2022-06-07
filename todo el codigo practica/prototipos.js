// class Objeto {
//     constructor(){};
//     hablar(){
//         console.log('hola');
//     }
// };

// let objeto = new Objeto();



// objeto.hablar = ()=>{
//     console.log('modified')
// }

// let arr = [];

// arr.__proto__ = objeto.__proto__;

// arr.hablar();

"use strict";

// let nombre = 'lucas';

// console.log(nombre);

// const obj = {
    
// }
// Object.defineProperty(obj,'nombre',{value: 'rpedro',writeable: false});
// obj.nombre = 'robert'
// console.log(obj.nombre);

// const obj = { nombre: 'juan'};

// Object.preventExtensions(obj);

// obj.apeelido = "dalto";

// console.log(obj.apeelido)

// const str = 'hola hla';

// str.canal = 'holasalsdasd';

// str.canal;

// console.log(str.canal)

// function hablar(texto,texto){
//     console.log(texto);
// }

// hablar('pedro','pedro');

// let vari = 'nombre';

// const obj = {
//     nombre : 'lucas'
// }

// delete obj.nombre;


// console.log(obj.nombre);

// let Object = {
//     nombre : 'lucas'
// }


// console.log(Object);

// FUNCIONAES FLECHA

// const funcion = ()=>{
//     alert('Hola');
// }

// const funcion = ()=> 'papuh';

// const funcion = res=> res;

// const objeto = {
//     nombre : 'juan',
//     saludar : function(){console.log(`hola ${this.nombre}`)}
// }

// objeto.saludar();

// const objeto = {
//     nombre : 'juan',
//     saludar : function(){console.log(`hola ${this.nombre}`)}
// }

// objeto.saludar();

// function constructorPersona(nombre,apellido){
//     this.nombre = nombre;
//     this.apellido = apellido;
// }

// const persona = new constructorPersona('juan','peresz');

// console.log(persona);

// let resultado = funcion('juan');
// console.log(resultado);

// this.nombre = 'Pedro';



// const obj = {
//     nombre: 'juan',
//     saludar: ()=>{console.log(`hola ${this.nombre}`)},
// };

// function otroContext(){
//     nombre = 'roberto';
//     obj.saludar();
// }

// obj.saludar();

// otroContext();

// RECURSIVIDAD

// const validarEdad = (err)=>{
//     let edad;
//     try{
//         if(err) edad = prompt('introduzca bien numerop');
//         else edad = prompt('introduce utu edad');
//         edad = parseInt(edad);
//             if(isNaN(edad)) throw e;
//             if (edad >= 18) console.log('sos mayor de edad');
//             else console.log ('sos menor');
//     }
//     catch(e){ validarEdad(e)}
// }

// validarEdad();

// const saludar = (nombre)=>{
//     return function(){
//         console.log(`hola ${nombre}`);
//     }
// }

// let saludo = saludar('pedro');

// addEventListener('load',saludo);

const cambiarTamanio = tamanio =>{
    return ()=>{
        document.querySelector('.texto').style.fontSize = `${tamanio}px`;
    }
}

let twelvePx = cambiarTamanio('12');
let fourteenPx = cambiarTamanio('14');
let sixteenPx = cambiarTamanio('16');
document.querySelector('.t12').addEventListener('click',twelvePx);
document.querySelector('.t14').addEventListener('click',fourteenPx);
document.querySelector('.t16').addEventListener('click',sixteenPx);