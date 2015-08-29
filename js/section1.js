"use strict";

var Section1 = function(sectionName, cesta) 
{
	this.parent.constructor.call(this, sectionName);
	this.cestaProductos = cesta;		
	this.init();
}

Section1.prototype = new Section();
Section1.prototype.constructor = Section1;
Section1.prototype.parent = Section.prototype;


Section1.prototype.init = function()
{	
	var $btn;
	
	this.parent.init.call(this);
	console.log('init Section hija 1');

			
	/* $btn = $('#btnCambiarTexto');
	$btn.on("click", {}, $.proxy(this.clickBtnCambiarTexto, this)); */
	
	this.loadInfo();

	this.renderPage();  
};

Section1.prototype.loadInfo = function ()
{
    var urlService = 'http://1-dot-webgcommerceue.appspot.com/getImagenes';   
	var ref = this;

	//aqui la llamada a mostrar preloader
	this.showPreloader();
	//alert ("dopcument-bodi"+$("body").length);
	new FastClick($("body"));
 	$.ajax({
		type : 'GET', 
		url : urlService, 
		cache: false,  		
		data:{ 
			//idUsuario: window.localStorage.getItem("idUsuario"),
			//idComercio: window.localStorage.getItem("idComercio"),
			idProducto: 0,
			idComercio: 6,
			}, 		
		dataType: "json",								
		success: function(data){
			ref.onServerResponseIds(data); 
		},
		error: function(xhr, ajaxOptions, thrownError) {
			alert("Error llamada Servidor"+thrownError + "-" + ajaxOptions);
		}			
	});	 			
}


Section1.prototype.onServerResponseIds = function (data)
{   
//alert("correcto y llamo al siguiente");
	var ref = this;
	var cuenta = 0;
	$.each(data, function(k, v){
		ref.loadImage(v.idProducto)
	});			
	
	this.hidePreloader();
    this.renderPage();
}

Section1.prototype.loadImage = function (idProd)
{  
	//alert("idpror"+ idProd);
	var ref = this;
	$.ajax({
		type : 'GET', 
		url : 'http://1-dot-webgcommerceue.appspot.com/getImagenes', // Servlet URL 
		data:{ 
			//idUsuario: window.localStorage.getItem("idUsuario"),
			//idComercio: window.localStorage.getItem("idComercio"),
			idProducto: idProd,
			tipo:"json",
			idComercio: 6,
		}, 		
		cache:false,
		dataType: "json",								
		success: function(data){			
			ref.loadProduct(data);			 		
 		},
		error: function(xhr, ajaxOptions, thrownError) {
			alert("Error llamada Servidor"+thrownError);
		}			
	});			
}

Section1.prototype.loadProduct = function(data)
{	
		var $btn;
		var $btnSec;
		var $idProducto;
		var $nomProducto;
		var $cantidadOrig;
		var $precioUd;
		
		$idProducto = data.idProducto;
		$cantidadOrig = data.cantidad;
		$precioUd = Number(data.precio).toFixed(2);
		$nomProducto = data.nombre + ", " + data.descripcion + " - " + data.packaging;

		var newNode = document.createElement('div');
		newNode.className = 'caja';                     
		
		var divDesc = document.createElement('div');
		divDesc.className = 'divMiDesc';   
		var h = document.createElement("h2");
		h.className = 'miDescripcion';
		h.innerHTML = $nomProducto;			
		divDesc.appendChild(h);
		//alert(data.descripcion);
		
		var linea = document.createElement('hr');
		linea.className = 'milinea';

		var divImg = document.createElement("div");
		divImg.className = 'divImagen'; 
		var img = document.createElement("img");			
		if(data.imagen != "null") {
			img.src="data:image/png;base64,"+data.imagen ;
		}
		else{
			img.src="img/no_image.png" ;
		}			
		img.className = 'imagen';
		divImg.appendChild(img);

		var divImport = document.createElement('div');
		divImport.className = 'divMiImporte';   
		divImport.innerHTML = $precioUd+' \u20AC';
		
		var divBut = document.createElement("div");
		divBut.className = 'divButton'; 
		var but = document.createElement("button");
		 but.setAttribute("id", "but_"+$idProducto); 
		but.className ='miBoton';		
		var t = document.createTextNode("Comprar!");     		
		but.appendChild(t);  	
		divBut.appendChild(but);

		newNode.appendChild(divDesc); 				
		newNode.appendChild(linea);  
		newNode.appendChild(divImport);     
		newNode.appendChild(divImg); 
		newNode.appendChild(divBut);  

		document.getElementById('contenedor').appendChild(newNode);  
		$('#but_'+$idProducto).on("click", {idProd:$idProducto, nomProd:$nomProducto,cantOrig:$cantidadOrig, precio:$precioUd}, $.proxy(this.clickBtnComprar, this));
}


Section1.prototype.clickBtnComprar = function(ev)
{		
	var ref = this;
	var miCompra;

	if (! ref.existeProducto (ev.data.idProd, ref.cestaProductos)) 
	{	
		miCompra = new ProductoCesta();
		miCompra.idProducto = ev.data.idProd;
		miCompra.nombreProducto = ev.data.nomProd;
		miCompra.cantidadEnCesta =  miCompra.cantidadEnCesta + 1;
		miCompra.cantidadOriginal = ev.data.cantOrig;
		miCompra.precioUnidad = ev.data.precio;
		miCompra.precioTotal = miCompra.cantidadEnCesta * miCompra.precioUnidad;
		ref.cestaProductos.push(miCompra);
		alert('Producto a\u00f1adido a la cesta');	
	}else
	{
		miCompra = ref.searchProducto(ev.data.idProd, ref.cestaProductos);
		// que no quede cantidad para incluir
		if (miCompra.cantidadOriginal <= miCompra.cantidadEnCesta) 
		{
			alert("Producto agotado. Ya dispone de "+ miCompra.cantidadEnCesta + " unidades en su cesta");
		}
		else // que ya esté en la cesta y sólo modificamos la cantidad
		{		
			ref.modCantPrecioProducto(ev.data.idProd, ref.cestaProductos);
			alert('Producto a\u00f1adido a la cesta');	
		}			
	}
	
/* 	for (var i=0; i < ref.cestaProductos.length; i++) {
		miCompra = ref.cestaProductos[i];
		alert("Producto: "+i);
		miCompra.mostrar();
	} */
}


Section1.prototype.searchProducto = function(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].idProducto === nameKey) {
            return myArray[i];
        }
    }
}


Section1.prototype.existeProducto = function(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].idProducto === nameKey) {
            return true;
        }
    }
	return false;
}

Section1.prototype.modCantPrecioProducto = function(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].idProducto === nameKey) {
            myArray[i].cantidadEnCesta =  myArray[i].cantidadEnCesta + 1;
			myArray[i].precioTotal = myArray[i].cantidadEnCesta * myArray[i].precioUnidad;
        }
    }
}

Section1.prototype.renderPage = function()
{	
	this.parent.renderPage.call(this);
	/* console.log('renderPage Section hija 1'); */
};

Section1.prototype.dispose = function()
{ 	
    this.parent.dispose.call(this); 
	console.log('dispose Section hija 1');

};
