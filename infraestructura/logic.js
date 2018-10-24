       /*Formatear las fechas actuale*/
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });
        $('#start-date').val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue()); 
//Cargando Puestos de trabajo
        loadInfo("21/PUESTO/grupo/false/", "jobPlace");
        //Cargando puestos de trabajo
        loadInfo("21/EQUIPO%20DE%20COMPUTO/grupo/false/", "computerEquipment");
        //Cargando licencias de equipos
        loadInfo("21/LICENCIA%20EQUIPO%20DE%20COMPUTO/grupo/false/", "computerLicences");
        //Cargando Diademas
        loadInfo("21/DIADEMA/grupo/false/","headbands");
        //Cargando Marcadores
        loadInfo("21/LICENCIA%20DE%20MARCADORAS/grupo/false/","lincencesMarkers");
        //Cargar Adicionales
        loadInfo("21/ADICIONALES/grupo/false/","additionalsElements");

        //Carga
        function loadInfo(table, place){
            var url_ = "https://servon.com.co/index/dataGet/be5c205a1cec81934cee5a7e6e28f34e/1/1000/";
                url_ += table;
                 $.getJSON(
                    url_,
                    function( response ) {
                        //console.info("cargando info:", response);
                       // console.info("#select-"+place);
                            $.each(response.data, function( key, val ) {
                                var option_ = $("<option/>");
                                    option_.attr("value", val.nombre.value);
                                    option_.attr("data-option", JSON.stringify(val));
                                    option_.text(val.nombre.value);

                                $("#select-"+place).append(option_);
                             });
                    });
        }

       //Agregar elementos Adicionales
        $("body").on("click","#add-new-aditional", function(){
            var padre_ = $("#formOm-"+$(this).attr("data-padre"));
            var additional = padre_.find(".aditional_:first-child").clone();
                additional.find("#title").remove();
                additional.find("input").each(function(){ $(this).val(''); });
                
                padre_.find("#adicionalesOm").append(additional);
        });
         //Remover elemento Adicional
        $("body").on("click","#removeMe", function(){
            var padre_ = $("#formOm-"+$(this).attr("data-padre"));
               console.info(padre_);
            if ( padre_.find(".aditionals-to-clone").length > 1 ){
                   console.info("sadasd");
                $(this).parent().parent().parent().parent().parent().remove();  
            }
        })

//Desencadenar el eveto principal
 $("body").on("change", "select#time-periods, input#amout-periods, #amount-jobs, select", function(){
        console.error("Trabajando en multimples tareas", $(this).attr("data-padre") );
        var padre = $("#formOm-"+$(this).attr("data-padre"));
           globalCalculate(padre);
});


//Agregar puesto de trabajo
$("body").on("click", "#add-new-placeJob", function(){
    var elemIds = $("#all-place-jobs .calculator").length;
        elemIds = elemIds+1;  

    var clone_el = $("#formOm-1").clone();
        clone_el.attr("id", "formOm-"+elemIds);
            
            clone_el.find("#add-new-aditional").each(function(){
                $(this).attr("data-padre", elemIds);
            })
            clone_el.find("#removeMe").each(function(){
                $(this).attr("data-padre", elemIds);
            })
       
            clone_el.find("select").each(function(){
                   $(this).attr("data-padre", elemIds);
            });
            clone_el.find("input").each(function(){
                    $(this).attr("data-padre", elemIds);
                var typeIs = $(this).attr("type");

                if ( typeIs == "date" ){
                       console.warn("formatear fecha");
                    $(this).val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());
                }

                if ( typeIs == "text" ){
                    console.info("Es un tipo texto");
                    $(this).val("");
                }
            });
       $("#all-place-jobs").append(clone_el);
});



function globalCalculate(padre){
            var periodo     = ( padre.find('#time-periods').val() == undefined || padre.find('#time-periods').val() == "") ? "dia" : padre.find('#time-periods').val();
            var periodoText = ( periodo == "horas" ) ? "12_horas" : "tarifa_"+periodo;
            var periodos    = ( padre.find('#amout-periods').val() == undefined || padre.find('#amout-periods').val() == "") ? 0 : padre.find('#amout-periods').val();
            var cantidad    = ( padre.find('#amount-jobs').val() == undefined || padre.find('#amount-jobs').val() == "" ) ? 0 : padre.find('#amount-jobs').val(); 
                
            if ( isNaN(cantidad) == true || isNaN(periodos)  == true ){
                alert("Existe un error con un valor no numerico");
            }else{
                //console.error("Falta change de valor unitario!");
                var jobPlace          = padre.find('#select-jobPlace').children('option:selected').data('option');
                var computerEquipment = padre.find('#select-computerEquipment').children('option:selected').data('option');
                var computerLicences  = padre.find('#select-computerLicences').children('option:selected').data('option');
                var typeHeadbands     = padre.find('#select-headbands').children('option:selected').data('option');
                var lincencesMarkers  = padre.find('#select-lincencesMarkers').children('option:selected').data('option');
                
                    //Puesto de trabajo
                    if ( jobPlace != undefined ){
                       obtainUnitValues( padre, jobPlace, periodoText, periodos, cantidad, "jobPlace" );
                    }else{ clearForm("jobPlace"); }

                    //Equipo_de_computo
                    if ( computerEquipment != undefined ){
                       obtainUnitValues( padre, computerEquipment, periodoText, periodos, cantidad, "computerEquipment" );
                    }else{ clearForm("computerEquipment"); }

                    //Lincencias
                    if ( computerLicences != undefined ){
                       obtainUnitValues( padre, computerLicences, periodoText, periodos, cantidad, "computerLicences" );
                    }else{  clearForm("computerLicences"); }

                    //typeHeadbands
                    if ( typeHeadbands != undefined ){
                       obtainUnitValues( padre, typeHeadbands, periodoText, periodos, cantidad, "headbands" );
                    }else{  clearForm("headbands"); }

                    //marcadoras
                    if ( lincencesMarkers != undefined ){
                       obtainUnitValues( padre, lincencesMarkers, periodoText, periodos, cantidad, "lincencesMarkers" );
                    }else{  clearForm("lincencesMarkers"); }
                    
                   //Elementos Adicionales
                    padre.find(".aditionals-elements").each(function(){
                        var grupo = $(this).data('grupo');
                        var optionDataAdic = $(this).children('option:selected').data('option');
                            console.warn("grupo", grupo);
                            console.info("optionDataAdic", optionDataAdic);

                            if ( optionDataAdic != undefined ){
                                obtainUnitValues( padre, optionDataAdic, periodoText, periodos, cantidad, "optionDataAdic" );  
                             }else{  clearForm("optionDataAdic"); }
                    });

                var totalFinal = 0;
                var resumenCotizacion = periodoText+' + '+cantidad+' unidades + '+periodos+' periodos + ';


                //CONTAMOS lOS PUESTOS DE TRABAJO
                $("#all-place-jobs .calculator").each(function(index){
                    var fechaInicio      = $(this).find("#start-date").val();
                    var TimePeriod       = $(this).find("#time-periods").val();
                    var cantidadPeriodos = $(this).find("#time-periods").val();
                    var FechaFinal       = ""//$(this).find("#time-periods").val();;

                    var PuestoDeTrabajo         = $(this).find("#select-jobPlace").val();
                    var PuestoDeTrabajoCantidad = $(this).find("#amount-jobs").val();
                    var PuestoDeTrabajoUnitario = $(this).find("#jobPlace_unitario").val();
                    var PuestoDeTrabajoTotal    = $(this).find("#jobPlace_total").val();

                    if ( TimePeriod != undefined && cantidadPeriodos != '' && PuestoDeTrabajo != '' && PuestoDeTrabajoCantidad != ''){

                        console.warn("fechaInicio", fechaInicio);
                        console.warn("TimePeriod", TimePeriod);
                        console.warn("cantidadPeriodos", cantidadPeriodos);
                        console.warn("FechaFinal", FechaFinal);


                        console.warn("PuestoDeTrabajoTotal", PuestoDeTrabajo);
                        console.warn("PuestoDeTrabajoCantidad", PuestoDeTrabajoCantidad);
                        console.warn("PuestoDeTrabajoUnitario", PuestoDeTrabajoUnitario);
                        console.warn("PuestoDeTrabajoTotal", PuestoDeTrabajoTotal);

                        /*::::::::*/
                            var EquiposDeComputo = $(this).find("#select-computerEquipment").val(),
                                EquiposDeComputoUnidad = "",
                                EquiposDeComputoTotal  = "";

                                console.info("value", EquiposDeComputo);

                            var TiposDeLicencias = "",
                                TiposDeLicenciasUnidad = "",
                                TiposDeLicenciasTotal = "";

                            var TiposDeDiadema = "",
                                TiposDeDiademaUnidad = "",
                                TiposDeDiademaTotal  = "";

                            var LicenciaDeMarcadoras = "",
                                LicenciaDeMarcadorasUnidad = "",
                                LicenciaDeMarcadorasTotal  = "";
                         /*::::::::*/


                    }else{
                        console.error("No podemos calcular nada Aún");
                    }


                /*::::Elementos Adicionales::::*/
                    $(this).find("#adicionalesOm .aditional_").each(function(){
                        console.warn("dentro de los elementos adicionales!");
                        var ElementoAdicionalNombre   = $(this).find("#select-additionalsElements").text(),
                            ElementoAdicionalUnitario = $(this).find("#optionDataAdic_unitario").val(),
                            ElementoAdicionalTotal    = $(this).find("#optionDataAdic_total").val();

                            console.info("Nombre", ElementoAdicionalNombre);
                            console.info("Valor unitario", ElementoAdicionalUnitario);
                            console.info("Valor Total", ElementoAdicionalTotal);
                    });
                /*::::Fin Elementos Adicionales::::*/


                    console.warn("contando puestos");
                            console.info("Puesto #", index+1);
                });

                $("input[placeholder='$Total']").each(function(){
                    if ( $(this).val() != '' ){
                            totalFinal += parseInt($(this).data('cost'));
                    }
                });

                console.error("Total final", totalFinal);
            }
}

       function obtainUnitValues(padre, mainObj, searchBy, cantidad, periodos, identify){
            padre.find('#'+identify+'_unitario').val( fNumber.go(mainObj[searchBy].value, "COP") );
            padre.find('#'+identify+'_total').val( fNumber.go(mainObj[searchBy].value*cantidad*periodos, "COP") );
            padre.find('#'+identify+'_total').data('cost', mainObj[searchBy].value * cantidad * periodos);     
        }

        var fNumber = {
                sepMil: ".", /* separador para los miles*/
                sepDec: ',', /* separador para los decimales*/
                formatear:function (num){
                    num +='';
                    var splitStr = num.split('.');
                    var splitLeft = splitStr[0];
                    var splitRight = splitStr.length > 1 ? this.sepDec + splitStr[1] : '';
                    var regx = /(\d+)(\d{3})/;
                    while (regx.test(splitLeft)) {
                        splitLeft = splitLeft.replace(regx, '$1' + this.sepMil + '$2');
                    }
                    return this.simbol+' '+ splitLeft + splitRight;
                },
                go:function(num, simbol){
                    this.simbol = simbol ||'';
                    return this.formatear(num);
                }
            }

        function clearForm(identify){
            $('#'+identify+'_unitario').val('');
            $('#'+identify+'_unitario').val('');
            $('#'+identify+'_unitario').data('cost','0');    
        }


