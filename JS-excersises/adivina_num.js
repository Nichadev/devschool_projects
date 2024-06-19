// Variable global para almacenar el temporizador
let mensajeTimeout;

function adivinaNum(){
    
    //numero aleatorio entre el 1 y 3
    let numRandom = Math.floor(Math.random() * 3) + 1;
    console.log(numRandom)
    
    //mensaje que muestra en pantalla
    let nombre = prompt("Ingrese su nombre:")
    
    //condicional de si el numero es acertado o no,
    //tambien verifica si se ingresó nombre o no y el numero
    if(nombre){
        let numUsuario = prompt("Hola " + nombre + "!, adivina el numero:");
        if(numUsuario){
            if(numUsuario==numRandom){
                mostrarMensaje("¡Número acertado!")
            } else {
                
                if(numRandom < numUsuario){
                    mostrarMensaje("Usted perdió, el número aleatorio era menor")    
                }else{
                    mostrarMensaje("Usted perdió, el número aleatorio era mayor")
                }
            }
        } else {
            mostrarMensaje("Número no ingresado")
        }
    } else {
        mostrarMensaje("Nombre no ingresado")
    }
}

function mostrarMensaje(mensaje) {
    // Mostrar el mensaje en el elemento <p>
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerText = mensaje;

    // Limpiar el mensaje después de 3 segundos
    // Limpiar el temporizador anterior si existe
    clearTimeout(mensajeTimeout);

    mensajeTimeout = setTimeout(function() {
        resultadoElement.innerText = "";
    }, 3000);
}





