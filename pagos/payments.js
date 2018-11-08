function InsertOmoldsIfraestructura(){
	console.info("Insertar dentro de la tabla en omolds");
}

$("#saveInBD").submit();

    $("body").on("click","#pay", function(event){
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
                    var d = new Date(), n = d.getTime();
                    var reference = "servon-"+n;
                    var hash = md5("4Vj8eK4rloUd272L48hsrarnUA~508029~"+reference+"~"+totalFinal+"~COP");

                   var dataPayLatam = [
                    { name: "merchantId", value:"508029" },
                    { name: "accountId", value:"512321" },
                    { name: "description", value:"Pago de infraestructura - Servon.com.co" },
                    { name: "referenceCode", value:reference },
                    { name: "amount", value: totalFinal },
                    { name: "tax", value:"0" },
                    { name: "taxReturnBase", value:"0" },
                    { name: "currency", value:"COP" },
                    { name: "signature", value:hash },
                    { name: "test", value:"1" },
                    //{ name: "buyerEmail", value:"test@test.com" },
                    { name: "responseUrl", value:"http://www.test.com/response" },
                    { name: "confirmationUrl", value:"http://www.test.com/confirmation" }
                        ];
                    for (var i = 0; i <= dataPayLatam.length - 1; i++) {
                        var input_ = $("<input/>");
                             input_.attr("name", dataPayLatam[i].name);
                             input_.attr("type", "hidden");
                             input_.val(dataPayLatam[i].value);
                        $(".pay").append(input_);
                    }; 
                    $(".pay").submit();
                }
        }); 
        
  console.info("Create pays");
