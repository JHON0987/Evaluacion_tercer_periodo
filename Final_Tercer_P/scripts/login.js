let correoi, contraseñai;

let form = document.getElementById('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    ValidarData
    LeerDatos()
})

function LeerDatos(){
    correoi = document.getElementById('correoi').value
    contraseñai = document.getElementById('contraseñai').value
    ValidarData(correoi, contraseñai)
}

function ValidarData(correoi, contraseñai){
    if(correoi.length==0 || contraseñai.length==0){
        swal("Debes llenar todos los campos", "Vuelve y revisa que te falto", "error"); 
    } 
    ListaData(correoi, contraseñai)
}

function ListaData(correoi,contraseñai) {
  let corr= localStorage.getItem('Correo')
  let cont= localStorage.getItem('Contraseña')

  if (corr == correoi && cont == contraseñai) {
    swal("Has ingresado correctamente", "", "success");
  } else {
    swal("La contraseña o el correo son incorrectos", "Vuleve a intentarlo", "error");
    
  }
}