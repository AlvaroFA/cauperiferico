




function imprimirArchivo(archivo,div) {
	
    fetch(archivo)
        .then(function (response) {
            return response.text();
        })
        .then(function (texto) {
			document.getElementById('textwrapper').setAttribute('style', 'display:block');
            document.getElementById(div).innerText=texto;
        });
}

function mostrarBarra(){
	document.getElementById('menuAuxiliar').setAttribute('style', 'display:block');
	
}

function crearEnlace(div,enlace,archivo){
	var div= document.getElementById(div);
	var enlaceContenedor = document.createElement("li");
	enlaceContenedor.setAttribute("class","link");
	var nombreEnlace=document.createTextNode(enlace);
	var link = document.createElement("a");
	link.setAttribute("class","enlace");
	link.setAttribute("href","#");
	link.setAttribute("onclick","imprimirArchivo('archivo')");
	link.appendChild(nombreEnlace);
	
	enlaceContenedor.appendChild(link);
	div.appendChild(enlaceContenedor);
	
}


var enlacesArray=["PCG","AIRES","SILEX","ENVIOS XUNTA","RTAXI"];


function crearEnlaces(div, enlaces, archivo){
	mostrarBarra();
	var group= document.getElementById(div);
	for( i=0; i< enlacesArray.length;i++){
	var enlace	= enlacesArray[i];
	 crearEnlace(div,enlace,archivo);
	 
	}	
	
	
}