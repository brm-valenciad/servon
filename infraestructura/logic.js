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
