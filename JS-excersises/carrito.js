function comprar(){
    /**
     esta es la forma que lo hice yo sola pero 
     no me salieron las correcciones de errores, no se si
     usted puede corregir o agregar algo de aqui
     me gustaría saber.

     lo que quise hacer fue que haya un control de palabras ingresadas
     o no, en el caso que no haya, se muestra un mensaje.

    while(frutaUsuario!=null){
        frutas.push(frutaUsuario);
        if(frutaUsuario==null){
            mostrarMensaje("No agregó ningun dato")
            break
        } else {
            let resultado = confirm("¿Desea agregar otra fruta?");
            if(resultado){
                frutaUsuario = prompt("¿Qué fruta desea comprar?");
            } else{
                mostrarMensaje("No agregó ningun dato")
                break
            }
        }
    }
     */
    
    
    let frutas = [];
    
    //le pide al usuario la fruta que desea
    let frutaUsuario = prompt("Estas en una verdulería, ¿Qué fruta desea comprar?");
    //guarda la fruta ingresada al array
    frutas.push(frutaUsuario);
    
    //y aqui vuelve a preguntar si quiere otra fruta
    while(confirm("¿Desea agregar otra fruta?")){
        const frutaUsuario = prompt("¿Qué otra fruta desea comprar?");
        frutas.push(frutaUsuario);
    }
    
    //lista de las frutas agregadas
    let lista='';
     frutas.forEach(function(fr) {
         lista+=fr + ', ';
     });
 
     mostrarMensaje("lista de frutas que compró: " + lista)

    /**
     * necesito saber como puedo elimiar el ultimo digito
     * al querer imprimir en pantalla la lista de frutas.
     * porque lo q se imprime es "fruta1, fruta2, " y lo q quiero
     * es eliminar ese ultimo espacio y coma.
     * 
     * o si hay otra forma de mostrar una lista que estén colocados uno al lado del otro
    */
}

//funcion para mostrar el mensaje en el elemento <p>
function mostrarMensaje(mensaje) {
    let resultadoElement = document.getElementById("lista");
    resultadoElement.innerText = mensaje;

    // Limpiar el mensaje después de 3 segundos
    // Limpiar el temporizador anterior si existe
    clearTimeout(mensajeTimeout);

    mensajeTimeout = setTimeout(function() {
        resultadoElement.innerText = "";
    }, 3000);
}
