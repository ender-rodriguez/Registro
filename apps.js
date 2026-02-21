function validar() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    if (nombre === "" || apellido === "" || direccion === "" || correo === "" || telefono === "") {
        alert("No ha llenado los datos necesarios");
    } else {
        alert("Registro exitoso");
    }
}