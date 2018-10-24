console.error("Nos encargamos de hacer la logica");

    /*Formatear las fechas actuale*/
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });
        
     $('#start-date').val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());

console.warn("Formateamos las fechas");

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
                        console.info("cargando info:", response);
                        console.info("#select-"+place);
                            $.each(response.data, function( key, val ) {
                                var option_ = $("<option/>");
                                    option_.attr("value", val.nombre.value);
                                    option_.attr("data-option", JSON.stringify(val));
                                    option_.text(val.nombre.value);

                                $("#select-"+place).append(option_);
                             });
                    });
        }

//Desencadenar el eveto principal
 $("body").on("change", "select#time-periods, input#amout-periods, #amount-jobs, select", function(){
                globalCalculate();
});

function globalCalculate(){
            var periodo     = ( $('#time-periods').val() == undefined || $('#time-periods').val() == "") ? "dia" : $('#time-periods').val();
            var periodoText = ( periodo == "horas" ) ? "12_horas" : "tarifa_"+periodo;
            var periodos = ( $('#amout-periods').val() == undefined || $('#amout-periods').val() == "") ? 0 : $('#amout-periods').val();
            var cantidad = ( $('#amount-jobs').val() == undefined || $('#amount-jobs').val() == "" ) ? 0 : $('#amount-jobs').val(); 
                
            if ( isNaN(cantidad) == true || isNaN(periodos)  == true ){
                alert("Existe un error con un valor no numerico");
            }else{
                //console.error("Falta change de valor unitario!");
                var jobPlace          = $('#select-jobPlace').children('option:selected').data('option');
                var computerEquipment = $('#select-computerEquipment').children('option:selected').data('option');
                var computerLicences  = $('#select-computerLicences').children('option:selected').data('option');
                var typeHeadbands     = $('#select-headbands').children('option:selected').data('option');
                var lincencesMarkers  = $('#select-lincencesMarkers').children('option:selected').data('option');
                
                    //Puesto de trabajo
                    if ( jobPlace != undefined ){
                       obtainUnitValues( jobPlace, periodoText, periodos, cantidad, "jobPlace" );
                    }else{ clearForm("jobPlace"); }

                    //Equipo_de_computo
                    if ( computerEquipment != undefined ){
                       obtainUnitValues( computerEquipment, periodoText, periodos, cantidad, "computerEquipment" );
                    }else{ clearForm("computerEquipment"); }

                    //Lincencias
                    if ( computerLicences != undefined ){
                       obtainUnitValues( computerLicences, periodoText, periodos, cantidad, "computerLicences" );
                    }else{  clearForm("computerLicences"); }

                    //typeHeadbands
                    if ( typeHeadbands != undefined ){
                       obtainUnitValues( typeHeadbands, periodoText, periodos, cantidad, "headbands" );
                    }else{  clearForm("headbands"); }

                    //marcadoras
                    if ( lincencesMarkers != undefined ){
                       obtainUnitValues( lincencesMarkers, periodoText, periodos, cantidad, "lincencesMarkers" );
                    }else{  clearForm("lincencesMarkers"); }

                    $(".aditionals-elements").each(function(){
                        var grupo = $(this).data('grupo');
                        var optionDataAdic = $(this).children('option:selected').data('option');
                            console.warn("grupo", grupo);
                            console.info("optionDataAdic", optionDataAdic);
                    }); 
            }
}

       function obtainUnitValues(mainObj, searchBy, cantidad, periodos, identify){
            console.info('#'+identify+'_unitario');
            $('#'+identify+'_unitario').val( fNumber.go(mainObj[searchBy].value, "COP") );
            $('#'+identify+'_total').val( fNumber.go(mainObj[searchBy].value*cantidad*periodos, "COP") );
            $('#'+identify+'_total').data('cost', mainObj[searchBy].value * cantidad * periodos);     
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


