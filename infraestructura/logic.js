console.error("Nos encargamos de hacer la logica");

    /*Formatear las fechas actuale*/
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });
        
     $('#start-date').val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());
