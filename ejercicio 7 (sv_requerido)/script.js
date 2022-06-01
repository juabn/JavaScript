const divAprobados = document.querySelector('.aprobados');
const divDesaprobados = document.querySelector('.desaprobados');
const ulistA = document.querySelector('.ulistA');
const ulistD = document.querySelector('.ulistD');
const contadorA = document.querySelector('.contadorA');
const contadorD = document.querySelector('.contadorD');
const boton = document.querySelector('.boton_muestra');
const error = document.querySelector('.err');
let aprobados;
let desaprobados;
const getInfo = async ()=>{
    try{
    let request = await fetch('facuAPI.txt');
    let resultado = await request.json();
    aprobados = resultado.aprobados.split(',');
    desaprobados = resultado.desaprobados.split(',');
    }
    catch{
        error.textContent = 'La API no ha sido encontrada';
    }
}

const insertInfo = async ()=>{
    await getInfo();
    for(alumAprobado in aprobados){
        let list = document.createElement('LI');
        list.classList.add('itemAlumno');
        list.textContent = aprobados[alumAprobado];
        ulistA.innerHTML += list.outerHTML;
    }
    for(alumDesaprobado in desaprobados){
        let list = document.createElement('LI');
        list.classList.add('itemAlumno');
        list.textContent = desaprobados[alumDesaprobado];
        ulistD.innerHTML += list.outerHTML;
    }

    contadorA.innerHTML = `Total de aprobados: <b>${aprobados.length}</b>`;
    contadorD.innerHTML = `Total de desaprobados: <b>${desaprobados.length}</b>`;
    boton.style.display = 'none';
}

boton.addEventListener('click',insertInfo);





