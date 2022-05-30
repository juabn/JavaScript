// const objeto = {
//     propiedad1: 'valor1',
//     propiedad2: 'valor2',
//     propiedad3: 'valor3'
// };

// const obtenerInformacion = ()=>{
//     return new Promise((resolve,reyect)=>{
//         setTimeout(()=>{resolve(objeto)},5000);
//     })
// }

// obtenerInformacion().then((obj)=>console.log(obj));

// const mostrarResultado = async()=>console.log(await obtenerInformacion());

// mostrarResultado();

const obtenerInformacion = (texto)=>{
    return new Promise((resolve,reyect)=>{
        setTimeout(()=>{resolve(texto)},Math.random()*2000);
    })
}

// obtenerInformacion('papa').then((obj)=>console.log(obj));
// obtenerInformacion('popo').then((obj)=>console.log(obj));
// obtenerInformacion('pito').then((obj)=>console.log(obj));

const mostrarData = async()=>{
    data1 = await obtenerInformacion('puto');
    data2 = await obtenerInformacion('pete');
    data3 = await obtenerInformacion('pata');
    console.log(data1);
    console.log(data2);
    console.log(data3);

}

mostrarData();