"use strict";

const inputFile = document.getElementById('imgreader');
const container = document.querySelector('.imagenes');
inputFile.addEventListener('change',()=>{
    insertarImg(inputFile.files);

});

const insertarImg = (ar)=>{
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < ar.length; i++){
        // console.log(ar[i]);
        const reader = new FileReader();
        reader.readAsDataURL(ar[i]);
        reader.addEventListener('load',(e)=>{
            let newImg = document.createElement('IMG');
            newImg.setAttribute('src',e.currentTarget.result);
            newImg.classList = 'imagenes_item';
            fragment.appendChild(newImg);
            container.appendChild(fragment);
        })
    }
}