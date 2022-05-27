const container = document.querySelector('.container');
const boton = document.querySelector('.boton');
const alumnos = [{
    nombre: 'Juan Bautista Perez',
    mail: 'willydeux22@gmail.com',
    materia: 'fisica 1'
},{
    nombre: 'Josefina Perez',
    mail: 'josefinap92@gmail.com',
    materia: 'fisica 2'
},{
    nombre: 'Maria Nieves',
    mail: 'snowywhite31@gmail.com',
    materia: 'computacion 1'
},{
    nombre: 'Estefania Gonzales',
    mail: 'stfnieG@gmail.com',
    materia: 'fisica 1'
},{
    nombre: 'Morondanga Gutierrez',
    mail: 'morondanguita@gmail.com',
    materia: 'computacion 2'
},{
    nombre: 'Jose Diaz',
    mail: 'jdiaz@gmail.com',
    materia: 'fisica 1'
},];
const containerInfo = document.querySelector('.informacion');

let dataSemana1 = document.createElement('H2');
dataSemana1.classList.add('dataS1');
dataSemana1.innerHTML = 'Integrantes de mesa semana 1';
dataSemana1 = dataSemana1.outerHTML;
let alumnosS1 = '';

let dataSemana2 = document.createElement('H2');
dataSemana2.classList.add('dataS2');
dataSemana2.innerHTML = 'Integrantes de mesa semana 2';
dataSemana2 = dataSemana2.outerHTML;
let alumnosS2 = '';

let semana1 = [];
let semana2 = [];

for(alumno in alumnos){
    let datosA = alumnos[alumno];
    let nombre = datosA['nombre'];
    let mail = datosA['mail'];
    let materia = datosA['materia'];

    let htmlCode = `<div class="datos">
                        <p class="datos_item nombre${alumno}">${nombre}</p>
                        <p class="datos_item email">${mail}</p>
                        <p class="datos_item materia">${materia}</p>
                        <select name="" class="datos_select datos_item${alumno}">
                            <option value="semana1">Semana 1</option>
                            <option value="semana2">Semana 2</option>
                        </select>
                    </div> `
    container.innerHTML += htmlCode;
    
};

boton.addEventListener('click',(e)=>{
    
    for(alumno in alumnos){
        let datosA = alumnos[alumno];
        let selector = document.querySelector(`.datos_item${alumno}`);
        let semana = selector.value;
        if(semana == 'semana1'){
            semana1.push((" " + datosA['nombre']));
        }
        else if(semana == 'semana2'){
            semana2.push((" " + datosA['nombre']));
            
        }
    }
    alumnosS1 = semana1.toString();
    alumnosS2 += semana2.toString();

    containerInfo.innerHTML = dataSemana1 + alumnosS1 + ' ';
    containerInfo.innerHTML += dataSemana2 + alumnosS2;

})

