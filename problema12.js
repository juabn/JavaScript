const fullHD = '1920 x 1080';
const flexContainer = document.querySelector('.flex-container');
const buyButton = document.querySelector('.form_button');
let docFragment = document.createDocumentFragment();
const inputInvisible = document.querySelector('.input_invisible');
const marcas = ['Samsung','Panasonic','Sentey','BenQ'];



const crearMonitor = (marca,modelo,precio,resolucionHD)=>{
    marca = `<h2 'class=monitor_marca'>Monitor <b>${marca}</b></h2>`;
    modelo = `<h2 'class=monitor_modelo'>Modelo ${modelo}</h2>`;
    precio = `<p class='monitor_precio'>$${precio}</p><br>`;
    resolucionHD = `<p class='monitor_res'> ${resolucionHD}</p>`;
    return[marca,modelo,resolucionHD,precio];
}

const efectuarCompra = ()=>{
    if(inputInvisible.value > 1){
        let respuesta = confirm('¿Estás seguro que desea comprar este monitor?');
        if(respuesta == true){
            alert('Monitor comprado');
        }
        else{
            alert('Compra cancelada');
        }
    }
    else{
        alert('Por favor seleccione un monitor primero');
    }
    
}
buyButton.addEventListener('click',()=>{efectuarCompra()});

const changeHidden = (modelo)=>{
    inputInvisible.value = modelo;
}


for(i = 0; i < 3; i++){
    let div = document.createElement('DIV');
    div.classList.add('div_monitor');
    div.tabIndex = i;
    let marcaM = marcas[parseInt(Math.floor(Math.random()*4))];
    let modeloM = parseInt(Math.random() * 1000);
    let precioM = parseInt((Math.random() * 500) + 100.99);
    let resHD = parseInt(Math.random() * 2);
    if (resHD == 1){
        resHD = '<h3>Resolución FULL HD</h3>';
    }
    else{
        resHD = '<h3>Resolución 720p</h3>';
    }
    let monitor = crearMonitor(marcaM, modeloM, precioM, resHD);
    monitor = monitor[0] + monitor[1] + monitor[2] + monitor[3];
    div.innerHTML = monitor;
    docFragment.appendChild(div);
    div.addEventListener('click',()=>{changeHidden(modeloM)});
}


flexContainer.appendChild(docFragment);