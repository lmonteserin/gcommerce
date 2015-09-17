/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/

var paypalApp =
 {
	//PAYPAL
    //LIVE: "PayPalEnvironmentProduction"
    //SANDBOX: "PayPalEnvironmentSandbox"
    PAYPAL_MODE: "PayPalEnvironmentSandbox",
    
    PRODUCTION_CLIENT_ID:"-",
    //SANDBOX_CLIENT_ID_alberto:"AYwMkBxe2-MtuhmiB_9DQbATQXxuszPfBC7bl9VZ2Z69Q_B-4E24bLKcaL_54tBxWfCEi7CUTYQf3jZY",
	SANDBOX_CLIENT_ID:"AYbex18kzX6uV6hsC_kZENMnpbeY2SPR7SrRSXWYibyasjbqYpgFKboxsiCMDs7VHaSighKJ1Rtm-oN_",
    PAYPAL_MERCHANT_NAME:"GCOMMERCE APP",
    PAYPAL_PRIVACITY_POLICY_URL:"https://www.google.es",
    PAYPAL_MERCHANT_USER_AGREEMENT_URL:"https://www.google.es",
    PAYPAL_SHORT_DESCRIPTION:"Compra online en GCOMMERCE APP COMERCIO1",
    PAYPAL_CURRENCY_CODE:"EUR",
    PAYPAL_LANGUAGE:"es",
    PAYPAL_TYPE_INTENT:"Sale",
	EXITO:"false",
	
	
   // paypalApplication Constructor
   initialize: function() 
   {
	 /*   alert("initialize paypal!"); */
        var clientIDs = {
       "PayPalEnvironmentProduction": paypalApp.PRODUCTION_CLIENT_ID,
       "PayPalEnvironmentSandbox": paypalApp.SANDBOX_CLIENT_ID,
     };

     PayPalMobile.init(clientIDs, paypalApp.onPayPalMobileInit);
   },



   onSuccesfulPayment : function(payment) 
   {
		//alert("payment success: " + JSON.stringify(payment, null, 4));	

		var content = JSON.stringify(payment);	 
		paypalApp.EXITO = "si";

		var el = document.getElementById('divfuera'); //se define la variable "el" igual a nuestro div
		el.style.display = 'none'; //damos un atributo display:none que oculta el div
		var el = document.getElementById('pedidoFinalizado'); 			
		el.innerHTML ="Su pedido ha sido tramitado correctamente.";
		el.style.display = 'block'; 
		var el = document.getElementById('cestaVacia'); //se define la variable "el" igual a nuestro div
		el.style.display = 'none';			
   },

   onAuthorizationCallback : function(authorization) 
   {
     //alert("authorization: " + JSON.stringify(authorization, null, 4));
   },


   createPayment : function (amount) 
   {
     // for simplicity use predefined amount
     // optional payment details for more information check [helper js file](https://github.com/paypal/PayPal-Cordova-Plugin/blob/master/www/paypal-mobile-js-helper.js)
    
    //subtotal, shipping, tax
    //var paymentDetails = new PayPalPaymentDetails(amount, "0.00", "0.00");    
    //var payment = new PayPalPayment(amount, paypalApp.PAYPAL_CURRENCY_CODE, paypalApp.PAYPAL_SHORT_DESCRIPTION, paypalApp.PAYPAL_TYPE_INTENT, paymentDetails);

   
    var payment = new PayPalPayment(amount, paypalApp.PAYPAL_CURRENCY_CODE, paypalApp.PAYPAL_SHORT_DESCRIPTION, paypalApp.PAYPAL_TYPE_INTENT);
   
    return payment;
   },

   configuration : function ()
   {
     
     var obConfg = {};
     obConfg.merchantName = paypalApp.PAYPAL_MERCHANT_NAME;
     obConfg.merchantPrivacyPolicyURL = paypalApp.merchantPrivacyPolicyURL;
     obConfg.merchantUserAgreementURL = paypalApp.PAYPAL_MERCHANT_USER_AGREEMENT_URL;
     obConfg.languageOrLocale = paypalApp.PAYPAL_LANGUAGE;
     //var config = new PayPalConfiguration({merchantName: paypalApp.PAYPAL_MERCHANT_NAME, merchantPrivacyPolicyURL: paypalApp.PAYPAL_PRIVACITY_POLICY_URL, merchantUserAgreementURL: paypalApp.PAYPAL_MERCHANT_USER_AGREEMENT_URL});
     var config = new PayPalConfiguration(obConfg);
         
     return config;
   },

   onPrepareRender : function() 
   {

    //alert("onPrepareRender!!");
     // buttons defined in index.html
     //  <button id="buyNowBtn"> Buy Now !</button>
     //  <button id="buyInFutureBtn"> Pay in Future !</button>
     //  <button id="profileSharingBtn"> ProfileSharing !</button>
     //var buyNowBtn = document.getElementById("buyNowBtn");
    // var buyInFutureBtn = document.getElementById("buyInFutureBtn");
     //var profileSharingBtn = document.getElementById("profileSharingBtn");



     /*buyNowBtn.onclick = function(e) {
       // single payment
       PayPalMobile.renderSinglePaymentUI(paypalApp.createPayment(), paypalApp.onSuccesfulPayment, paypalApp.onUserCanceled);
     };*/

     /*buyInFutureBtn.onclick = function(e) {
       // future payment
       PayPalMobile.renderFuturePaymentUI(paypalApp.onAuthorizationCallback, paypalApp.onUserCanceled);
     };

     profileSharingBtn.onclick = function(e) {
       // profile sharing
       PayPalMobile.renderProfileSharingUI(["profile", "email", "phone", "address", "futurepayments", "paypalattributes"], paypalApp.onAuthorizationCallback, paypalApp.onUserCanceled);
     };*/

     
   },

   onPayPalMobileInit : function() 
   {   
	//alert("onPayPalMobileInit!");
     // must be called
     // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow   
     PayPalMobile.prepareToRender(paypalApp.PAYPAL_MODE, paypalApp.configuration(), paypalApp.onPrepareRender);
   },



   pay : function(paypalAmount) 
   {	  
	  var payment = paypalApp.createPayment(paypalAmount);	
      PayPalMobile.renderSinglePaymentUI(payment, paypalApp.onSuccesfulPayment, paypalApp.onUserCanceled);
	  return paypment;
   },


   onUserCanceled : function(result) 
   {
	   //paypalApp.EXITO = "no";
	   //alert("onUserCanceled: " + result);
	    var ref = this;
	    var el = document.getElementById('divfuera'); //se define la variable "el" igual a nuestro div
	 	el.style.display = 'none'; //damos un atributo display:none que oculta el div
		var el = document.getElementById('pedidoFinalizado'); 			
		el.innerHTML ="Pedido Cancelado.";
		el.style.display = 'block'; 
		var el = document.getElementById('cestaVacia'); //se define la variable "el" igual a nuestro div
		el.style.display = 'none';
		paypalApp.EXITO = "si";
		   
   }
};

