
function validar(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    if(nombre.length < 1) {
        alert("tu nombre es una ...")
    }
    if (apellido.length < 1){
        alert("tu apellido es una ...")
    }

}


