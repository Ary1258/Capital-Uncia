console.log("Bienvenido a Capital Uncia");

const boton =document.getElementById("btnReservar");
boton.addEventListener("click", function(){
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let origen = document.getElementById("origen").value;
    let destino = document.getElementById("destino").value;

    if (nombre==""){
    alert("debe ingresar su nombre");
    return;
}
    console.log(nombre);
    console.log(telefono);
    console.log(origen);
    console.log(destino);

    alert("¡Gracias por reservar, "+nombre +"!");
});
