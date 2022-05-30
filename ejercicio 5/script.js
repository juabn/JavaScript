const alumnoAlan = {
    nombre: 'Alan',
    prueba1: 8,
    prueba2: 5
};
const boton = document.querySelector('.container_boton');
const input = document.querySelector('.container_input');
const header = document.querySelector('.header');

boton.addEventListener('click',()=>{
    let estado = document.createElement('H2'); 
    let nota = parseFloat(input.value);
    let notaAlan = (alumnoAlan['prueba1'] + alumnoAlan['prueba2'] + nota) / 3;
    
    if(notaAlan >= 7 && nota <= 10 && nota >= 0){
        estado.innerHTML = ''; 
        boton.style.display = 'none';
        estado.innerHTML = `${alumnoAlan['nombre']} APROBO EL SECUU porque saco un ${alumnoAlan['prueba1']} en su primera nota, ${alumnoAlan['prueba2']} en su segunda y en su tercera ${nota}. Dando como resultado ${notaAlan}`;
        header.appendChild(estado);
        estado.classList.add('nota_resultado');
    }
    else if(notaAlan < 7 && nota <= 10 && nota >= 0){
        estado.innerHTML = ''; 
        boton.style.display = 'none';
        estado.innerHTML = `${alumnoAlan['nombre']} cago fuego xDD porque saco un ${alumnoAlan['prueba1']} en su primera nota, ${alumnoAlan['prueba2']} en su segunda y en su tercera ${nota}. Dando como resultado ${notaAlan}`;
        estado.classList.add('nota_resultado');
        header.appendChild(estado); 
    }
    else if(isNaN(notaAlan) || nota < 0 || nota > 10){
        estado.innerHTML = ''; 
        estado.innerHTML = 'La nota ingresada no es un numero valido';
        estado.classList.add('nota_resultado');
        header.appendChild(estado);
    }
    

});



