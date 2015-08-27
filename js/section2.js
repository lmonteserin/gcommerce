"use strict";

var Section2 = function(sectionName) 
{	
	this.parent.constructor.call(this, sectionName);

	this.init();
}

Section2.prototype = new Section();
Section2.prototype.constructor = Section2;
Section2.prototype.parent = Section.prototype;




Section2.prototype.init = function()
{	
	this.parent.init.call(this);
	alert('Section hija 2' +paypalApp.length);
	
	
	paypalApp.initialize();		
	this.loadInfo();

	this.renderPage();  	
};


Section2.prototype.loadInfo = function ()
{
    var urlService = 'http://1-dot-webgcommerceue.appspot.com/cuentaApp';   
	var ref = this;
	
	var $btn = $('#buyNowBtn');
	alert("boton"+$btn.length);
	
	$btn.on("click", {}, $.proxy(this.clickBtn, this));	
	
	//aqui la llamada a mostrar preloader
	this.showPreloader();
	//alert ("dopcument-bodi"+$("body").length);
	new FastClick($("body"));							
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
	alert("click boton: " + paypalApp);
	
	//50 son los euros a pagar
	paypalApp.pay(50);		
	ev.preventDefault();
}


Section2.prototype.renderPage = function()
{	
	this.parent.renderPage.call(this);
	//alert('renderPage lidia');
	
	//var t = $("body");
	//alert ("miboton+ "t);
	//var $btn = $('#btnGuardarCuenta');
	//alert ("miboton+ "$btn);
	/*alert ("miboton+ "$btn.length);
	$btn.on("click", {boton:$btn, aux:6}, $.proxy(this.clickBtn, this));	 */
};


Section2.prototype.dispose = function()
{ 	
    this.parent.dispose.call(this); 
//alert('dispose Section hija 0');

    
};
