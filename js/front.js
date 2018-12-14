
function imprimirArchivo(archivo) {
    fetch(archivo)
        .then(function (response) {
            return response.text();
        })
        .then(function (texto) {
            document.getElementById('areaTexto').innerText=texto;
        });
}
