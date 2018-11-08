var apiKey   = "4Vj8eK4rloUd272L48hsrarnUA",
	merchantId = "677879";

var total_ = 100000;

var payUdata = [
		    { name: "merchantId", value: merchantId },
		    { name: "accountId", value:"760061" },
		    { name: "description", value:"Pago TMK - Servon.com.co" },
		    { name: "tax", value:"0" },
		    { name: "taxReturnBase", value:"0" },
		    { name: "currency", value:"COP" },
		   	{ name: "test", value:"0" },
		   	{ name: "responseUrl", value:"https://www.servon.com.co/web/index/response/" },
		   	{ name: "confirmationUrl", value:"https://www.servon.com.co/web/index/returnpayment/" },
	   ];
//Valido solo para insertar dentro de las tablas de servon
function InsertOmoldsIfraestructura(tablOM){
	if ( tablOM == "infraestructura" ){

	}
	if ( tablOM == "TMK"){

	}
}

//$("#saveInBD").submit();
 $("#pay").trigger("click");

    $("body").on("click","#pay", function(event){
    	console.info("Haciendo pagos");
        event.preventDefault();
        
        /*if ( totalFinal == 0 || $( "#termsConditions").prop("checked") == false ){
            alert("Debes seleccionar todos los datos previos");
                return false;
        }
       
       else if ( $("#email").val() == '' || validEmail($("#email").val()) == false ) {
                    alert("Asegurate de ingresar un email correcto");
                    return false;
       }
       
       else{*/
            var d = new Date(), n = d.getTime(),
            	reference = "servon-"+n,
            	hash = md5(apiKey+"~"+merchantId+"~"+reference+"~"+total_+"~COP");

            payUdata.push({ name: "referenceCode", value:reference });
            payUdata.push({ name: "signature", value:hash });
            payUdata.push({ name: "amount", value: total_ });
            
                   for (var i = 0; i <= payUdata.length - 1; i++) {
                        var input_ = $("<input/>");
                        	input_.addClass("removible");
                            input_.attr("name", payUdata[i].name);
                            input_.attr("type", "hidden");
                            input_.val(payUdata[i].value);
                        $(".pay").append(input_);
                    }; 
                   
                    $(".pay").submit();
                //}
        }); 

console.warn("Haciendo los pagos 5");
