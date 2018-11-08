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
		   	{ name: "confirmationUrl", value:"https://www.servon.com.co/web/index/returnpayment/" }
	];

//Valido solo para insertar dentro de las tablas de servon
function InsertOmoldsIfraestructura(tablOM){
	//console.info( "tablOM", tablOM );
	if ( tablOM == "infraestructura" ){
		//console.table( payUdata );
		$("#consecutivoOMOLDS").val( payUdata[9].value ).css("border","1px solid red");
		$("#descripcionDeCompraOMOLDS").val( payUdata[2].value );
		$("#valorTotal").val( payUdata[11].value );
			$('#saveInBD').submit();
	}
	if ( tablOM == "TMK"){

	}
}

//GUARDAR DATOS EN LA TABLA DE INFRAESTRUCTURA
$('#saveInBD').submit(function( event ) {
	var from_ = $(this).attr("data-attr") 
    event.preventDefault();
        var form = this;
        var post_url = $(this).attr("action"); 
        var request_method = $(this).attr("method"); 
	        $.ajax({
	            url : post_url,
	            method: request_method,
	            data: new FormData(this),
	            contentType:false,
	            processData:false,
	        }).done(function(response){ 
	            if(response.tipoMsm == 'success'){
	            	payUdata.push({ name: "extra3", value: response.id });

	            	for (var i = 0; i <= payUdata.length - 1; i++) {
		                    var input_ = $("<input/>");
	                        	input_.addClass("removible");
	                            input_.attr("name", payUdata[i].name);
	                            input_.attr("type", "hidden");
	                            input_.val(payUdata[i].value);
	                        $(".pay").append(input_);
                    }; 
                    $(".pay").submit();
	            }else{
	            	alert("Ha ocurrido un fallo al guardar los datos");
	            }
	});
});

	//Click en aceptar terminos
	$("body").on("click", "#termsConditions", function(event){
			console.warn("Click aceptar terminos");
	    if ( totalFinal != 0 && $("#email").val() != ''){
	        if ( $(this).prop("checked") == false ){
	            $("#pay").attr("disabled","disabled");
	        }
	        else if ( $(this).prop("checked") == true ){
	            $("#pay").removeAttr("disabled");
	        }
	    }else{
	        alert("El valor final o el email no pueden estar vacios");
	        event.preventDefault();
	    }
	});

    $("body").on("click","#pay", function(event){
    	console.info("Haciendo pagos");
    	console.error("tarn", totalFinal);
        event.preventDefault();
        
       if ( totalFinal == 0 || $( "#termsConditions").prop("checked") == false ){
            alert("Debes seleccionar todos los datos previos");
                return false;
        }
       
       else if ( $("#email").val() == '' || validEmail($("#email").val()) == false ) {
                    alert("Asegurate de ingresar un email correcto");
                    return false;
       }
       
       else{
       	console.info("minatomo", totalFinal);

            var d = new Date(), n = d.getTime(),
            	reference = "servon-"+n,
            	hash = md5(apiKey+"~"+merchantId+"~"+reference+"~"+total_+"~COP");

	            payUdata.push({ name: "referenceCode", value:reference });
	            payUdata.push({ name: "signature", value:hash });
	            payUdata.push({ name: "amount", value: total_ });

                   	InsertOmoldsIfraestructura("infraestructura");
                }
        }); 

console.warn("Haciendo los pagos 20");
