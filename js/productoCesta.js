"use strict";

var ProductoCesta = function() 
{	
	this.idProducto = 0;
	this.cantidadEnCesta = 0;
	this.cantidadOriginal = 0;
	this.precioUnidad = 0;
	this.precioTotal = 0;
	this.init();
}


ProductoCesta.prototype.init = function()
{	
	alert('Nuevo ProductoEnCesta');	
	//this.loadInfo();	
};


ProductoCesta.prototype.mostrar = function()
{	
	alert('SOY EL PRODUCTO '+ this.idProducto + " - Q(X):" + this.cantidadEnCesta +
	" - Q(X_ORIG):" + this.cantidadOriginal + " - €:" + this.precioUnidad + " - €(FIN):" + this.precioTotal);	
	//this.loadInfo();	
};

