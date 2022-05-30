const alumnoAlan = {
    nombre: 'Alan',
    prueba1: 8,
    prueba2: 5
};
const boton = document.querySelector('.container_boton');
const input = document.querySelector('.container_input');
const header = document.querySelector('.header');
const resultado = document.querySelector('.resultado');

boton.addEventListener('click',()=>{
    let estado = document.createElement('H2'); 
    let nota = parseInt(input.value);
    let notaAlan = parseInt((alumnoAlan['prueba1'] + alumnoAlan['prueba2'] + nota) / 3);
    if(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);

    }
    
    if(notaAlan >= 7 && nota <= 10 && nota >= 0){
        let confirmar = confirm('Estas seguro que quieres esa nota?');
        if (confirmar == true){
            boton.style.display = 'none';
            estado.innerHTML = `${alumnoAlan['nombre']} APROBO EL SECUU porque saco un ${alumnoAlan['prueba1']} en su primera nota, ${alumnoAlan['prueba2']} en su segunda y en su tercera ${nota}. Dando como resultado ${notaAlan}`;
            resultado.appendChild(estado);
            estado.classList.add('nota_resultado');
        }
        else{
            return;
        }
    }
    else if(notaAlan < 7 && nota <= 10 && nota >= 0){
        let confirmar = confirm('Estas seguro que quieres esa nota?');
        if (confirmar == true){
            boton.style.display = 'none';
            estado.innerHTML = `${alumnoAlan['nombre']} cago fuego xDD porque saco un ${alumnoAlan['prueba1']} en su primera nota, ${alumnoAlan['prueba2']} en su segunda y en su tercera ${nota}. Dando como resultado ${notaAlan}`;
            estado.classList.add('nota_resultado');
            resultado.appendChild(estado); 
        }
        else{
            return;
        }
    }
    else if(isNaN(notaAlan) || nota < 0 || nota > 10){
        estado.innerHTML = 'La nota ingresada no es un numero valido';
        estado.classList.add('nota_resultado');
        resultado.appendChild(estado);
    }
    
});



