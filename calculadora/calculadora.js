/*var CALCULADORA = CALCULADORA || {};

CALCULADORA.app = {
	post_url:"empty",
	form_container: "empty",
	base:"info",
	fields: "false",
	start: function(p){
		this.fields = p.fields;
		this.form_container = p.form_container;

		this.fieldsTemplate();
	},
	//Crear todos los input's
	createInputs: function(type){
		var input = $("<input/>");
			input.attr("type");
			//input.addClass();

		return input;
	},
	//Creamos campos selects dependientes de otros
	createSelects: function(){

	},
	//Creamos los campos del formulario
	fieldsTemplate: function(){
		//console.error(this.fields);
		for (var i = 0; i <= this.fields.length - 1 ; i++) {
			var fields = this.fields[i]
				if ( fields.loleny_ ){
							//console.warn("aviso!", fields.loleny_.length );
					for (var j = 0; j <= fields.loleny_.length - 1; j++) {
						var input = $("<input/>");
							input.attr("type", fields.loleny_[j].type);
							$(this.form_container).append(input);
					};
							
				} 

				if ( fields.shared_ ){
					for (var j = 0; j <= fields.shared_.length -1; j++) {
						var current = fields.shared_[j],
							container    = ( current.container != undefined ) ? true : false,
							subContainer = ( current.subContainer != undefined) ? true : false,
							_class 		 = ( current.subContainer.class_ != undefined) ? current.subContainer.class_  : "";

							if ( container == true ){
								var container = $("<div/>");
									container.addClass(current.container);
							}

							if ( subContainer == true ){
								var repeat;
								if ( current.subContainer.shared == true ){
									repeat = current.fields.length;
								}else{
									repeat = 1;
								}
									for (var k = 0; k <= current.fields.length - 1; k++) {
										var subContent = $("<div/>");
											subContent.addClass(_class);

											console.warn(subContent);
									};
								console.warn("Numero de columnas", repeat);
							}
							console.warn(container);
					};
					

					console.error(fields.shared_);
					for (var j = 0; j <= fields.shared_.fields.length - 1; j++) {
						div.addClass( fields.shared_.class_ );
						div.text("info");
						console.warn(div);
						$(this.form_container).append(div);
						//console.warn( fields.shared_[i] );
					}
					//console.warn("Aviso! compartidos", fields.shared_ );
				}
			
			
			
		};
	},
	started: function(){
		return this.fields;
	}
};





validaciones Globales
1. No campos vacios.
2. Campos que requieran otros, Ninguno de los dos vacios y jerarquias, No pueden tener la misma jerarquia.
3. 


var calculadora = {
	form_container:"#form_container",
	post_url: 'example.php',
	fields:[
		{ 
			shared_: [{	
						container: "form-group",
						subContainer: { class_: "col-xs-12 xol-sm-6", shared:false },
						fields: [
									{ indicate:'date-start', type:'date' },
									{ indicate:'date-start', type:'date' }
								]
					  },
					  {	
						subContainer: { shared:true },
						fields: [
								{ indicate:'date-start', type:'date' },
								{ indicate:'date-start', type:'date' }
								]
					  }],
			loleny_:[
				{ indicate:'date-start', type:'date', jerarqui: 1, other:{ indicate: 'date-end' } },
				{ indicate:'date-end', type:'date', jerarqui: 2, other:{ indicate: 'date-start' } },
				{ indicate:'time-zone', type:'date', jerarqui: 1, other:{ indicate: 'date-end' } } 
			]
		}
		
	]	
};

CALCULADORA.app.start(calculadora);
*/
$(document).ready(function(){
	$("body").on("change","input[type='date']", function(){
		var startDate = $("input#start-date").val(),
			endDate   = $("input#end-date").val(),
			replace_  = /-/g;

			if ( startDate.length != 0 && endDate.length != 0 ){
				if ( startDate !== endDate ){
					if ( endDate < startDate ){
						console.error("La fecha de finalización no puede ser mayor a la fecha de inicio");
					}else{
							//Reemplazar por caraceres validos para date de Javascript
							startDate = startDate.replace(replace_, '/');
							endDate   = endDate.replace(replace_, '/');
							
							var JstartDate  = new Date(startDate),
								JstartDay   = JstartDate.getDate(),
								JstartMonth = JstartDate.getMonth()+1, //La cuenta empieza desde 0
								JstartYear  = JstartDate.getFullYear();

							var JendDate  = new Date(endDate);
								JendDay   = JendDate.getDate(),
								JendMonth = JendDate.getMonth()+1, //La cuenta empieza desde 0
								JendYear  = JendDate.getFullYear();

						console.info("Datos de fecha Inicial");
							console.warn("Día?", JstartDay);
							console.warn("Mes", JstartMonth);
							console.warn("Año", JstartYear);

						console.info("Datos de fecha Final");
							console.warn("Día?", JendDay);
							console.warn("Mes", JendMonth);
							console.warn("Año", JendYear);

							if ( JstartMonth == JendMonth ){
								console.warn("Los meses son iguales. resto normal");
								console.error(JstartDay - JendDay);
							}else{
								console.warn("Los meses no son iguales. resto normal?");
								console.error(JstartDay - JendDay);
							}



							//console.warn("Fecha de inicio", JstartDate);
							//console.warn("Fecha de final", JendDate);
					}
				}else{
					console.warn("las fechas son iguales");
				}
				
			}
		
	});
})









console.warn("información");