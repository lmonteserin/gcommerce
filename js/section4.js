"use strict";

var Section4 = function(sectionName) 
{
	this.parent.constructor.call(this, sectionName);

	this.init();
}

Section4.prototype = new Section();
Section4.prototype.constructor = Section4;
Section4.prototype.parent = Section.prototype;


Section4.prototype.init = function()
{	
	this.parent.init.call(this);
	//alert('init Section hija 4');
	
	//this.loadInfo();
	this.showPreloader();

	window.localStorage.removeItem("idUsuario");
	window.localStorage.removeItem("userName");
	window.localStorage.removeItem("nomApellidos");
	window.localStorage.removeItem("nombreComercio");

	this.hidePreloader();
	location.href="index.html";
	//this.renderPage();  	
};


Section4.prototype.loadInfo = function ()
{
     	alert("devicde ready");
		
		alert("aaa"+$('#dialog-modal').length);
		
		 $( "#dialog-modal" ).dialog({
			  resizable: false,
			  height:300,
			  modal: false,
			  buttons: {
				"Sí": function() {
				  $( this ).dialog( "close" );
				},
				"No": function() {
				  $( this ).dialog( "close" );
				}
			  }
			});			
			 
		/* if (confirm("Â¿EstÃ¡ usted seguro que desea eliminar el Producto seleccionado?")) {
					
					var redirectUrl = "listadoProductos?delete=" + idProducto;
					window.location = redirectUrl;				
		} */
}


Section4.prototype.renderPage = function()
{	
	this.parent.renderPage.call(this);
	//alert('renderPage Section hija 0');
	
	//var $btn = $('#btn');
	//$btn.on("click", {pepe:$btn, aux:6}, $.proxy(this.clickBtn, this));	
};


Section4.prototype.dispose = function()
{ 	
    this.parent.dispose.call(this); 
	//alert('dispose Section hija 0');

    
};
