var dcompra = document.getElementById('formCompra')

dcompra.addEventListener('submit', function(e){
    e.preventDefault()

    var datoscompra= new FormData(dcompra)

    var mensajecompra = document.getElementById("datos")

    mensajecompra.innerHTML = `
        <b><h4>Compra Exitosa</h4></b>
            <b><p>Compra a nombre de:      ${datoscompra.get('nombre')}  </p></b>
            <b><p>Se enviará a:      ${datoscompra.get('direccion')}  </p></b>
            <br>
            <b><h5>Gracias por su compra!!</h5></b>
    `
})