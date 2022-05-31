// function prueba(cb){
//     cb('pedro');
// }

// function decirNombre(nombre){
//     console.log(nombre);
// }

// prueba(decirNombre);

class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const datosPersonas = [
    ['Lucas','@SoyDalto'],
    ['Juan','@juambaperez'],
    ['night','@adom'],
    ['camila']
];

const personas = [];

for(i = 0; i < datosPersonas.length; i++){
    personas[i] = new Persona(datosPersonas[i][0],datosPersonas[i][1]);
}

// CON CALL BACKS (UNA MIERDA)

// const obtenerPersona = (id,cb)=>{
//     if (personas[id] == undefined){
//         cb('No diste un id correcto');
//     } else{
//         cb(null,personas[id],id);
//     }

// }
// const obtenerInstagram = (id,cb)=>{
//     if(personas[id].instagram == undefined){
//         cb('Esta persona no tiene instagram');
//     }
//     else{
//         cb(null,personas[id].instagram);
//     }
// }

// obtenerPersona(3,(err,persona,id)=>{
//     if(err) {
//         console.log(err);
//     } else{
//         console.log(persona.nombre);
//         obtenerInstagram(id,(err,persona)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(persona);
//             }
//         });
//     }
// });

// CON PROMESAS

let idPers = 3;

const obtInstagram = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id].instagram == undefined) reject('Esta persona no tiene ig');
        else resolve(personas[id].instagram);
    })
}

const obtPersona = (id)=>{
    return new Promise((resolve,reject)=>{
        if(personas[id] == undefined) reject('No diste un id correcto');
        else resolve(personas[id]);
    })
}

obtPersona(idPers).then((persona)=>{
    console.log(persona.nombre);
    obtInstagram(idPers).then((persona)=>{
        console.log(persona);
    }).catch((e)=>console.log(e));
}).catch((e)=>console.log(e));



// let nombre = 'pedro';

// const promesa = new Promise((resolve,reject)=>{
//     if(nombre !== 'pedro') reject('lo siento el nombre no es pedro');
//     else resolve(nombre);
// });

// promesa.then((resultado)=>{
//     console.log(resultado);
// }).catch((e)=> console.log(e));

