function datos(){
    
    const persona = {
        nombre: 'Andrea',
        apellido: 'Benitez',
        edad: 22,
        mascotas: ['coco', 'shino'],
        mensajeUs: null,
        mensajeUsuario(mensaje) {
            this.mensajeUs = mensaje;
        },
    };
    
    const { nombre, edad, apellido, mascotas } = persona;
    const [ coco, shino ] = mascotas;
    
    const respuesta = `hola, mi nombre es ${nombre} y mi apellido es ${apellido} y mi edad es ${edad} y mis mascotas son ${coco} y ${shino}`;
    mostrarMensaje(respuesta);
    
    persona.mensajeUsuario("mensaje usuario");
    console.log(persona.mensajeUs)
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
