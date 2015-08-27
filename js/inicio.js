// Declaraci—n de variables globales
var  idComercio, idUsuario, userName, nombreUsuario, nombreComercio;

var app = {
    // Constructor  
    initialize: function() {
		alert("hola");
		 this.bindEvents();		
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	
	onDeviceReady: function() {
    	// Ejecutamos la funci—n FastClick, que es la que nos elimina esos 300ms de espera al hacer click
    	new FastClick(document.body);		
	 
		idComercio = window.localStorage.getItem("idComercio");
		idUsuario = window.localStorage.getItem("idUsuario");		
		userName = window.localStorage.getItem("userName");		
		nombreUsuario = window.localStorage.getItem("nomApellidos");		
		nombreComercio = window.localStorage.getItem("nombreComercio");		
		alert("hola");
		//alert("Gcommerce -" + nombreComercio );
		document.getElementById("milabel1").innerHTML= "Gcommerce - " + nombreComercio + "(" + userName + ")";
		 //$("#milabel").text("Gcommerce - " + nombreComercio );

    },
    
};

