const input_color = document.getElementById('inputColor');
const boton = document.getElementById('boton');
const text_hexa = document.getElementById('textoHexa');
const card_color = document.querySelector('#cardColor');

boton.addEventListener('click', () => {
    text_hexa.textContent = input_color.value;
    card_color.style.backgroundColor = input_color.value;
})