const h3Retratos = document.getElementById('retratos_titulo');
const h3Paisagens = document.getElementById('paisagens_titulo');
const h3Diversos = document.getElementById('diversos_titulo')

function indicaTitulos (h3, titulo) {
    h3.innerHTML = titulo ;
    h3.classList.add('fadein')
}