/*Formatear las fechas actuales*/

	Date.prototype.toDateInputValue = (function() {
	    var local = new Date(this);
	    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	    return local.toJSON().slice(0,10);
	});
	
    $('#start-date').val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());
    $('#end-date').val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());

    //var b = moment.tz( "Africa/Bujumbura" );
    //var str = "GMT-5:00 - US/East-Indiana - EST - Hora oficial del Este de EE.UU.";

$(document).ready(function(){
	//Realizamos llamadas a la base de datos 
	function load(param){
		var urlElemental = "https://servon.com.co/index/dataGet/be5c205a1cec81934cee5a7e6e28f34e/1/1000/";

			$.ajax({
			 	url: urlElemental+param,
			 	async: true,
			 	type:"POST",
			 	success: function(result){
		       			var res = result.data;
		       		
		       			if ( res[0].zona_horaria != undefined ){
		       				for (var i = 0; i <= res.length - 1; i++) {
			       				var option_ = $("<option/>");
			       					option_.val(res[i].zona_horaria.value);
			       					option_.text(res[i].zona_horaria.value);
			       				$("#time-zone-tmk").append(option_);
		       				};
		       			}
		       			else if ( res[0].start_hour != undefined ) {
		       				for (var i = 0; i <= res.length - 1; i++) {
		       					
			
		       					if ( res[i].start_hour ){
		       						var startDate_ = res[i].start_hour.value +" "+ res[i].start_meridiem.value;
		       						var option_ = $("<option/>");
		       							option_.val(startDate_);
			       						option_.text(startDate_);
			       						$("#start-time-journal").append(option_);
		       					}

		       					if ( res[i].end_hour ){
		       						var startDate_ = res[i].end_hour.value +" "+ res[i].end_meridiem.value;
		       						var option_ = $("<option/>");
		       							option_.val(startDate_);
			       						option_.text(startDate_);

			       						$("#end-time-journal").append(option_);
		       					}
		       				};
		       			}
		       			else if ( res[0].aht_estimado != undefined ){
		       				var res = res.reverse();
		       				for (var i = 0; i <= res.length - 1; i++) {
		       					var option_ = $("<option/>");
			       					option_.val(res[i].name.value);
			       					option_.text(res[i].name.value);
			       				$("#service-type-tmk").append(option_);
		       				};
		       			}		
			    }
			});
			//boostrap custom select
			setTimeout(function(){
				$('select.outline').selectpicker();
			},2000);
	}
	//Servicios calculadora TMK
		load("41/false/false/");
	//zonas Horarias
		load("27/zona_horaria/false/");
	//Jornadas laborales
		load("39/false/false/");
	


	$("body").on("click", "input[type='checkbox'].activate-modules", function(){
		var childToActive = $(this).attr("data-show");
		var input = $("#"+childToActive).find("input[type='text']");

		if ( childToActive ){
			if ( $(this).prop( "checked" ) == true){
				$("#"+childToActive).addClass("active");
				$(this).prop("checked", true);
				
					if ( input.length > 0 ) {
						input.attr("disabled", false)
					}
			}else{
				$("#"+childToActive).removeClass("active");
				$(this).prop("checked", false);

					if ( input.length > 0 ) {
						input.attr("disabled", true)
					}
			}
		}
	});

	$("body").on("click", ".listDays li.day", function(){

		var addClass_, rmClass_;
		if ( $(this).hasClass("active") ){
			$(this).removeClass("active");
				addClass_ = "fa-times";
				rmClass_  = "fa-check";
		}else{
			$(this).addClass("active");
				addClass_ = "fa-check";
				rmClass_  = "fa-times";
		}
		var dayForGestion = $(".listDays li.day.active").length;
			$("#math-days-gestion").text(dayForGestion);

			$(this).find("span.icon").find("i.fas").removeClass(rmClass_).addClass(addClass_);
			$("input[type='date']").trigger("change");
	});


	$("body").on("change blur click","input[type='date'], input, div.filter-option, a.selected, select", function(){
		/*var HoraInicial  = $(".start-time-journal").find("div.filter-option").find(".filter-option-inner-inner").text();
		var HoraFinal    = $(".end-time-journal").find("div.filter-option").find(".filter-option-inner-inner").text();
		var HoraInicialMeridiem = HoraInicial.split(" ")[1];
		var HoraFinalMeridiem   = HoraFinal.split(" ")[1];
		
		var totalHours  = 0;
		var	HoraInicial = parseInt(HoraInicial);
		var	HoraFinal   = parseInt(HoraFinal);

		console.info(HoraInicialMeridiem);
		//console.info(HoraFinalMeridiem);
		if ( HoraInicial != HoraFinal){
			if ( HoraInicialMeridiem == "am" ){
				totalHours = 12 - HoraInicial + HoraFinal;
			}

			if ( HoraInicialMeridiem == "pm" || HoraFinalMeridiem == "pm" ){
					if ( HoraInicial > HoraFinal ){
						console.info( (HoraFinal+12) - HoraInicial);
					}
				totalHours = HoraFinal - HoraInicial;
			}
		}else{
			console.error("Las horas no pueden ser iguales");
			//return false;
		}*/

		//Constantes 
		var ocupation = 70 / 100;//horas reales de trabajo
		var absenteeism = 10 / 100; //Ausentismo
		var rotation = 10 / 100;
		var contactability = 45 / 100;
		var cargaPrestacional = 0.4353;
		var overhead = 45 / 100;
		var profit = 40 / 100;
		var EfectividadBase = 16 / 100;
		var Penalizacion    = 5 / 100;
		var objetivoEventos = 50 / 100;

		//bolsa de comisión
		var comitionInput = $("#input-bag-comition");
		var bag_comition = ( comitionInput.attr("disabled") == true ) ? 0 : (isNaN(comitionInput.val()) == true ) ? 0 : Math.floor(comitionInput.val()) ;
		//Auditoria
		var Auditoria_     = $("#check-auditoria");
		var auditoriaPrice = ( Auditoria_.prop("checked") == true ) ? 27900 : 0;
		//Grabaciones 
		var grabations_  = $("#check-grabations");
		var grabationsPrice = ( grabations_.prop("checked") == true ) ? 3257 : 0;
		//Variables recogidas en el formulario
		var peopleToCall   = ($("#persons-to-call").val() != "") ? $("#persons-to-call").val() : 0 ;
		var indexMarcation = 5;//Repetición de llamada
		var durationCall = ($("#duration-call").val() != "") ? $("#duration-call").val() : 0 ;//number 3.45
		var minutesToDay = 1440;//Minutos que hacen un día
		var somethingWrong = false;

		if ( isNaN(peopleToCall) == true) {
			console.info("Por favor ingresa un número válido");
		}
		else{
			var isMinu = durationCall.indexOf(":");//check minutes
				if ( isMinu != -1 ){
					//Convertimos los segundos a su porcentaje sobre 60Minutos: (ej: 45 = 75); 
					var durationCallTime = durationCall.toString();
					var durationCallTimeSplit = durationCall.split(":"),
						DurationCallSecond = parseInt(durationCallTimeSplit[1]);
					//Validar si las horas no son mayores a 24
					if( durationCallTimeSplit[0] >= 59 ){
						console.error("Ingresa un valor valido!");
							return false;
					}else{
					//Validar si los segundos no son mayores a 24
						if( DurationCallSecond <= 59){
								DurationCallSecondPercentage = ( 100 * DurationCallSecond ) / 60 ;
								durationCall = parseFloat(durationCall.replace(DurationCallSecond, DurationCallSecondPercentage).replace(":","."));
						}else{
							console.error("Ingresa un valor valido!");
							return false;
						}
					}
						
				}else{
					console.error("Los minutos no son validos");
					return false;
				}

		var startDate    = $("input#start-date").val(),
			endDate      = $("input#end-date").val(),
			HoursWorkByWeek = 8,
			totalDaysGestion = 0;

		//valor en bruto
		var productiveHoursPerAgent   = HoursWorkByWeek * ocupation;
		var minutosProductivosDiarios = productiveHoursPerAgent * 60;
			
			productiveHoursPerAgentSplit     = productiveHoursPerAgent.toString().split("."),
			productiveHoursPerAgentMinutes   = productiveHoursPerAgentSplit[1],
			productiveHoursPerAgenttoMinutes =( (productiveHoursPerAgentMinutes * 60) / 100).toString().replace(".","");

			productiveHoursPerAgent = productiveHoursPerAgent.toString().replace(productiveHoursPerAgentMinutes, productiveHoursPerAgenttoMinutes);

			if ( startDate.length != 0 && endDate.length != 0 ){
				if ( startDate !== endDate ){
					if ( endDate < startDate ){
						console.error("La fecha de finalización no puede ser mayor a la fecha de inicio");
					}else{
						var dayForWeek   = 7;
						var includeDays = [];
							
							$(".listDays li.day").each(function(){
								if ( $(this).hasClass("active") == true ){
									includeDays.push(true);
								}else{
									includeDays.push(false);
								}
							});

							var daysToInclude = includeDays.map(function (item, idx) { return item ? idx : -1; })
    											.filter(function (item) { return item >= 0; });

							var JstartDate = moment(startDate);
							var JendDate   = moment(endDate);

							//console.error( JstartDate.day() )

							var businessDays = moment().recur(JstartDate, JendDate).every(daysToInclude)//.daysOfWeek();
								console.warn(businessDays);
							var totalDaysGestion  = businessDays.all().length,
								diffHours  = Math.abs(JstartDate.diff(JendDate, 'hours')),
								diffWeeks  = Math.abs(JstartDate.diff(JendDate, 'weeks'));

							var totalHours = 8 * totalDaysGestion

							$("#days-inside-range").text(totalDaysGestion);
							$("#weeks-inside-range").text(diffWeeks);
							$("#total-hours-work").text(totalHours);

						//Dimensionamiento
							var first_part  = peopleToCall * indexMarcation * contactability,
								second_part = durationCall,//durationCall * minutesToDay,
								third_part 	= totalDaysGestion * minutosProductivosDiarios,
								fourth_part = (-absenteeism - rotation) + 1;

							var asesorsRequireds = ( (first_part*second_part) / ((third_part*fourth_part) * ocupation)).toFixed(1);
								
						//Financiero
						var _tmp_cargaPrestacional = 1+cargaPrestacional,//use Math.round
							costoNominaAgentes = ( totalDaysGestion * 34778 * asesorsRequireds )*( _tmp_cargaPrestacional ),//Desajuste de 10 pesos
							bolsaCommisiones   = ( $("input.bag-comition").prop("checked") != false && $("#input-bag-comition").val() != "") ? $("#input-bag-comition").val() : 0 , 
 							costoTotalNomina   = bolsaCommisiones / _tmp_cargaPrestacional + costoNominaAgentes,
 							overhead_          = overhead*costoTotalNomina //Desajuste de 5
 							profit_ 		   =  (costoTotalNomina + overhead_) * profit,
 							ingreso 		   =  costoTotalNomina + overhead_ + profit_,
 							IngresoXagente     = ingreso / asesorsRequireds;
 							CostoPorRegistro   = ingreso / peopleToCall;

 						var HorasLaborxDia  = asesorsRequireds * 8,
 							TotalHorasLabor = HorasLaborxDia * totalDaysGestion,
 							precioXHora      = ingreso / TotalHorasLabor;

 						//Resultados
 						var contactados      = Math.round(peopleToCall * contactability),
 							contactadosDaily = Math.round(contactados / totalDaysGestion),
 							efectivos        = Math.round(peopleToCall * EfectividadBase * (1 - Penalizacion)),
 							EfectivoDiario   = Math.round(efectivos / totalDaysGestion),
 							EfectivosActivados       = Math.round(efectivos * objetivoEventos),
 							EfectivosActivadosDiario = Math.round( EfectivosActivados / totalDaysGestion );

 						var tarifaVariable = 25000,
 								tarifaFee      = 60000,
 								grabaciones_nmb;

 						

	 						if ( peopleToCall > 499 ){
	 							grabaciones_nmb = Math.round( ((efectivos / 350) * tarifaVariable) + tarifaFee );
	 						}else{
	 							grabaciones_nmb =  Math.round( (efectivos / 350 ) * tarifaVariable);
	 						}
	 						var calcAudition = (asesorsRequireds/50) * 2800000;
							var	audition    = ( $("#check-auditoria").prop("checked") != true ) ? 0 :  calcAudition;
							var grabaciones = ( $("#check-grabations").prop("checked") != true ) ? 0 : grabaciones_nmb;
	 						var _totalParcial = ingreso + grabaciones + audition;
	 						var _iva   = _totalParcial * 0.19;
	 						var total_ = _totalParcial + _iva;
	 						
	 							
	 							$("#audition").find("b.value").text(fNumber.go(calcAudition, "$"));	
	 							$("#grabations").find(".value").text(fNumber.go(grabaciones_nmb,"$"));
	 					
 							//console.info("contactados",contactados);
 							//console.info("contactadosDaily",contactadosDaily);
 							//console.info("efectivos",efectivos);
 							//console.info("EfectivoDiario",EfectivoDiario);
 							//console.info("EfectivosActivados",EfectivosActivados);
 							//console.info("EfectivosActivadosDiario",EfectivosActivadosDiario);
 							console.clear();
 								console.warn("%c#########","color:orange; font-size:22px;");
	 								console.info("Asesores Requeridos", asesorsRequireds);
	 								console.info("costoNominaAgentes",  fNumber.go(Math.round(costoNominaAgentes ),"$"));
	 								console.info("Bolsa Comisiones",  fNumber.go(Math.round(bolsaCommisiones ),"$"));
	 								console.info("costo Total Nomina",  fNumber.go(Math.round(costoTotalNomina ),"$"));
	 								console.info("overhead_",  fNumber.go(Math.round(overhead_ ),"$"));
	 								console.info("profit_",  fNumber.go(Math.round(profit_ ),"$"));
	 								console.info("ingreso",  fNumber.go(Math.round(ingreso ),"$"));
	 								console.info("Ingreso x agente",  fNumber.go(Math.round(IngresoXagente),"$"));
	 								console.info("Costo x Registro",  fNumber.go(Math.round(CostoPorRegistro),"$"));
	 								console.error( "precioXHora",  fNumber.go(Math.round(precioXHora ),"$"));

	 								console.info("grabaciones",  fNumber.go(Math.round(grabaciones),"$"));
 									console.warn("Auditoria_",  fNumber.go(Math.round(audition),"$"));
 									
 									console.warn("SubTotal",  fNumber.go(Math.round(_totalParcial),"$"));
 									console.warn("Iva",   fNumber.go( Math.round(_iva) ,"$"));
 									console.warn("total_",  fNumber.go( Math.round(total_),"$"));
	 							console.warn("%c#########","color:orange; font-size:22px;");
					}
				}else{
					console.warn("las fechas son iguales");
				}
			}

		}//fin del if else principal
	});
})

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
                    return this.simbol+''+ splitLeft + splitRight;
                },
                go:function(num, simbol){
                    this.simbol = simbol ||'';
                    return this.formatear(num);
                }
            }
