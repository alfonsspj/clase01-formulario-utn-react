const estadoElegido = document.getElementById('estado');
const estadoAsignado = document.getElementById('estadoSeleccionado')

estadoElegido.addEventListener('change', (e) => {
    let estadoAsignado = e.target.value;

    estadoSeleccionado.innerHTML = estadoAsignado;
})