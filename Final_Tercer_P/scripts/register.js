let nombre, correo, contraseña, c_contraseña, celular;

let form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    contraseña = document.getElementById('contraseña').value
    c_contraseña = document.getElementById('c_contraseña').value
    celular = document.getElementById('celular').value
    ValidarData(nombre, correo, contraseña, c_contraseña, celular)
}

function ValidarData(nombre, correo, contraseña, c_contraseña, celular){
    if(nombre.length==0 || correo.length==0 || contraseña.length==0 || c_contraseña.length==0 || celular.length==0){
        swal("Debes llenar todos los campos", "Vuelve y revisa que te falto", "error"); 
    } else {
        swal("Te has registrado correctamente", "Ahora inicia sesion", "success");
    }
    GuardarLocalStorage(nombre, correo, contraseña, c_contraseña, celular)
}

function GuardarLocalStorage(nombre, correo, contraseña, c_contraseña, celular) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Correo',correo)
    localStorage.setItem('Contraseña',contraseña)
    localStorage.setItem('C_Contraseña',c_contraseña)
    localStorage.setItem('Celular',celular)
}