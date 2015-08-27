"use strict";


var Section = function() 
{
		
}


Section.prototype.init = function()
{	
	//alert("iniciando pantalla padre");

    //this.$body = $("body");
	
};

Section.prototype.renderPage = function()
{	
	var $mibody = $("body");
	//alert("renderPage pantalla padre");
	$mibody.trigger("create");

  // $('#preloader').show();
	
};

Section.prototype.dispose = function()
{
	//alert("Dispose padre");

};


Section.prototype.showPreloader = function()
{	
	$('#preloader').show();
	//alert ("show"+$('#preloader').length);
};

Section.prototype.hidePreloader = function()
{	
	$('#preloader').hide();
};