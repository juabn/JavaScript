const nombreAlumno = document.querySelector('.div_form_name');
const mail = document.querySelector('.div_form_mail');
const materiaAdeudada = document.querySelector('.div_form_materia');
const boton = document.querySelector('.div_form_boton');
const alumnosInscritos = ['maria','juan bautista','jose','pedro','rodrigo','josefina','paula','estelvina','juan ignacio'];
const materias = ['psicologia','ciencia','matematicas','programacion','fisica'];
const contenedorInfo = document.querySelector('.informacion');
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
        nombre.innerHTML = `Nombre del alumno:<b> ${this.nombre}</b>`;
        mail.innerHTML = `Email del alumno:<b> ${this.mail}</b>`;
        materia.innerHTML = `materia`
    }
}

let baseDatos = [];



function checkearDatos(){
    let nombreA = nombreAlumno.value.trim();
    nombreA = nombreA.toLowerCase();
    let mailA = mail.value.trim();
    mailA = mailA.toLowerCase();
    let materiaA = materiaAdeudada.value.trim();
    materiaA = materiaA.toLowerCase();
    
    if(alumnosInscritos.includes(nombreA)){

        if(mailA.includes('@') && mailA.includes('.')){

            if(materiaA.includes(materiaAdeudada)){
                alumno(nombreA,mailA,materiaA);
            }

            {
                return alert('La materia no existe');
            }
        }
        {
            return alert('El mail es invalido');
        }
    }
    {
        return alert('El nombre no esta ne la lista de inscritos');
    }

}

boton.addEventListener('mouseup',checkearDatos);




