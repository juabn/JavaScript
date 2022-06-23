"use strict";

const inputFile = document.getElementById('imgreader');
const container = document.querySelector('.imagenes');
const dropimg = document.querySelector('.dropimg');
const body = document.getElementById('body');
const texto = document.querySelector('.labeltxt')
const barraDeCarga = document.querySelector('.imgcarga');
const progreso = window.getComputedStyle(barraDeCarga, "::after");


const insertarImg = (ar)=>{
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < ar.length; i++){
        texto.style.opacity = '0%';
        barraDeCarga.style.display = 'block';
        console.log(ar[i].type);
        const reader = new FileReader();
        reader.readAsArrayBuffer(ar[i]);
        reader.addEventListener('progress',(e)=>{
            let carga = (e.loaded / ar[i].size) * 100;
            barraDeCarga.style.setProperty('--translado',carga+'%')
            console.log(carga);
        })
        reader.addEventListener('load',(e)=>{
            if(ar[i].type.includes('video') === true){
                let video = new Blob([new Uint8Array(e.currentTarget.result)],{type: ar[i].type});
                let url = URL.createObjectURL(video);
                let newVideo = document.createElement('VIDEO');
                newVideo.classList = 'imagenes_item';
                newVideo.setAttribute('src',url);
                newVideo.setAttribute('controls','controls');
                newVideo.autoplay = false;
                fragment.appendChild(newVideo);
                container.appendChild(fragment);
                barraDeCarga.style.display = 'none';
                texto.style.opacity = '.2';
                
            }
            else if(ar[i].type.includes('image')){
                let url = URL.createObjectURL(ar[i]);
                let newImg = document.createElement('IMG');
                newImg.setAttribute('src',url);
                newImg.classList = 'imagenes_item';
                fragment.appendChild(newImg);
                container.appendChild(fragment);
                barraDeCarga.style.display = 'none';
                texto.style.opacity = '.2';
            }
        })
        
    }
}

dropimg.addEventListener('dragover',(e)=>{
    e.preventDefault();
   
});
dropimg.addEventListener('drop',(e)=>{
    e.preventDefault();
    
    insertarImg(e.dataTransfer.files);

})

