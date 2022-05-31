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
},{
    materia: 'Programacion 3',
    nota: '9',
},{
    materia: 'Sociales 1',
    nota: '10',
},{
    materia: 'Literatura 4',
    nota: '9',
},{
    materia: 'Literatura 5',
    nota: '6',
},
];
const header = document.querySelector('.header');
const container = document.querySelector('.materias');
let divs = document.createDocumentFragment();
divs.innerHTML = '';


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
        else setTimeout(()=>{res(nota)},Math.random()*400);
    })
};

// const insertarDiv = (materiaDiv,notaDiv)=>{
//     return new Promise((res,rej)=>{
//         materiaHTML = materiaDiv;
//         notaHTML = notaDiv;
//         res(divs.innerHTML += divsHTML);
//     })
// }



const implementarData = async ()=>{

    let materiaHTML;
    let notaHTML;

    for(i = 0; i < dataAlumno.length;i++){
        materiaHTML = await obtenerMateria(i).catch((e)=>console.log(e));
        notaHTML = await obtenerNota(i).catch((e)=>console.log(e));
        divs.innerHTML += `<div class="materia">
        <h2 class="materia_nombre materia_item">${materiaHTML}</h2>
        <h2 class="materia_nota materia_item">${notaHTML}</h2>
        </div>`;
    }
    container.innerHTML += divs.innerHTML;
}


implementarData();





