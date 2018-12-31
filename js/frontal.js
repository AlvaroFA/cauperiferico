

function imprimirArchivo(archivo) {
	
    fetch(archivo)
        .then(function (response) {
            return response.text();
        })
        .then(function (texto) {
			//document.getElementById('texto').setAttribute('style', 'display:block');
			
             bloquesTexto(texto);
        });
}


function mostrarBarra(selector){
	esVisible();
	document.getElementById('menuLateral').setAttribute('style', 'display:block');
document.getElementById(selector).setAttribute('style', 'display:block');
esVisible();
}

/*
function mostrarBarraABM(){
	document.getElementById('menuLateral').setAttribute('style', 'display:block');
document.getElementById('ABM').setAttribute('style', 'display:block');

}


function mostrarBarraBENESTAR(){
	document.getElementById('menuLateral').setAttribute('style', 'display:block');
document.getElementById('BENESTAR').setAttribute('style', 'display:block');
}



//

*/
function bloquesTexto(texto){
	var txr= texto.split("##");
	
	for (var i=0; i<txr.length;i++){
//var textWrapper = document.createElement("div");
//var parrafo=document.createElement('p');	
//var doc = txr[i];
//var texto= document.createTextNode(doc);
	
		
		//parrafo.appendChild(texto);
		//textWrapper.appendChild(parrafo);
		//console.log(textWrapper);
		console.log(txr[i]);
	}
	
}

function esVisible(){
var ul = document.getElementsByClassName("menu");
console.log(ul);
var items = ul.getElementsByTagName("li");
for (var i = 0; i < items.length; ++i) {
	items[i].setAttribute("display","none");

}
}