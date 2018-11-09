var totalFinal = 0;
var summary_ = [];
    summary_.resumen = "",
    summary_.puestos = [];
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
                            $.each(response.data, function( key, val ) {
                                var option_ = $("<option/>");
                                    option_.attr("value", val.nombre.value);
                                    option_.attr("data-option", JSON.stringify(val));
                                    option_.text(val.nombre.value);

                                $("#select-"+place).append(option_);
                             });
                    });
        }
        //Remover Espacios de trabajo
        $("body").on("click","#delete-place-job", function(){
            var parent = $(this).parent().parent().parent().parent().parent(".calculator");
            if ( parent.index() != 0) {
                var state = confirm("¿Esta seguro de eliminar este elemento?");
                if ( state ){
                     parent.remove();    
                     calculateEnd();
                }
            }
        });

       //Agregar elementos Adicionales
        $("body").on("click","#add-new-aditional", function(){
           
            var padre_ = $("#formOm-"+$(this).attr("data-padre"));
             var index_ = padre_.find(".aditional_").length+1;

            var additional = padre_.find(".aditional_:first-child").clone();
                additional.find("#title").remove();
                additional.find("input").each(function(){ $(this).attr("data-clone-index", index_); });
                
                padre_.find("#adicionalesOm").append(additional);
        });
         //Remover elemento Adicional
        $("body").on("click","#removeMe", function(){
            var padre_ = $("#formOm-"+$(this).attr("data-padre"));
            if ( padre_.find(".aditionals-to-clone").length > 1 ){
                $(this).parent().parent().parent().parent().parent().remove();  
                    calculateEnd();
            }
        })

        $("body").on("change click blur keyup", "select#time-periods, input#amout-periods, #amount-jobs, select, #amountAdiccional", function(){
            var padre = $("#formOm-"+$(this).attr("data-padre"));
               globalCalculate(padre);
        });

        //Agregar puesto de trabajo
        $("body").on("click", "#add-new-placeJob", function(){
            var elemIds = $("#all-place-jobs .calculator").length;
                elemIds = elemIds+1;  

            var clone_el = $("#formOm-1").clone();
                clone_el.attr("id", "formOm-"+elemIds);
                /*::Deja la plantilla limpia:::*/
                    //Quitar adicionales
                    clone_el.find("div.aditional_").not(":first").each(function(){
                        $(this).remove();
                    })
                    //Añade id del padre al boton de añadir adicional
                    clone_el.find("#add-new-aditional").attr("data-padre", elemIds);
                    //Añade id del padre al boton de remover adicional
                    clone_el.find("#removeMe").attr("data-padre", elemIds);
                    //Añade id del padre a todos los selects
                    clone_el.find("select").each(function(){
                           $(this).attr("data-padre", elemIds);
                    });
                    //Vacia inputs y los referencua al padre
                    clone_el.find("input").each(function(){
                            $(this).attr("data-padre", elemIds);
                        var typeIs = $(this).attr("type");
                        if ( typeIs == "date" ){
                            $(this).val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());
                        }
                        if ( typeIs == "text" || typeIs == "number" ){
                            $(this).val("");
                        }
                    });
                /*::Fin:::*/
               $("#all-place-jobs").append(clone_el);
        });


        function globalCalculate(padre){
            totalFinal = 0;
            var start_date_ =   padre.find("#start-date").val();
            var end_date_   =  padre.find("#end-date");
            var periodo     = ( padre.find('#time-periods').val() == undefined || padre.find('#time-periods').val() == "") ? "dia" : padre.find('#time-periods').val();
            var periodoText = ( periodo == "horas" ) ? "12_horas" : "tarifa_"+periodo;
            var periodos    = ( padre.find('#amout-periods').val() == undefined || padre.find('#amout-periods').val() == "") ? 0 : padre.find('#amout-periods').val();
            var cantidad    = ( padre.find('#amount-jobs').val() == undefined || padre.find('#amount-jobs').val() == "" ) ? 0 : padre.find('#amount-jobs').val(); 
            
            var day = moment(start_date_);
            
            if ( periodo == "mes" ){ day.add( periodos , "months"); }
            if ( periodo == "dia" ){ day.add( periodos , "days"); }
            if ( periodo == "horas" ){ day.add( periodos , "hours"); }

            end_date_.val( day.format('DD/MM/YYYY') );

            if ( isNaN(cantidad) == true || isNaN(periodos)  == true ){
                alert("Existe un error con un valor no numerico");
            }else{
                var jobPlace          = padre.find('#select-jobPlace').children('option:selected').data('option');
                var computerEquipment = padre.find('#select-computerEquipment').children('option:selected').data('option');
                var computerLicences  = padre.find('#select-computerLicences').children('option:selected').data('option');
                var typeHeadbands     = padre.find('#select-headbands').children('option:selected').data('option');
                var lincencesMarkers  = padre.find('#select-lincencesMarkers').children('option:selected').data('option');
                
                var resumenCotizacion;
                    //Puesto de trabajo
                    if ( jobPlace != undefined ){
                        resumenCotizacion = "Puesto de trabajo: "+ jobPlace.nombre.value;
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
                  
                    padre.find(".aditionals-elements").each(function(index){
                        var grupo   = $(this).data('grupo'),
                            cantidad = $(this).parent().parent().parent(".form-row").find("#amountAdiccional").val(),
                            amountUnitary = ( cantidad == undefined || cantidad.length == 0) ? 1 : cantidad;

                            optionDataAdic = $(this).children('option:selected').data('option'),
                            cloneIndex = index+1;

                            if ( optionDataAdic != undefined ){
                                obtainUnitValues( padre, optionDataAdic, periodoText, periodos, cantidad, "optionDataAdic", cloneIndex, amountUnitary );  
                             }else{  clearForm("optionDataAdic"); }
                    });

                resumenCotizacion = periodoText+' + '+cantidad+' unidades + '+periodos+' periodos + ';
                    summary_.resumen  = resumenCotizacion;
               calculateEnd();
            }
        }
        function calculateEnd(){
            console.error("%ccalculateEnd","font-size:18px;color:red;");
             $("input[placeholder='$Total']").each(function(){
                    if ( $(this).val() != '' ){
                       totalFinal += parseInt($(this).data('cost'));
                    }
                });
             console.info(summary_);
            $("#total-final").text(fNumber.go(totalFinal, "$")+' COP');
            $("#totalFlotanteOm").removeClass("d-none")
            .find("div.bg-success").removeClass("alerterror").find("h3").text( fNumber.go(totalFinal, "$")+' COP' );
                cResumenFinal();
        }

       function obtainUnitValues(padre, mainObj, searchBy, cantidad, periodos, identify, cloneI, value){
            var andQuery = ( cloneI != undefined )? "data-clone-index="+cloneI: "type='text'";
            padre.find('#'+identify+'_unitario['+andQuery+']').val( fNumber.go(mainObj[searchBy].value, "COP") );
                if ( value != undefined ) {
                    var totalAditionals = mainObj[searchBy].value*cantidad*periodos * value;
                     padre.find('#'+identify+'_total['+andQuery+']').val( fNumber.go( totalAditionals , "COP") );
                     padre.find('#'+identify+'_total['+andQuery+']').data('cost', mainObj[searchBy].value * cantidad * periodos);  
                } 
            padre.find('#'+identify+'_total['+andQuery+']').val( fNumber.go(mainObj[searchBy].value*cantidad*periodos, "COP") );
            padre.find('#'+identify+'_total['+andQuery+']').data('cost', mainObj[searchBy].value * cantidad * periodos); 
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

        function carShoppingtemplate(data){
            var carHtml = '<div  class="col-xl-12 cotization basic-cotization">'
                carHtml += '<div class="row text-white" style="font-size: 0.8em;">';
                carHtml +=         '<div class="col-xl-12 bg-info p-3 mb-2">';
                carHtml +=             '<h5 class="text-white p-0 m-0">';
                carHtml +=                 'Resumen de cotización';
                carHtml +=                 'Puesto <span class="nameMarketStall">'+data.id_place+'</span>';
                carHtml +=             '</h5>';
                carHtml +=          '</div>';

                carHtml +=   '<div class="col-md-12 col-lg-4 col-xl-4 mb-4" class="periodoDeTiempo">';
                carHtml +=       '<p class="m-0 p-0">Periodo de tiempo:</p>';
                carHtml +=           '<h5 class="m-0 p-0">'+data.timePeriod+'</h5>';
                carHtml +=   '</div>';

                carHtml +=  '<div class="col-md-6 col-lg-4 col-xl-4 mb-4" class="fechaDeInicio">';
                carHtml +=     '<p class="m-0 p-0">Fecha de inicio:</p>';
                      carHtml +=    '<h5 class="m-0 p-0" >'+data.start_date+'</h5>';
                carHtml +=  '</div>';

                carHtml +=  '<div class="col-md-6 col-lg-4 col-xl-4 mb-4" class="fechaDeFinal">';
                carHtml +=      '<p class="m-0 p-0">Fecha de cierre:</p>';
                carHtml +=      '<h5 class="m-0 p-0"> '+data.end_Date+'</h5>';
                carHtml +=  '</div>';

                carHtml +=  '<div class="col-lg-4 col-xl-4 mb-4" class="puestoDeTrabajo">';
                carHtml +=     '<p class="m-0 p-0">Puestos de trabajo:</p>';
                carHtml +=          '<h5 class="m-0 p-0">('+data.puestoDeTrabajo.cantidad+') '+data.puestoDeTrabajo.name+'</h5>';
                carHtml +=  '</div>';

                carHtml +=   '<div class="col-lg-4 col-xl-4 mb-4" class="equipoDeComputo">';
                carHtml +=        '<p class="m-0 p-0">Equipo de computo:</p>';
                carHtml +=          '<h5 class="m-0 p-0 mb-3 titleEquipo">'+data.equipoDeComputo.name+'</h5>';

                carHtml +=          '<p class="m-0 p-0">Licencia:</p>';
                carHtml +=          '<h5 class="m-0 p-0 titleLicence">'+data.equipoDeComputo.licencia+'</h5>';
                carHtml +=   '</div>';

                carHtml +=   '<div class="col-lg-4 col-xl-4 mb-4" class="tipoDeDiadema">';
                carHtml +=         '<p class="m-0 p-0">Tipo de diadema:</p>';
                carHtml +=          '<h5 class="m-0 p-0 mb-3 titleTipoDiadema">'+data.tipoDediadema.name+'</h5>';
                carHtml +=          '<p class="m-0 p-0">Licencia de marcadores:</p>';
                carHtml +=          '<h5 class="m-0 p-0 titleTipoLicencia">'+data.tipoDediadema.licencia+'</h5>';
                carHtml +=    '</div>';

                carHtml +=      '</div>';
                carHtml +=   '</div>';

                return carHtml;
        }

function cResumenFinal(){
    summary_.puestos = [];
     $("#web-car-summary").html("");
    //CONTAMOS lOS PUESTOS DE TRABAJO
        $("#all-place-jobs .calculator").each(function(index){
            var fechaInicio      = $(this).find("#start-date").val(),
                TimePeriod       = $(this).find("#amout-periods").val(),
                cantidadPeriodos = $(this).find("#time-periods").val(),
                FechaFinal       = $(this).find("#end-date").val()

            var PuestoDeTrabajo         = $(this).find("#select-jobPlace").val();
                PuestoDeTrabajoCantidad = $(this).find("#amount-jobs").val(),
                PuestoDeTrabajoUnitario = $(this).find("#jobPlace_unitario").val(),
                PuestoDeTrabajoTotal    = $(this).find("#jobPlace_total").val();


        if ( TimePeriod != undefined && cantidadPeriodos != '' && PuestoDeTrabajo != '' && PuestoDeTrabajoCantidad != ''){

                        var identify_ = "cotization-"+$(this).attr("id");
                        /*::::::::*/
                            var EquiposDeComputo       = $(this).find("#select-computerEquipment").val(),
                                EquiposDeComputoUnidad = $(this).find("#optionDataAdic_unitario").val();
                                //EquiposDeComputoTotal  = $(this).find("#optionDataAdic_total").val();

                            var TiposDeLicencias       = $(this).find("#select-computerLicences").val();
                                //TiposDeLicenciasUnidad = $(this).find("#computerLicences_unitario").val();
                                //TiposDeLicenciasTotal  = $(this).find("#computerLicences_total").val();

                            var TiposDeDiadema       = $(this).find("#select-headbands").val();
                                //TiposDeDiademaUnidad = $(this).find("#headbands_unitario").val();
                                //TiposDeDiademaTotal  = $(this).find("#headbands_total").val();

                            var LicenciaDeMarcadoras       = $(this).find("#select-lincencesMarkers").val();
                                //LicenciaDeMarcadorasUnidad = $(this).find("#lincencesMarkers_unitario").val();
                                //LicenciaDeMarcadorasTotal  = $(this).find("#lincencesMarkers_total").val();

                                if ( EquiposDeComputo == undefined || EquiposDeComputo == "" ){
                                        EquiposDeComputo = "No aplica";
                                }
                                 if ( TiposDeLicencias == undefined || TiposDeLicencias == "" ){
                                       TiposDeLicencias = "No aplica";
                                }
                                if ( TiposDeDiadema == undefined || TiposDeDiadema == "" ){
                                        TiposDeDiadema = "No aplica";
                                }
                                if ( LicenciaDeMarcadoras == undefined || LicenciaDeMarcadoras == "" ){
                                        LicenciaDeMarcadoras = "No aplica";
                                }


                         var data = {
                                id_place: (index+1),
                                timePeriod: cantidadPeriodos+" - "+TimePeriod,
                                start_date: fechaInicio,
                                end_Date: FechaFinal,
                                puestoDeTrabajo:{
                                    name: PuestoDeTrabajo,
                                    cantidad: ( PuestoDeTrabajoCantidad != 0 || PuestoDeTrabajoCantidad != "" ) ? PuestoDeTrabajoCantidad : 0 ,
                                },
                                equipoDeComputo:{
                                    name: EquiposDeComputo,
                                    licencia: TiposDeLicencias 
                                },
                                tipoDediadema:{
                                    name: TiposDeDiadema,
                                    licencia: LicenciaDeMarcadoras 
                               }
                            };
                        summary_.puestos.push({"value": data})
                          
                        var template = carShoppingtemplate(data);
                        var adiccionalTemplate = $("<div/>");
                            adiccionalTemplate.addClass("col-xl-12 container-aditionals");

                                     /*::::Elementos Adicionales::::*/
                                        $(this).find("#adicionalesOm .aditional_").each(function(){
                                            var ElementoAdicionalNombre   = $(this).find("#select-additionalsElements").val(),
                                                ElementoAdicionalUnitario = $(this).find("#optionDataAdic_unitario").val(),
                                                ElementoAdicionalTotal    = $(this).find("#amountAdiccional").val(),
                                                ElementoAdicionalTotal    = $(this).find("#optionDataAdic_total").val();
                                                
                                                if ( ElementoAdicionalNombre != '' ){
                                                    var tmpAditional = $("<div/>");
                                                        tmpAditional.attr("class", "box-aditional");

                                                    var paragraph = $("<p/>");
                                                        paragraph.append('<h5 class="m-0 p-0">'+ElementoAdicionalNombre+'</h5><span> '+ElementoAdicionalTotal+' - '+ElementoAdicionalUnitario+'</span>');
                                                        tmpAditional.append(paragraph);

                                                    adiccionalTemplate.append( tmpAditional );
                                                }
                                        });
                                    template = $(template).append(adiccionalTemplate);       
                                    /*::::Fin Elementos Adicionales::::*/
                        $("#web-car-summary").append(template);
                    }else{
                        //console.error("No podemos calcular nada Aún");
                        $("#totalFlotanteOm").removeClass("d-none")
                        .find("div.bg-success").addClass("alerterror").find("h3").text("No podemos calcular nada Aún");
                    }
                });
        }
console.warn("ejem10");
