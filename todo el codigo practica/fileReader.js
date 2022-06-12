"use strict";

let archivos = document.getElementById('archivo');

// console.log(reader);

archivos.addEventListener('change',(e)=>{
    leerArchivo(archivos.files)
})
const container = document.querySelector('.imagenes');
const fragment = document.createDocumentFragment();


const leerArchivo = ar =>{
    for(let i = 0; i < ar.length; i++){
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener('load',(e)=>{
            let newImg = document.createElement('IMG');
            newImg.setAttribute('src',`${e.currentTarget.result}`);
            fragment.appendChild(newImg);
            container.appendChild(fragment);
        })
    }
}