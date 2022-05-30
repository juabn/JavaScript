const dataAlumno = [{
    materia: 'Fisica 1',
    nota: '7'
},
{
    materia:  'Fisica 2',
    nota: '6'
},
{
    materia: 'Quimica 1',
    nota: '5'
},
{
    materia: 'Quimica 2',
    nota: '6'
},
{
    materia: 'Programacion 1',
    nota: '8'
},{
    materia: 'Programacion 2',
    nota: '5',
},];
const container = document.querySelector('.materias');
let divs = document.createDocumentFragment();

const obtenerMateria = (id)=>{
    return new Promise((res,rej)=>{
        materia = dataAlumno[id].materia;
        if (materia == undefined) rej('No existe la materia');
        else setTimeout(()=>{res(materia)},Math.random()*700);
    })
}

const obtenerNota = (id)=>{
    return new Promise((res,rej)=>{
        nota = dataAlumno[id].nota;
        if(dataAlumno[id].nota == undefined) rej('No se ha puesto nota aun');
        else setTimeout(()=>{res(nota)},Math.random()*1830);
    })
};





const implementarData = async ()=>{
    for(i = 0; i < dataAlumno.length;i++){
        await obtenerMateria(i).then((materia)=>{
            await obtenerNota(i).then((nota=>{
                console.log(materia + " " + nota);
            })).catch((e)=>{console.log(e)});
            
        }).catch((e)=>{console.log(e)});
    }
    
}

implementarData();





