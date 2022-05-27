const nombreAlumno = document.querySelector('.div_form_name');
const mail = document.querySelector('.div_form_mail');
const materiaAdeudada = document.querySelector('.div_form_materia');
const boton = document.querySelector('.div_form_boton');
const alumnosInscritos = ['maria','juan bautista','jose','pedro','rodrigo','josefina','paula','estelvina','juan ignacio', 'josefa','estelvina','carina'];
const materias = ['psicologia','ciencia','matematicas','programacion','fisica'];
const contenedorInfo = document.querySelector('.informacion');
const hdnInput = document.querySelector('.div_form_hdninput');
const msjErrores = ['El nombre no es un alumno registrado','El email no es valido','La materia no es valida','Datos enviados correctamente!'];
let msjError = document.createElement('P');
msjError.classList.add('p_error');

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
                msjError.innerHTML = msjErrores[3];
                if(msjError.innerHTML == msjErrores[3]){
                    msjError.classList.add('p_exito');
                }
                return contenedorInfo.appendChild(msjError);
            }
            else if(materias.includes(materiaA) === false){
                msjError.innerHTML = msjErrores[2];
                return contenedorInfo.appendChild(msjError);
            }
        }
        else if((mailA.includes('@') && mailA.includes('.')) === false){
            msjError.innerHTML = msjErrores[1];
            return contenedorInfo.appendChild(msjError);
        }
    }
    else if(alumnosInscritos.includes(nombreA) === false){
        msjError.innerHTML = msjErrores[0];
        return contenedorInfo.appendChild(msjError);
    }

}

boton.addEventListener('mouseup',checkearDatos);
boton.addEventListener('click', (e)=>{
   e.preventDefault();
});




