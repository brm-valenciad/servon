var total = 0, total_, summaryCarData;

/*Formatear las fechas actuales*/
	Date.prototype.toDateInputValue = (function() {
	    var local = new Date(this);
	    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	    return local.toJSON().slice(0,10);
	});

	Date.prototype.toDateInputValueEnd = (function() {
	    var local = new Date(this);
	    	local.setDate(local.getDate() + 1);
	    return local.toJSON().slice(0,10);
	});

    $('#start-date').val(new Date().toDateInputValue()).attr("min", new Date().toDateInputValue());
    $('#end-date').val( new Date().toDateInputValueEnd() ).attr("min", new Date().toDateInputValueEnd());

$(document).ready(function(){
	var times = [ 
			"2:00", "2:15", "2:30",  "2:45", 
			"3:00", "3:15", "3:30", "3:45",
			"4:00", "4:15", "4:30", "4:45",
			"5:00", "5:15", "5:30", "5:45",
			"6:00", "6:15", "6:30", "6:45",
			"7:00", "7:15", "8:30", "9:45",
			"10:00", "10:15", "10:30",  "10:45",
			"11:00", "11:15",  "11:30", "11:45", 
			"12:00", "12:15", "12:30", "12:45", 
			"13:00", "13:15", "13:30",  "13:45",
			"14:00", "14:15",  "14:30", "14:45", 
			"15:00", "15:15", "15:30", "15:45",
			"16:00", "16:15", "16:30",  "16:45", 
			"17:00", "17:15", "17:30", "17:45",
			"18:00", "18:15", "18:30", "18:45",
			"19:00", "19:15", "19:30", "19:45",
			"20:00", "20:15", "20:30", "20:45",
			"21:00", "21:15", "21:30", "21:45",
			"22:00", "22:15", "22:30",  "22:45",
			"23:00", "23:15",  "23:30", "23:45", 
			"24:00", "24:15", "24:30", "24:45", 
			"25:00", "25:15", "25:30",  "25:45",
			"26:00", "26:15",  "26:30", "26:45", 
			"27:00", "27:15", "27:30", "27:45",
			"28:00", "28:15", "28:30",  "28:45",
			"29:00", "29:15",  "29:30", "29:45", 
			"30:00", "30:15", "30:30", "30:45",
			];

	function populateTimeToCall(){
		for (var i = 0; i <= times.length; i++) {
			var option_ = $("<option/>");
			if ( i == 0){ option_.attr("selected")}
				option_.val(times[i]);
			    option_.text(times[i]);

			$("#duration-call").append(option_);
		};
	}

	populateTimeToCall();

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
			       					if ( res[i].zona_horaria.value.indexOf("Colombia") != -1 ){
			       						option_.attr("selected","selected");
			       					}
			       				$("#time-zone-tmk").append(option_);
		       				};
		       			}
		       			else if ( res[0].start_hour != undefined ) {
		       				for (var i = 0; i <= res.length - 1; i++) {
		       					if ( res[i].start_hour ){
		    						var startDate_ = res[i].start_hour.value +" "+ res[i].start_meridiem.value;
		    						var val_ = convertTime12to24(startDate_);
		       						var option_ = $("<option/>");
			       						if ( val_ == "8:00"){
			       							option_.attr("selected","selected")	
			       						}
		       							option_.val( val_ );
			       						option_.text(startDate_);
			       						$("#start-time-journal").append(option_);
		       					}

		       					if ( res[i].end_hour ){
		       						var startDate_ = res[i].end_hour.value +" "+ res[i].end_meridiem.value;
		       						var val_ = convertTime12to24(startDate_);
		       						var option_ = $("<option/>");
		       							if ( val_ == "18:00"){
			       							option_.attr("selected","selected")	
			       						}
		       							option_.val( val_ );
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
				$('select.outline').not(".basic").selectpicker();
			},2000);
	}


	function convertTime12to24(time12h) {
	  const [time, modifier] = time12h.split(' ');

	  let [hours, minutes] = time.split(':');

	  if (hours === '12') {
	    hours = '00';
	  }

	  if (modifier === 'pm') {
	    hours = parseInt(hours, 10) + 12;
	  }

	  return hours + ':' + minutes;
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

	function errorCalculator(text){
		$("#totalFlotanteOm").removeClass("d-none").find("h3").text(text);
		$("#totalFlotanteOm").find(".bg-success").addClass("alerterror");
	}

	$("body").on("change blur click keyup","input[type='date'], input, div.filter-option, a.selected, select, .day", function(){
		//console.info("Faltan jorandas laborales");
		var InicioJornada      = parseInt($("#start-time-journal").val().replace(":",".")),
			FinJornada         = parseInt($("#end-time-journal").val().replace(":",".")),
			HorasDeTrabajoXdia = ( InicioJornada != FinJornada ) ?  Math.abs( InicioJornada - FinJornada ): 12;

			if ( InicioJornada > FinJornada){
				errorCalculator("La hora de inicio no puede ser mayor a la hora de salida");
				return false;
			}

		var TipoDeServicio = $("#service-type-tmk").val();
		//Constantes 
		var ocupation = 70 / 100;//horas reales de trabajo
		var absenteeism = 10 / 100; //Ausentismo
		var rotation = 10 / 100;
		var contactability = 45 / 100;
		var cargaPrestacional = 0.4353;
		var overhead = 45 / 100;
		var profit = 40 / 100;
		var EfectividadBase   = 16 / 100;
		var Penalizacion      = 5 / 100;
		var objetivoEventos   = 50 / 100;
		var horasLaborXAgente = 8;
 
		//bolsa de comisión
		var comitionInput = $("#input-bag-comition");
			bag_comition_value  = comitionInput.val();
			bag_comition  = ( bag_comition_value.indexOf(".") != -1 ) ? bag_comition_value.replace(/\./g,'') : bag_comition_value;

		if( isNaN(bag_comition) == false ){
			comitionInput.val( new Intl.NumberFormat("de-DE").format(bag_comition) );			
		}else{ comitionInput.val(0); }
		
		//Auditoria
		var Auditoria_     = $("#check-auditoria");
		var auditoriaPrice = ( Auditoria_.prop("checked") == true ) ? 27900 : 0;
		//Grabaciones 
		var grabations_     = $("#check-grabations");
		var grabationsPrice = ( grabations_.prop("checked") == true ) ? 3257 : 0;

		//Variables recogidas en el formulario
		var ZonaHoraria       = $("#time-zone-tmk").val();
		var peopleToCallInput = $("#persons-to-call");
		var peopleAmountValueCurrency =  peopleToCallInput.val();
			peopleAmount = ( peopleAmountValueCurrency.indexOf(".") != -1 ) ? peopleAmountValueCurrency.replace(/\./g,'') : peopleAmountValueCurrency;

		if ( isNaN(peopleAmount) == false ){
			peopleToCallInput.val(new Intl.NumberFormat("de-DE").format(peopleAmount))
		}else{
			peopleToCallInput.val(300);
		}

		var peopleToCall   = ( peopleAmount != "" ) ? peopleAmount : 0 ;
		var indexMarcation = 5;//Repetición de llamada
		var durationCall = ($("#duration-call").val() != "") ? $("#duration-call").val() : 0 ;//number 3.45
		var minutesToDay = 1440;//Minutos que hacen un día
		var somethingWrong = false;//NO SIRVE

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
			totalDaysGestion = 0;

		//valor en bruto
		var productiveHoursPerAgent   = horasLaborXAgente * ocupation;
		var minutosProductivosDiarios = productiveHoursPerAgent * 60;
			
			productiveHoursPerAgentSplit     = productiveHoursPerAgent.toString().split("."),
			productiveHoursPerAgentMinutes   = productiveHoursPerAgentSplit[1],
			productiveHoursPerAgenttoMinutes =( (productiveHoursPerAgentMinutes * 60) / 100).toString().replace(".","");

			productiveHoursPerAgent = productiveHoursPerAgent.toString().replace(productiveHoursPerAgentMinutes, productiveHoursPerAgenttoMinutes);

			if ( startDate.length != 0 && endDate.length != 0 ){
				if ( startDate !== endDate ){
					if ( endDate < startDate ){
						errorCalculator("La fecha de finalización no puede ser mayor a la fecha de inicio");
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

							var businessDays = moment().recur(JstartDate, JendDate).every(daysToInclude).daysOfWeek();

							var totalDaysGestion  = businessDays.all().length,
								diffHours  = Math.abs(JstartDate.diff(JendDate, 'hours')),
								diffWeeks  = Math.abs(JstartDate.diff(JendDate, 'weeks'));

							var totalHours = HorasDeTrabajoXdia * totalDaysGestion

							$("#days-inside-range").text(totalDaysGestion);
							$("#days-to-work").text(totalDaysGestion);
							$("#weeks-inside-range").text(diffWeeks);
							$("#total-hours-work").text(totalHours);
							$("#hours-to-Work").text( HorasDeTrabajoXdia );

						//Dimensionamiento
							var first_part  = peopleToCall * indexMarcation * contactability,
								second_part = durationCall,//durationCall * minutesToDay,
								third_part 	= totalDaysGestion * minutosProductivosDiarios,
								fourth_part = (-absenteeism - rotation) + 1;

							var asesorsRequireds = ( (first_part*second_part) / ((third_part*fourth_part) * ocupation));
						//Financiero
						var _tmp_cargaPrestacional = 1+cargaPrestacional,//use Math.round
							costoNominaAgentes = ( totalDaysGestion * 34778.12 * asesorsRequireds ) * ( _tmp_cargaPrestacional ),
							bolsaCommisiones   = ( $("input.bag-comition").prop("checked") != false && $("#input-bag-comition").val() != "") ? bag_comition : 0, 
 							costoTotalNomina   = bolsaCommisiones / _tmp_cargaPrestacional + costoNominaAgentes,
 							overhead_          = overhead*costoTotalNomina //Desajuste de 5
 							profit_ 		   = (costoTotalNomina + overhead_) * profit,
 							ingreso 		   = costoTotalNomina + overhead_ + profit_,
 							IngresoXagente     = ingreso / asesorsRequireds;
 							CostoPorRegistro   = ingreso / peopleToCall;

 							/*console.error("totalDaysGestion", totalDaysGestion);
 							console.error("3477812", 3477812);
 							console.error("asesorsRequireds", asesorsRequireds);
 							console.error("_tmp_cargaPrestacional", _tmp_cargaPrestacional);

 							/*console.error("_tmp_cargaPrestacional", _tmp_cargaPrestacional);
 							console.error("totalDaysGestion", totalDaysGestion);
 							console.error("34778", 34778);
 							console.error("asesorsRequireds", asesorsRequireds);

 							console.error("costoNominaAgentes", costoNominaAgentes);
 							console.error("bolsaCommisiones", bolsaCommisiones);
 							console.error("costoTotalNomina", costoTotalNomina);*/

 						var HorasLaborxDia  = asesorsRequireds * horasLaborXAgente,
 							TotalHorasLabor = HorasLaborxDia * totalDaysGestion,
 							precioXHora     = ingreso / TotalHorasLabor;

 						//Resultados
 						var contactados      = peopleToCall * contactability,
 							contactadosDaily = contactados / totalDaysGestion,
 							efectivos        = peopleToCall * EfectividadBase * (1 - Penalizacion),
 							EfectivoDiario   = efectivos / totalDaysGestion,
 							EfectivosActivados       = efectivos * objetivoEventos,
 							EfectivosActivadosDiario =  EfectivosActivados / totalDaysGestion;

 						var tarifaVariable = 25000,
 							tarifaFee  = 60000,
 							grabaciones_nmb;
 						
	 						if ( peopleToCall > 499 ){
	 							grabaciones_nmb = ((efectivos / 350) * tarifaVariable) + tarifaFee;
	 						}else{
	 							grabaciones_nmb = (efectivos / 350 ) * tarifaVariable;
	 						}
	 						var calcAudition = ( asesorsRequireds / 50) * 2800000;
							var	audition    = ( $("#check-auditoria").prop("checked") != true ) ? 0 :  calcAudition;
							var grabaciones = ( $("#check-grabations").prop("checked") != true ) ? 0 : grabaciones_nmb;

	 						var _totalParcial = ingreso + grabaciones + audition;
	 						var _iva   = _totalParcial * 0.19;
	 							total_ = Math.round(_totalParcial + _iva);
	 						
	 							$("#audition").find("b.value").text(fNumber.go(Math.round(calcAudition), "$"));	
	 							$("#grabations").find(".value").text(fNumber.go(Math.round(grabaciones_nmb),"$"));

 						summaryCarData = {
	 								tipoDeServicio: TipoDeServicio,
	 								personasAllamar: peopleToCall,
	 								duracionLlamada: $("#duration-call").val(),
	 								fechaInicio: startDate,
	 								fechaFinal: endDate,
	 								ZonaHoraria: ZonaHoraria, 
	 								diasGestion: totalDaysGestion,
	 								jornada: "Horas",
	 								bolsaCommisiones: fNumber.go(   Math.round(bolsaCommisiones) ,"$" ),
	 								grabaciones: fNumber.go(Math.round(grabaciones),"$"),
	 								audition: fNumber.go( Math.round(audition) , "$"),
	 								asesoresRequeridos: asesorsRequireds.toFixed(1),
	 									resultados:{
	 										contactados: contactados,
	 										contactadosDiarios: contactadosDaily,
	 										efectivos: efectivos,
	 										EfectivoDiario: EfectivoDiario,
	 										EfectivosActivados: EfectivosActivados,
	 										EfectivosActivadosDiario : EfectivosActivadosDiario
	 									},
		 								financiero: {
		 									costoNominaAgentes: fNumber.go(Math.round(costoNominaAgentes ),"$"),
		 									costoTotalNomina: fNumber.go(Math.round(costoTotalNomina ),"$"),
		 									overhead: fNumber.go(Math.round(overhead_ ),"$"),
		 									profit: fNumber.go(Math.round(profit_ ),"$"),
		 									ingreso: fNumber.go(Math.round(ingreso ),"$"),
		 									ingresoXagente: fNumber.go(Math.round(IngresoXagente),"$"),
		 									costoXregistro: fNumber.go(Math.round(CostoPorRegistro),"$"),
		 									precioXHora: fNumber.go(Math.round(precioXHora ),"$"),
		 								},
		 								costos: {
		 									subTotal: fNumber.go(Math.round(_totalParcial ,"$")),
		 									iva: fNumber.go( Math.round(_iva) ,"$"),
		 									total: fNumber.go( total_ ,"$")
		 								}
 							}

 							/*console.clear();
 								console.warn("%c#########","color:orange; font-size:22px;");
	 								//console.info("Asesores Requeridos", asesorsRequireds.toFixed(1) );
	 								//console.info("costoNominaAgentes",  fNumber.go(Math.round(costoNominaAgentes ),"$"));
	 								//console.error("costoNominaAgentes",  fNumber.go(costoNominaAgentes,"$"));
	 								//console.info("Bolsa Comisiones",  fNumber.go(Math.round(bolsaCommisiones ),"$"));
	 								//console.info("costo Total Nomina",  fNumber.go(Math.round(costoTotalNomina ),"$"));
	 								//console.info("overhead_",  fNumber.go(Math.round(overhead_ ),"$"));
	 								//console.info("profit_",  fNumber.go(Math.round(profit_ ),"$"));
	 								//console.info("ingreso",  fNumber.go(Math.round(ingreso ),"$"));
	 								//console.info("Ingreso x agente",  fNumber.go(Math.round(IngresoXagente),"$"));
	 								//console.info("Costo x Registro",  fNumber.go(Math.round(CostoPorRegistro),"$"));
	 								//console.error( "precioXHora",  fNumber.go(Math.round(precioXHora ),"$"));

	 								//console.info("grabaciones",  fNumber.go(Math.round(grabaciones),"$"));
 									//console.warn("Auditoria_",  fNumber.go( Math.round(audition) ,"$"));
 									
 									//console.warn("SubTotal",  fNumber.go(_totalParcial ,"$"));	
 									//console.warn("SubTotal",  fNumber.go(Math.round(_totalParcial),"$"));
 									//console.warn("Iva",   fNumber.go( Math.round(_iva) ,"$"));
 									//console.warn("total_",  fNumber.go( total_ ,"$"));
 									console.error(summaryCarData);
	 							console.warn("%c#########","color:orange; font-size:22px;");*/
							
	 							total = fNumber.go( total_ ,"$");

	 								if ( isNaN(total_) == false ){
											fillSummaryCar_( summaryCarData)
	 									$(".total_inversion").text(total);
	 									$(".summary-car").removeClass("d-none");
	 									$("#totalFlotanteOm").find(".bg-success").removeClass("alerterror");
	 									$("#totalFlotanteOm").removeClass("d-none").find("h3").text(total).attr("style","");
	 								}else{
	 									$("#totalFlotanteOm").addClass("d-none").find("h3").text(0);
	 									$(".summary-car").addClass("d-none");
	 									errorCalculator("Ha ocurrido un error con los datos");
	 								}
					}
				}else{
					errorCalculator("Las fechas no pueden ser iguales");
				}
			}

		}//fin del if else principal
	});
})
//llenar resumen de la compra
function fillSummaryCar_(data){
	var CtypeService_ = $("#car-type-service"),
 		CpeoleCall_   = $("#people-to-call-car"),
 		CdurationCall = $("#call-duration-car"),
 		CstartService = $("#start-service-car"),
 		CendService   = $("#end-service-car"),
 		CTimeZone     = $("#time-zone-car"),
 		CdaysActivity = $("#activity-days-car"),
 		CjornadaLabor = $("#laboral-journal-car"),
 		CbagComition  = $("#bag-comition-car"),
 		Cgrabationc   = $("#bag-grabation-car"),
 		Cauditoria_   = $("#bag-auditoria-car");

 		CtypeService_.find("h5").text( data.tipoDeServicio );
 		CpeoleCall_.find("h5").text( data.personasAllamar );
 		CdurationCall.find("h5").text( data.duracionLlamada );
 		CstartService.text( data.fechaInicio );
 		CendService.text( data.fechaFinal );
 		CTimeZone.text( data.ZonaHoraria );
 		CdaysActivity.find("h5").text( data.diasGestion );
 		CjornadaLabor.text( data.jornada );
		CbagComition.find("span").text( data.bolsaCommisiones );
		Cgrabationc.find("span").text( data.grabaciones );
		Cauditoria_.find("span").text( data.audition );
}
//Llenar formulario para insertar dentro de OMOLDS
function fillFormInsert(){
	var financiero_  = "<h6>Financiero</h6>";
		financiero_ += "Costo Nomina Agentes: "+ summaryCarData.financiero.costoNominaAgentes + "<br>";
		financiero_ += "Costo Total Nomina: "+ summaryCarData.financiero.costoTotalNomina + "<br>";
		financiero_ += "Costo Por registro: "+ summaryCarData.financiero.costoXregistro + "<br>";
		financiero_ += "Ingreso: "+ summaryCarData.financiero.ingreso + "<br>";
		financiero_ += "Ingreso Por Agente: "+ summaryCarData.financiero.ingresoXagente + "<br>";
		financiero_ += "Overhead: "+ summaryCarData.financiero.overhead + "<br>";
		financiero_ += "Precio por Hora: "+ summaryCarData.financiero.precioXHora + "<br>";
		financiero_ += "Profit: "+ summaryCarData.financiero.profit + "<br>";
		financiero_ += "<br>:::::::::::::::::::::<br>";
		financiero_ += "SubTotal: "+ summaryCarData.costos.subTotal + "<br>";
		financiero_ += "Iva: "+ summaryCarData.costos.iva + "<br>";
		financiero_ += "Total: "+ summaryCarData.costos.total + "<br>";

	//console.error(summaryCarData);
	//console.error(financiero_);

	$("#OMOLDS_REFERENCECODE").val( summaryCarData.referenceCode );
	$("#OMOLDS_SERVICETYPE").val( summaryCarData.tipoDeServicio );
	$("#OMOLDS_PEOPLETOCALL").val( summaryCarData.personasAllamar );
	$("#OMOLDS_DURATIONOCALL").val( summaryCarData.duracionLlamada );
	$("#OMOLDS_SERVICEDATE").val( "Fecha Inicial: "+ summaryCarData.fechaInicio +" <br> Fecha Final: "+ summaryCarData.fechaFinal );
	$("#OMOLDS_ACTIVITYDAYS").val(summaryCarData.diasGestion);
	$("#OMOLDS_BAGCOMITION").val(summaryCarData.bolsaCommisiones);
	$("#OMOLDS_GRABATIONS").val( summaryCarData.grabaciones );
	$("#OMOLDS_AUDITIONS").val( summaryCarData.audition );
	$("#OMOLDS_CONSULTANTS").val( summaryCarData.asesoresRequeridos );
	$("#OMOLDS_FINANCIALSUMMARY").val( financiero_ );
	$('#formPayu').submit();
}

	$('#formPayu').submit(function( event ) {
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
	            	var input_ = $("<input/>");
	                        input_.attr("name", "extra3");
	                        input_.attr("type", "hidden");
	                        input_.val(response.id);
	                        $(".pay").append(input_);
	                        console.error("No puedo hacer exposicion");
	            	$(".pay").submit();
	            }else{
	            	alert("Ha ocurrido un fallo al guardar los datos");
	            }
	        });
    });


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

//Click en aceptar terminos
$("body").on("click", "#termsConditions", function(event){
    if ( total != 0 && $("#email").val() != ''){
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

     function validEmail(email){
      var pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if( email.match(pattern) )
            return true;
        else
            return false;
    }



/*Funcion para pagos*/
   	$("body").on("click","#pay", function(event){
            event.preventDefault();
            	
                if ( total == 0 || $( "#termsConditions").prop("checked") == false ){
                    alert("Debes seleccionar todos los datos previos");
                    return false;
                }
                else if ( $("#email").val() == '' || validEmail($("#email").val()) == false ) {
                    alert("Asegurate de ingresar un email correcto");
                    return false;
                }
                else{
                    var d = new Date(), n = d.getTime();
                    var reference  = "TMK-"+n,
                    	merchantId = "677879", 
                    	hash = md5("wns266ZHs6P8KNk08Mu531qWB6~"+merchantId+"~"+reference+"~"+total_+"~COP");

                    summaryCarData.referenceCode = reference;

	                  var dataPayLatam = [
		                    { name: "merchantId", value: merchantId },
		                    { name: "accountId", value:"760061" },
		                    { name: "description", value:"Pago TMK - Servon.com.co" },
		                    { name: "referenceCode", value:reference },
		                    { name: "amount", value: total_ },
		                    { name: "tax", value:"0" },
		                    { name: "taxReturnBase", value:"0" },
		                    { name: "currency", value:"COP" },
		                    { name: "signature", value:hash },
		                    { name: "test", value:"0" },
		                    { name: "responseUrl", value:"https://www.servon.com.co/web/index/response/" },
		                    { name: "confirmationUrl", value:"https://www.servon.com.co/web/index/returnpayment/" },
	                    ];
	                    for (var i = 0; i <= dataPayLatam.length - 1; i++) {
	                        var input_ = $("<input/>");
	                             input_.attr("name", dataPayLatam[i].name);
	                             input_.attr("type", "hidden");
	                             input_.val(dataPayLatam[i].value);
	                        $(".pay").append(input_);
	                    };
	                fillFormInsert(); 
                }
        }); 

console.info("aja 2!!");
