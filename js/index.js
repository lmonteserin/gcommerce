"use strict";

// Declaraci—n de variables globales
var myScroll, myScrollMenu, cuerpo, menuprincipal, wrapper, estado, idComercio, idUsuario, userName, nombreUsuario, nombreComercio;
var cestaCompra;
var currentSection, currentSectionID;

// Guardamos en variables elementos para poder rescatarlos despuŽs sin tener que volver a buscarlos
cuerpo = document.getElementById("cuerpo"),
menuprincipal = document.getElementById("menuprincipal"),
wrapper = document.getElementById("wrapper");

var xhReq = new XMLHttpRequest();

var app = {
    // Constructor de la app
    initialize: function() {
    	// Estado inicial mostrando capa cuerpo
    	estado="cuerpo";
    	
    	// Creamos el elemento style, lo a–adimos al html y creamos la clase cssClass para aplicarsela al contenedor wrapper
	    var heightCuerpo=window.innerHeight-46;
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    style.innerHTML = '.cssClass { position:absolute; z-index:2; left:0; top:46px; width:100%; height: '+heightCuerpo+'px; overflow:auto;}';
	    document.getElementsByTagName('head')[0].appendChild(style);
	    
	    // A–adimos las clases necesarias
		cuerpo.className = 'page center';
		menuprincipal.className = 'page center';
		wrapper.className = 'cssClass';
			
		// Leemos por ajax el archivos inicio.html
		xhReq.open("GET", "opciones/inicio.html", false);
		xhReq.send(null);
		document.getElementById("contenidoCuerpo").innerHTML=xhReq.responseText; 
		
		//$("#contenidoCuerpo").load ('opciones/inicio.html');

		// Leemos por ajax el archivos menu.html de la carpeta opciones
		xhReq.open("GET", "opciones/menu.html", false);
		xhReq.send(null);
		document.getElementById("contenidoMenu").innerHTML=xhReq.responseText;
		
		// creamos la cesta de la compra vacía		
		cestaCompra = new Array();
        this.bindEvents();		
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
    	// Ejecutamos la funci—n FastClick, que es la que nos elimina esos 300ms de espera al hacer click
    	new FastClick(document.body);	
		
		//desactivar botón atrás
		document.addEventListener("backbutton", onBackKeyDown, false);
		
		
		

		idComercio = window.localStorage.getItem("idComercio");
		idUsuario = window.localStorage.getItem("idUsuario");		
		userName = window.localStorage.getItem("userName");		
		nombreUsuario = window.localStorage.getItem("nomApellidos");		
		nombreComercio = window.localStorage.getItem("nombreComercio");		
		
		//alert("Gcommerce -" + nombreComercio );
		document.getElementById("milabel").innerHTML= "GCOMMERCE APP - " + nombreComercio ;
		 //$("#milabel").text("Gcommerce - " + nombreComercio );

    },
    
};

function onBackKeyDown(e) {
	  e.preventDefault();
}
		
// Funci—n para a–adir clases css a elementos
function addClass( classname, element ) {
    var cn = element.className;
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}

// Funci—n para eliminar clases css a elementos
function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

function menu(opcion, descripcion){
	// Si pulsamos en el bot—n de "menu" entramos en el if
	if(opcion=="menu"){
		if(estado=="cuerpo"){
			cuerpo.className = 'page transition right';
			estado="menuprincipal";
		}else if(estado=="menuprincipal"){
			cuerpo.className = 'page transition center';
			estado="cuerpo";	
		}
	// Si pulsamos un bot—n del menu principal entramos en el else
	}else{		
		// A–adimos la clase al li (elemento de la lista) presionado
		addClass('li-menu-activo' , document.getElementById("ulMenu").getElementsByTagName("li")[opcion]);
		
		// Recogemos mediante ajax el contenido del html segœn la opci—n clickeada en el menu
		//xhReq.open("GET", "opciones/opcion"+opcion+".html", false);
		//xhReq.send(null);
		//document.getElementById("contenidoCuerpo").innerHTML=xhReq.responseText;
		var $content = $("#contenidoCuerpo");
		//alert ("Contu "+$content.length);
		currentSectionID = Number(opcion);
		//$("#contenidoCuerpo").load ('opciones/opcion5.html',function(){alert("onLoadkkkkk: ");});
		$("#contenidoCuerpo").load ('opciones/opcion'+opcion+'.html', $.proxy(onLoadSection, this));
		//$content.load('sections/section_' + ideSection + '.html', $.proxy(this.onLoadSection, this));
		
		//document.getElementById("milabel").innerHTML="<label> "+descripcion+" </label>";
		
		// A–adimos las clases necesarias para que la capa cuerpo se mueva al centro de nuestra app y muestre el contenido
		cuerpo.className = 'page transition center';
		estado="cuerpo";
		
		// Quitamos la clase a–adida al li que hemos presionado
		setTimeout(function() {
			removeClass('li-menu-activo' , document.getElementById("ulMenu").getElementsByTagName("li")[opcion]);
		}, 300);
		 
	 }
}
function onLoadSection ()
{			
	//alert("sin versos: ");
	
	if(currentSection != null)
	{
		currentSection.dispose();
		currentSection = null;
	}

	switch(currentSectionID)
	{				
		case 1:
			currentSection = new Section1("seccion1",cestaCompra);
		break;

		case 2:
			currentSection = new Section2();
		break;
		
		case 3:							
			currentSection = new Section3();
		break;

		case 4:
			currentSection = new Section4(); 
		break;

	}
	
}
