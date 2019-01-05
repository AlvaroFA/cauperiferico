
	/* leer el fichero y lo carga en el area de texto con el metodo bloquesTexto
		@param ruta relativa del fichero
	*/ 
	function imprimirArchivo(archivo) {
		
		fetch(archivo)
			.then(function (response) {
				return response.text();
			})
			.then(function (texto) {
						
					bloquesTexto(texto);
				 
			});
	}






	/* muestra los enlaces del link seleccionado en menu
		@param nome link #menu
	*/
	function mostrarBarra(selector){
		
	var visible = false;
	ocultar();
	if(!visible){
		visible= true;
		document.getElementById('menuLateral').setAttribute('style', 'display:block');
	document.getElementById(selector).setAttribute('style', 'display:block');
	}
	}



	/*Genera un bloque de texto por cada caracter ## que detecte en el documento
		@param String resultado de imprimirArchivo()
	*/
	function bloquesTexto(texto){
		
		
			eliminarTexto();
			var txr= texto.split("##");
			for (var i=1; i<txr.length;i++){
				var datos= txr[i];
				var articulo= document.createElement('article');
				articulo.setAttribute("id", i);
				var parrafo=document.createElement('p');
				parrafo.setAttribute('class','texto');
				parrafo.innerText=datos;
				document.getElementById('textoWrapper').appendChild(articulo);
				poblarDatos(i,parrafo);
				valor = false;
			}

	}
		
		
		

	/*rellena el area de texto y se los asigna
		@param id: ID del div , p parrafo a asignar
	*/
	function poblarDatos(id, p){
		
			document.getElementById(id).appendChild(p);
		
	}


	/* limpia area de  texto*/
	function eliminarTexto(){
		
		var contenedorTexto = document.getElementById("textoWrapper");
		while(contenedorTexto.hasChildNodes()){
			contenedorTexto.removeChild(contenedorTexto.firstChild);
		}
		
		
	}



	/* Oculta todos los enlaces */
	function ocultar(){
	var menu = document.getElementById("menuLateral");
	var items = menu.getElementsByClassName("menu");
	for (var i = 0; i < items.length; ++i) {
		items[i].setAttribute('style', 'display:none');

	}

	}
