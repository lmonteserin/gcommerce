"use strict";

var Section3 = function(sectionName) 
{
	var emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		nombreUsuario,
		pass_,
		nombreApellidos,
		email_,
		telef,
		dire,
		pobla,
		cod_postal,
		prov;
	
	
	this.parent.constructor.call(this, sectionName);

	this.init();
}

Section3.prototype = new Section();
Section3.prototype.constructor = Section3;
Section3.prototype.parent = Section.prototype;




Section3.prototype.init = function()
{	
	this.parent.init.call(this);
//	alert('Section hija 3');
	
	this.loadInfo();

	this.renderPage();  	
};


Section3.prototype.loadInfo = function ()
{
    var urlService = 'http://1-dot-webgcommerceue.appspot.com/cuentaApp';   
	var ref = this;

	//aqui la llamada a mostrar preloader
	this.showPreloader();
	//alert ("dopcument-bodi"+$("body").length);
	new FastClick($("body"));
	$.ajax({
		type : 'POST', 
		url : urlService, 
		cache: false,  		
		data:{ 
			obtener:"true",
			idUsuario: window.localStorage.getItem("idUsuario"),
			idComercio: window.localStorage.getItem("idComercio"),
			/* idUsuario: 26,
			idComercio: 5, */
		}, 		
		dataType: "json",								
		success: function(data){
			//alert(responseText);
			ref.onServerResponse(data); 
										
		},
		error: function(xhr, ajaxOptions, thrownError) {
			ref.onDataError(xhr, ajaxOptions, thrownError);				
		}			
	});							
}

Section3.prototype.onServerResponse = function (data)
{   
	//aqui la llamada a ocultar preloader
	this.hidePreloader();
	if (data.error != "true") {
		$("#nomUsuario").val(data.userName);
		$("#pwd").val(data.password);					
		$("#nomApel").val(data.nomApellidos);					
		$("#email").val(data.email);					
		$("#tfno").val(data.telefono);					
		$("#direcc").val(data.direccion);					
		$("#poblacion").val(data.poblacion);					
		$("#codPostal").val(data.cp);					
		$("#provincia").val(data.provincia);					
	}else {alert ("error"+data.error)}	
	
	var $btn = $('#btnGuardarCuenta');
	//alert ("mito"+ $btn.length);
	$btn.on("click", {boton:$btn, aux:6}, $.proxy(this.clickBtn, this));	
	
    //this.renderPage();
}


Section3.prototype.onDataError = function  (jqXHR, textStatus, errorThrown) 
{
    //aqui la llamada a ocultar preloader
   this.hidePreloader();
   alert("Error llamada Servidor"+thrownError + "-" + textStatus);
}

Section3.prototype.clickBtn = function(ev)
{
	var valid = this.esValido();
	var _nomUsu = this.nombreUsuario;
	var _nomApe = this.nombreApellidos;
	if (valid){			
		$.ajax({ 
			type : 'POST', 
			url : 'http://1-dot-webgcommerceue.appspot.com/cuentaApp', // Servlet URL 
			data:{ 	
				obtener:"false",
				username: this.nombreUsuario, 
				password: this.pass_, 
				nomApellidos: this.nombreApellidos, 
				email: this.email_, 
				telefono: this.telef, 
				direccion: this.dire, 
				poblacion: this.pobla, 
				cp: this.cod_postal, 
				provincia: this.prov, 
				idUsuario: window.localStorage.getItem("idUsuario"),
			}, 		
			dataType: "json",				
			success : function(data) { 												
					if (data.error != "true") {
						alert("Datos actualizados correctamente");
						// cambiar convenientemente
						//alert("nombreUsuario"+_nomUsu);
						window.localStorage.setItem("userName",_nomUsu);		
						window.localStorage.setItem("nomApellidos",_nomApe);							
					}					
			},				
			error:function (xhr, ajaxOptions, thrownError) {
				alert("Error llamada Servidor"+thrownError + " - " +ajaxOptions);					
			}
		});				
	}
	/*else{
		alert("NO VALIDA POPUP");
	};*/
}


Section3.prototype.renderPage = function()
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


Section3.prototype.dispose = function()
{ 	
    this.parent.dispose.call(this); 
//alert('dispose Section hija 0');

    
};


Section3.prototype.checkLength = function( o, n, min, max ) {	
	if(o) {
		if ( o.length > max || o.length < min ) {
			alert( "La longitud de " + n + " debe estar entre " +min + " y " + max + "." );		
			return false;
		} else {
			return true;
		}
	}
	else {
		alert( "La longitud de " + n + " debe estar entre " +min + " y " + max + "." );		
		return false;
	}				
}

Section3.prototype.checkRegexp = function( o, regexp, n ) {
	if (o) {
		if ( !( regexp.test( o ) ) ) {
			alert(n);
			return false;
		} else {
			return true;
		}
	}
	else {
		return false;
	}			 
}

Section3.prototype.esValido = function (){
	
	var valid = true;			
	
	this.nombreUsuario = $("#nomUsuario").val();
	this.pass_ = $("#pwd").val();			 
	this.nombreApellidos = $("#nomApel").val();
	this.email_ = $("#email").val(); 
	this.telef = $("#tfno").val();
	this.dire = $("#direcc").val();
	this.pobla = $("#poblacion").val();
	this.cod_postal = $("#codPostal").val();
	this.prov = $("#provincia").val();

	if (! this.checkLength( this.nombreUsuario, "Nombre de Usuario", 3, 100 )) {
	return false;
	}

	if (! this.checkLength( this.pass_, "Password", 5, 100 )) {
	return false;
	}
/*
	if (! this.checkLength( this.nombreApellidos, "Nombre y Apellidos", 3, 500 )) {
	return false;
	}

	if (! this.checkLength( this.email_, "Email", 6, 255 )) {
	return false;			  
	}
	
	if (! this.checkLength( this.telef, "Teléfono", 9, 13 )) {
	return false;			  
	}
	
	if (! this.checkLength( this.dire, "Dirección", 5, 100 )) {
	return false;
	}
	
	if (! this.checkLength( this.pobla, "Población", 5, 100 )) {
	return false;
	}

	if (! this.checkLength( this.cod_postal, "Código Postal", 5, 5 )) {
	return false;
	}

	if (! this.checkLength( this.prov, "Provincia", 5, 100 )) {
	return false;
	}

	if (! this.checkRegexp( this.email_, this.emailRegex, "Email incorrecto. Debe seguir un formato del tipo aaaa@bbbb.com" )) {
	return false;
	}*/

	return valid;
}