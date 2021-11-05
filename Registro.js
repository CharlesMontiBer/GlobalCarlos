var fRegistro = document.getElementById('formRegistro')

fRegistro.addEventListener('submit', function(e){
    e.preventDefault()

    var datosregistro= new FormData(fRegistro)

    var mensajeregistro = document.getElementById("mensajereg")

    mensajeregistro.innerHTML = `
        <h4>Registro exitoso</h4>
        
            <b><p>Nombre:      ${datosregistro.get('nombre')}  </p></b> 
            <p>Edad:        ${datosregistro.get('edad')}    </p>
            <p>Correo:      ${datosregistro.get('correo')}  </p>
            <p>Contraseña:  ${datosregistro.get('contrareg')} </p>
    `
})

