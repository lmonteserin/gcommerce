"use strict";

var Section2 = function(sectionName, cesta) 
{	
	this.parent.constructor.call(this, sectionName);
	this.cestaProductos = cesta;	
	this.totalCesta = 0.00;
	this.init();
}

Section2.prototype = new Section();
Section2.prototype.constructor = Section2;
Section2.prototype.parent = Section.prototype;




Section2.prototype.init = function()
{	
	this.parent.init.call(this);
	//alert('Section hija 2' +paypalApp.length);
	
	//INICIALIZAO PAYPAL DESCOMENTARRRA PARA SUBIRRRRRRRRRR
	paypalApp.initialize();		
	
	this.loadInfo();

	this.renderPage();  	
};


Section2.prototype.loadInfo = function ()
{
	var ref = this;
	if (ref.cestaProductos.length > 0) {	
		var el = document.getElementById('cestaVacia'); 
		el.style.display = 'none';	
		
		var miCompra;	
		//la llamada a mostrar preloader
		this.showPreloader();		
		new FastClick($("body"));	
		for (var i=0; i < ref.cestaProductos.length; i++) {
			miCompra = ref.cestaProductos[i];
			ref.loadProductCesta(miCompra);		
		} 

		var divTotal = document.createElement('div');
		divTotal.className = 'divMiImporte';   		
		divTotal.innerHTML = "Total  " + Number(ref.totalCesta).toFixed(2) +' \u20AC';
		
		document.getElementById('importeTotal').appendChild(divTotal);  		
		
		
		var $btn = $('#buyNowBtn');
		//alert("boton"+$btn.length);	
		$btn.on("click", {}, $.proxy(this.clickBtn, this));	
		
		//la llamada a mostrar preloader
		this.hidePreloader();
	}	
	else{
		var el = document.getElementById('divfuera'); //se define la variable "el" igual a nuestro div
		el.style.display = 'none'; //damos un atributo display:none que oculta el div
		var el = document.getElementById('cestaVacia'); //se define la variable "el" igual a nuestro div
		el.style.display = 'block';
	}
}

Section2.prototype.loadProductCesta = function(miCompra)
{	
		var newtr = document.createElement('tr');
		var $idProducto = miCompra.idProducto;

		var tdArticulo = document.createElement('td');
		tdArticulo.innerHTML = miCompra.nombreProducto;		
	
	//Number(data.precio).toFixed(2)
		var tdPrecioUn = document.createElement('td');
		tdPrecioUn.innerHTML = miCompra.precioUnidad +' \u20AC';

		var tdCantidad = document.createElement('td');
		tdCantidad.innerHTML = miCompra.cantidadEnCesta;
	
		var tdTotal = document.createElement("td");
		tdTotal.innerHTML = Number(miCompra.precioTotal).toFixed(2) +' \u20AC';
		this.totalCesta = this.totalCesta + miCompra.precioTotal ;

		var tdBut = document.createElement("td");
		var but = document.createElement("button");
		but.setAttribute("id", "tdBut_"+$idProducto); 
		but.className = 'botonBorrar';  		
		tdBut.appendChild(but);
		
		newtr.appendChild(tdArticulo); 				
		newtr.appendChild(tdPrecioUn);  
		newtr.appendChild(tdCantidad);     
		newtr.appendChild(tdTotal);  
		newtr.appendChild(tdBut);

		document.getElementById('mytable').appendChild(newtr);  
		$('#tdBut_'+$idProducto).on("click", {idProd:$idProducto}, $.proxy(this.clickBtnBorrar, this));		
}

Section2.prototype.clickBtnBorrar = function (ev)
{	
	var ref = this;
	ref.cestaProductos.splice(ref.getPosicion(ev.data.idProd, ref.cestaProductos),1);
	
	//document.getElementById("limpiar").innerHTML="";
	
	$("#contenidoCuerpo").load ('opciones/opcion2.html', $.proxy(onLoadSection, this));
}

Section2.prototype.getPosicion = function(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].idProducto === nameKey) {
            return i;
        }
    }
	return false;
}

Section2.prototype.onServerResponse = function (data)
{   
	//aqui la llamada a ocultar preloader
	this.hidePreloader();
		
    //this.renderPage();
}


Section2.prototype.onDataError = function  (jqXHR, textStatus, errorThrown) 
{
    //aqui la llamada a ocultar preloader
   this.hidePreloader();
   alert("Error llamada Servidor"+thrownError + "-" + textStatus);
}

Section2.prototype.clickBtn = function(ev)
{
	/* alert("click boton: " + paypalApp);
	alert("total" + this.totalCesta); */
	alert("tt" +Number(this.totalCesta));
		
	paypalApp.pay(Number(this.totalCesta));		
	alert("pago realizado corre");
	ev.preventDefault();
	alert("pago realizado corre2");
}


Section2.prototype.renderPage = function()
{	
	this.parent.renderPage.call(this);	
};


Section2.prototype.dispose = function()
{ 	
    this.parent.dispose.call(this); 
//alert('dispose Section hija 0');

    
};
