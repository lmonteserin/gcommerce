"use strict";

var Section0 = function(sectionName) 
{
	this.parent.constructor.call(this, sectionName);

	this.init();
}

Section0.prototype = new Section();
Section0.prototype.constructor = Section0;
Section0.prototype.parent = Section.prototype;


Section0.prototype.init = function()
{	
	this.parent.init.call(this);
	alert('init Section hija 0');
	
	//this.loadInfo();
		

	this.renderPage();  	
};


Section0.prototype.loadInfo = function ()
{
    var urlService = "services/service.php";   
	var ref = this;

	//aqui la llamada a mostrar preloader
	Application.getInstance().showPreloader();

    jQuery.ajax({                                                
            url: urlService,
            cache: false,  				
            type: 'POST',
            dataType: "json",
            success: function(data) { ref.onServerResponse (data); },
            error: function(jqXHR, textStatus, errorThrown) {ref.onDataError(jqXHR, textStatus, errorThrown);},        
        });
}

Section0.prototype.onServerResponse = function (data)
{   

	//aqui la llamada a ocultar preloader
	 Application.getInstance().hidePreloader();

   //console.log("DATA RESPONSE: " + JSON.stringify(data));
   //console.log("DATA RESPONSE ERROR: " + data.ERROR);
   //alert("DATA RESPONSE: " + data);
   
    this.renderPage();
}


Section0.prototype.onDataError = function  (jqXHR, textStatus, errorThrown) 
{
    //aqui la llamada a ocultar preloader
    Application.getInstance().hidePreloader();

    alert("Error getInfo: " + textStatus);
}

Section0.prototype.clickBtn = function(ev)
{	
	var app = Application.getInstance();
	app.loadSection(1);


	//console.log("click: " + ev.data.pepe);
	//console.log("Aux: " + ev.data.aux);
}


Section0.prototype.renderPage = function()
{	
	this.parent.renderPage.call(this);
	alert('renderPage Section hija 0');
	
	//var $btn = $('#btn');
	//$btn.on("click", {pepe:$btn, aux:6}, $.proxy(this.clickBtn, this));	
};


Section0.prototype.dispose = function()
{ 	
    this.parent.dispose.call(this); 
	alert('dispose Section hija 0');

    
};
