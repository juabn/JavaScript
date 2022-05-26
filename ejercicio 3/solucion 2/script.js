const nombreAlumno = document.querySelector('.div_form_name');
const mail = document.querySelector('.div_form_mail');
const materiaAdeudada = document.querySelector('.div_form_materia');
const boton = document.querySelector('.div_form_boton');
const alumnosInscritos = ['maria','juan bautista','jose','pedro','rodrigo','josefina','paula','estelvina','juan ignacio', 'josefa','estelvina','carina'];
const materias = ['psicologia','ciencia','matematicas','programacion','fisica'];
const contenedorInfo = document.querySelector('.informacion');
const hdnInput = document.querySelector('.div_form_hdninput');


class alumno{
    constructor(nombre,mail,materia){
        this.nombre = nombre;
        this.mail = mail;
        this.materia = materia;
    }

    mostrarDatos(){
        let nombre;
        let mail
        let materia
        nombre.innerHTML = `Nombre del alumno:<b> ${this.nombre}</b><br>`;
        mail.innerHTML = `Email del alumno:<b> ${this.mail}</b><br>`;
        materia.innerHTML = `Materia a aprobar:<b> ${this.materia}</b><br>`;
        contenedorInfo.appendChild(nombre + mail + materia)
    }
}

const datosHdnInput = (a)=>{
    hdnInput.value = a;
}




function checkearDatos(){
    let nombreA = nombreAlumno.value.trim();
    nombreA = nombreA.toLowerCase();
    let mailA = mail.value.trim();
    mailA = mailA.toLowerCase();
    let materiaA = materiaAdeudada.value.trim();
    materiaA = materiaA.toLowerCase();
    
    if(alumnosInscritos.includes(nombreA)){

        if(mailA.includes('@') && mailA.includes('.')){

            if(materias.includes(materiaA)){

                alumnoN = new alumno(nombreA,mailA,materiaA);
                datosHdnInput(alumnoN);
                alert('Datos enviados exitosamente!');
            }

            else if(materias.includes(materiaA) === false){
                return alert('La materia no existe');
            }
        }
        else if((mailA.includes('@') && mailA.includes('.')) === false){
            return alert('El mail es invalido');
        }
    }
    else if(alumnosInscritos.includes(nombreA) === false){
        return alert('El nombre no esta en la lista de inscritos');
    }

}

boton.addEventListener('mouseup',checkearDatos);




