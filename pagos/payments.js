var apiKey   = "4Vj8eK4rloUd272L48hsrarnUA",
	merchantId = "677879";

var payUdata = [
		            { name: "merchantId", value: merchantId },
		            { name: "accountId", value:"760061" },
		            { name: "description", value:"Pago TMK - Servon.com.co" },
		            //{ name: "referenceCode", value:reference },
		            //{ name: "amount", value: total_ },
		            { name: "tax", value:"0" },
		            { name: "taxReturnBase", value:"0" },
		            { name: "currency", value:"COP" },
		            //{ name: "signature", value:hash },
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
 $("#click").trigger("click");
    $("body").on("click","#pay", function(event){
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
            	hash = md5(apiKey+"~508029~"+reference+"~"+totalFinal+"~COP");

            payUdata.push({ name: "referenceCode", value:reference });
            
                    for (var i = 0; i <= dataPayLatam.length - 1; i++) {
                        var input_ = $("<input/>");
                             input_.attr("name", dataPayLatam[i].name);
                             input_.attr("type", "hidden");
                             input_.val(dataPayLatam[i].value);
                        $(".pay").append(input_);
                    }; 
                    $(".pay").submit();
                //}
        }); 

console.warn("Haciendo los pagos");
