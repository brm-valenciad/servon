<?php 
        $CssModulo = '
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.2/css/bootstrap-select.min.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"> 
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700">
        <link rel="stylesheet" href="https://omolds.github.io/assets/css/clientes/bootstrapServOn.css?8">
        <link rel="stylesheet" href="https://omolds.github.io/assets/css/cssOmoldsMigracion.css?16">
        <link rel="shortcut icon" href="https://omolds.github.io/assets/images/sitom/servon/favicon.png?2">
        <link rel="stylesheet" href="https://brm-valenciad.github.io/servon/general.css">
        <link rel="stylesheet" href="https://brm-valenciad.github.io/servon/infraestructura/tmk.css">
        <link rel="stylesheet" href="https://brm-valenciad.github.io/servon/calculadora/calculadora.css">';
?>

 <div class="container-fluid p-0 m-0 fixed-top bg-white" id="headerOm" style="font-size: 0.9em;font-family: Montserrat, sans-serif;">
        <div class="row p-0 m-0">
            <div class="col-lg-11 p-0 m-0 bg-white p-2"><a href="index.html"><img class="img-fluid mx-auto d-block" src="https://omolds.github.io/assets/images/sitom/servon/logoServon.png" style="height:85px;"></a></div>
        </div>
        <div class="row">
            <div class="col">
                <nav class="navbar navbar-light navbar-expand-md sticky-top bg-light shadow">
                    <div class="container-fluid"><button class="navbar-toggler mx-auto text-primary" data-toggle="collapse" data-target="#navcol-2"><a href="#"><i class="fa fa-bars"></i></a><span class="sr-only">Toggle navigation</span></button>
                        <div class="collapse navbar-collapse"
                            id="navcol-2">
                            <ul class="nav navbar-nav mr-auto" id="menu-header"></ul>
                            <ul class="nav navbar-nav d-none ml-auto" id="login">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" href="formulario.html" data-toggle="modal" data-target="#modalCrearCuenta">
                                        <p class="p-0 m-0"><i class="fa fa-key"></i> Registro<br></p>
                                    </a>
                                </li>
                                <li class="nav-item border-left" role="presentation">
                                    <a class="nav-link" href="formulario.html" data-toggle="modal" data-target="#modalLogin">
                                        <p class="p-0 m-0"><i class="fa fa-user-circle-o"></i> Login<br></p>
                                    </a>
                                </li>
                            </ul>
                            <ul class="nav navbar-nav ml-auto" id="Usuario_registrado">
                                <li class="dropdown"><a class="dropdown-toggle nav-link dropdown-toggle font-weight-bold" data-toggle="dropdown" aria-expanded="false" href="#"><strong>Bienvenido Cliente Default</strong></a>
                                    <div class="dropdown-menu" role="menu"><a class="dropdown-item" role="presentation" href="loginHome.html">Administrador<p>de campañas</p></a><a class="dropdown-item d-flex justify-content-between align-items-center" role="presentation" href="#">Cerrar<i class="fa fa-close"></i></a></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row p-0 m-0 d-none" id="totalFlotanteOm" style="box-shadow:0px 0px 10px #000;">
            <div class="col p-0 m-0 bg-success">
                <h3 class="text-center text-white p-0 m-0 p-3">TOTAL: $100.000.000 COP<br></h3>
            </div>
        </div>
    </div>


    <section id="banner_prin" class="mt-5 pt-5">
        <div class="container-fluid">
            <div class="row justify-content-center pt-5" style="background-image: url('https://servon.com.co/index/viewArchive/905/archivo_imagen');background-position: center;background-size: cover;background-repeat: no-repeat;">
                <div class="col-xl-11">
                    <div class="container">
                        <div class="row p-0 m-0" style="background-size: cover;height: auto;background-repeat: no-repeat;background-position: bottom;">
                            <div class="col-12 col-sm-12 col-md-9 col-lg-6 col-xl-7 p-0 m-0 pl-3">
                                <h1 class="text-left text-white p-0 m-0 pt-3 pb-3 display-5" style="font-weight:bold;">GRANDES <br>SERVICIOS</h1>
                                <p class="text-left text-white"><strong>Acceda a todos los servicios de su propio agente de Telemarketing </strong><span>(TMK)</span><strong> y personalice las campañas o configure la </strong><span>Infraestructura </span><strong>que necesita su operación y logre los resultados que desea, todo desde su computador o dispositivo móvil. </strong><br></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div id="infoTmk" class="mt-3 mb-3"><a class="btn btn-info btn-block btn-lg" data-toggle="collapse" aria-expanded="false" aria-controls="collapse-1" role="button" href="#collapse-1">Conoce de TMK </a>
        <div class="collapse" id="collapse-1">
            <section id="tmk-info" class="mt-3">
                <div class="container-fluid bg-primary p-3">
                    <div class="row justify-content-center">
                        <div class="col-xl-11">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-lg-5 col-xl-4">
                                        <h3 class="text-center text-white"><i class="fa fa-users"></i> TMK AL INSTANTE</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container pt-2 pb-2">
                    <div class="row justify-content-center">
                        <div class="col-xl-11">
                            <div class="row">
                                <div class="col-xl-12">
                                    <p class="text-secondary">Contacte a toda su base de datos a través de agentes especializados, solo por el tiempo que requiera y para lo que necesite, somo expertos en los siguientes tipos de campañas:<br></p>
                                </div>
                                <div class="col pb-2"><img class="img-fluid" src="https://www.servon.com.co/index/viewArchive/16/archivo_imagen"></div>
                                <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex flex-column justify-content-between">
                                    <ul class="text-secondary" style="font-weight:300;">
                                        <li>Ventas</li>
                                        <li>Informativas</li>
                                        <li>Fidelización</li>
                                        <li>Confirmación de eventos</li>
                                        <li>Lanzamientos</li>
                                        <li>Actualización de datos</li>
                                        <li>Mistery shopper</li>
                                    </ul><a class="btn btn-primary btn-block text-white mt-3 mb-3" role="button" href="cotizadorTmk.html#calculadora">CREAR MI COTIZACIÓN</a></div>
                            </div>
                            <div class="row mt-4">
                                <div class="col">
                                    <h5 class="text-primary font-weight-bold">CONOCE MÁS ACERCA DE LOS SERVICIOS ADICIONALES:</h5>
                                </div>
                                <div class="col-12 mx-auto mt-2">
                                    <div>
                                        <ul class="nav nav-tabs nav-fill">
                                            <li class="nav-item"><a class="nav-link active" role="tab" data-toggle="tab" href="#tab-3">Módulo Grabación</a></li>
                                            <li class="nav-item"><a class="nav-link" role="tab" data-toggle="tab" href="#tab-4">Módulo Calidad</a></li>
                                            <li class="nav-item"><a class="nav-link" role="tab" data-toggle="tab" href="#tab-1">Módulo Bolsa de comisión</a></li>
                                        </ul>
                                        <div class="tab-content">
                                            <div class="tab-pane fade text-black-50 p-3" role="tabpanel" id="tab-1">
                                                <p class="text-justify" style="font-weight:300;">Motivar a la fuerza comercial: Los equipos ven este tipo de compensación variable como una oportunidad de crecimiento y ayuda a la motivación para alcanzar las metas mas retadoras. Define tu presupuesto
                                                    y en conjunto construimos las tablas mas eficientes</p>
                                            </div>
                                            <div class="tab-pane fade text-black-50 p-3" role="tabpanel" id="tab-2">
                                                <p class="text-justify" style="font-weight:300;">El módulo supervisor es una herramienta de gestión online específicamente diseñada para Jefes de Servicio o Supervisores.<br><br>Permite implementar rápida y fácilmente reglas de negocio para llevar un control
                                                    efectivo de la operación, la herramienta se maneja mediante una interfaz altamente intuitiva y fácil de usar, incorpora un amplio rango de informes históricos y en tiempo real, proporcionando un control
                                                    total de la gestión de la plataforma Contact Center. <br><br>El módulo puede instalarse como aplicación de escritorio y como aplicación web, lo que permite la posibilidad de un monitoreo remoto en tiempo
                                                    real.<br></p>
                                            </div>
                                            <div class="tab-pane fade show active text-black-50 p-3" role="tabpanel" id="tab-3">
                                                <p class="text-justify" style="font-weight:300;">El módulo de grabación constituye una plataforma de grabación fácil de usar y mantener, que permite realizar grabaciones por requerimiento de calidad, como prueba contractual o requisito legal. La aplicación
                                                    de gestión dispone de una potente consola de búsqueda y reproducción de grabaciones que permite definir y memorizar filtros. <br><br>Estos filtros pueden incluir información de negocio relacionada con
                                                    la llamada o cliente gestionado de la siguiente manera: Las grabaciones puedan ser realizadas cuando sea necesarias, ya sean automatizadas bajo plan o activadas bajo demanda (lanzado manualmente por
                                                    el agente o automáticamente por una aplicación externa)El sistema garantiza que las grabaciones son almacenadas de forma segura y que esta seguridad se mantenga incluso si es almacenada en otros medios
                                                    físicos (por ejemplo: cintas backup, DVDs, etc.)<br><br>La solución dispone de un control de acceso a las grabaciones. Sólo el personal autorizado debe tener acceso a reproducir y/o exportar grabaciones.El
                                                    módulo mantiene un registro detallado de reproducción y exportación por parte de los usuarios autorizados.<br></p>
                                            </div>
                                            <div class="tab-pane fade text-black-50 p-3" role="tabpanel" id="tab-4" style="font-weight:300;">
                                                <p style="font-weight:300;">La auditoria les proporciona análisis, evaluaciones, recomendaciones, asesoría e información concerniente a las actividades revisadas.<br></p>
                                                <ul class="list-group">
                                                    <li class="list-group-item"><span style="font-weight:300;">Verificar las condiciones de la operación y los procesos que siguen los agentes.</span></li>
                                                    <li class="list-group-item"><span style="font-weight:300;">Verificar las metodologías para brindar la información y el registro de los interacciones en el sistema.</span></li>
                                                    <li class="list-group-item"><span style="font-weight:300;">Verificar que las interacciones realizadas estén bajo los parámetros establecidos por cada cliente y así evitar reclamaciones. </span></li>
                                                    <li class="list-group-item"
                                                        style="font-weight:300;"><span>El enfoque del área de auditoría está diseñado para alcanzar los requisitos y objetivos de la operación, del cliente y del usuario final. </span></li>
                                                    <li class="list-group-item" style="font-weight:300;"><span>Debe garantizar la correcta ejecución de los procesos, apuntando al cumplimiento de los KPIs establecidos para FCR, RUN, Contact Rate, Ventas y rentabilidad.</span></li>
                                                </ul>
                                                <h3 class="text-primary bg-light p-3">Puntos auditables</h3>
                                                <ul>
                                                    <li>Calificación dada al registro en la llamada.<br></li>
                                                    <li>Ingreso de información al sistema.<br></li>
                                                    <li>Captura de datos requeridos.<br></li>
                                                    <li>Manejo de objeciones.<br></li>
                                                    <li>Conocimiento de la campaña.<br></li>
                                                    <li>Suministro de información al cliente.<br></li>
                                                    <li>Búsqueda de datos de contacto adicionales.<br></li>
                                                    <li>Seguimiento de guión.<br></li>
                                                    <li>Lenguaje apropiado.<br></li>
                                                    <li>Trato al cliente.<br></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <section id="calculadora" class="mb-4">
        <div class="container-fluid">
            <div class="row bg-primary p-3">
                <div class="col">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h3 class="text-white font-weight-bold">¿CUÁNTOS TMK NECESITA?</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row bg-success p-3">
                <div class="col">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <p class="text-white p-0 m-0" style="font-weight:300;">A través de este cotizador podrá realizar el cálculo con tipo de servicio que requiera según su necesidad. 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 <!--Inicio Calculadora-->
    <section id="contenedoCalculadora" class="mt-4 mb-4">
        <div class="container">

            <form class="calculator">
                <div class="module row">
                    <div class="form-group col-xs-12 col-sm-4">
                        <label>Tipo de servicio:</label>
                            <select class="form-control outline" id="service-type-tmk"></select>
                    </div>

                    <div class="form-group col-xs-12 col-sm-4">
                        <label>Número de personas a Llamar:</label>
                        <input type="text" class="form-control outline" id="persons-to-call" placeholder="1.000" value="300"/>
                    </div>

                    <div class="form-group col-xs-12 col-sm-4">
                        <label>Duración de llamada (minutos):</label>
                        <select class="form-control outline" id="duration-call"></select>
                        <!--<input type="text" class="form-control outline" id="duration-call" placeholder="15.min" value="15:00"/>-->
                    </div>

                    <div class="form-group col-xs-12 col-sm-6">
                        <label>Inicio del servicio:</label>
                        <input type="date" class="form-control outline" id="start-date"/>
                    </div>

                    <div class="form-group col-xs-12 col-sm-6">
                        <label>Final del servicio:</label>
                        <input type="date" class="form-control outline" id="end-date"/>
                    </div>

                    <div class="col-xs-12 col-sm-6 summary summary-hours">
                        <div class="item-circle" id="days-inside-range"> 0 </div>
                            <h5><b>Días</b> dentro del Rango. </h5>
                    </div>

                    <div class="col-xs-12 col-sm-6 summary summary-hours">
                        <div class="item-circle" id="weeks-inside-range"> 0 </div>
                            <h5><b>Semanas</b> Dentro Del Rango. </h5>
                    </div>

                    <div class="clear"></div>
                </div>




        <div class="module row">
        
            <div class="form-group col-xs-12 col-sm-6" >
                <label>Zona Horaria:</label>
                    <select class="form-control outline" id="time-zone-tmk" data-live-search="true"></select>
            </div>

            <div class="form-group col-xs-12 col-sm-6" id="jornada-laboral">
                <div style="clear:both"></div>

                <div class="cont start-time-journal">
                    <label>Hora Inicial:</label>
                    <select class="form-control outline" id="start-time-journal"></select>
                </div>

                <div class="cont end-time-journal">
                    <label>Hora Final:</label>
                    <select class="form-control outline" id="end-time-journal"></select>
                </div>  
            </div>

            <div class="clear"></div>
        
            <!--jornadas Personalizadas--> 
                <div class="form-group customs-chedule col-xs-12 col-sm-6" style="display:none;">
                    <label>Inicio de Jornada:</label>
                    <div class="inline-form">
                        <div class="box-icon">
                            <i class="far fa-clock"></i>
                        </div>
                        <input type="tel" class="form-control" placeholder="Horas" class="col-xs-5"/>
                        <input type="tel" class="form-control" placeholder="Minutos" class="col-xs-5"/>
                        <div class="time-cycles night">
                            <i class="fas fa-moon"></i>
                            <span>PM</span>
                        </div>
                    </div>
                </div>

                <div class="form-group customs-chedule col-xs-12 col-sm-6" style="display:none;">
                    <label>Fin de Jornada:</label>
                    <div class="inline-form">
                        <div class="box-icon">
                            <i class="far fa-clock"></i>
                        </div>
                        <input type="tel" class="form-control" placeholder="Horas" class="col-xs-5"/>
                        <input type="tel" class="form-control" placeholder="Minutos" class="col-xs-5"/>
                        <div class="time-cycles day">
                            <i class="fas fa-cloud"></i>
                            <span>AM</span>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 summary summary-hours" style="width: 100%;">
                    <div class="item-circle"> 8 </div>
                        <h5><b>Horas</b> de Gestión Diarias. </h5>
                </div>
        <!--FIN jornadas Personalizadas-->
            <div class="clear"></div>
        </div>

    <div class="module row">
        <div class="form-group col-xs-12" style="width:100%;">
            <label style="margin-left:16px;"> Días de actividad: </label>
                <ul class="listDays"  style="list-style: none;">
                    <li class="day active">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="title">Lunes</span>
                    </li>

                    <li class="day active">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="title">Martes</span>
                    </li>

                    <li class="day active">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="title">Miercoles</span>
                    </li>

                     <li class="day active">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="title">Jueves</span>
                    </li>

                     <li class="day active">
                        <span class="icon">
                            <i class="fas fa-check"></i>
                        </span>
                        <span class="title">Viernes</span>
                    </li>

                    <li class="day">
                        <span class="icon">
                            <i class="fas fa-times"></i>
                        </span>
                        <span class="title">Sábado</span>
                    </li>

                    <li class="day">
                        <span class="icon">
                            <i class="fas fa-times"></i>
                        </span>
                        <span class="title">Domingo</span>
                     </li>
                </ul>
            </div>

            <div class="col-xs-12 col-sm-4 summary">
                <div class="item-circle" id="math-days-gestion"> 5 </div>
                    <h5><b>Días</b> de gestión por semana. </h5>
            </div>
            
            <div class="col-xs-12 col-sm-4 summary">
                <div class="item-circle"> 0 </div>
                <h5><b>Días Totales</b> para la Gestión. </h5>
            </div>

            <div class="col-xs-12 col-sm-4 summary">
                <div class="item-circle small-font" id="total-hours-work"> 0 </div>
                    <h5><b>Horas</b> para realizar la gestión. </h5>
            </div>
                    <div class="clear"></div>
        </div>


        <div class="module row mt-4" id="added-services">
            <div class="form-group added-services-item col-xs-12 col-sm-4" id="bag-comition">
                        <label>
                            <input type="checkbox" data-show="bag-comition" class="activate-modules bag-comition">
                            <span>Bolsa de Comisión</span>
                        </label>
                    <input type="text" class="form-control outline" id="input-bag-comition" placeholder="100.0000" disabled/>
                </div>

                <div class="form-group col-xs-12 col-sm-4 added-services-item active" id="grabations">
                        <label class="flex">
                            <input type="checkbox" checked data-show="grabations" class="activate-modules" id="check-grabations">
                            <span>Grabaciones</span>
                            <b class="value">0</b>
                        </label>
                        <p>
                            El módulo de grabación constituye una plataforma de grabación fácil de usar y mantener, que permite realizar grabaciones por requerimiento de calidad, como prueba contractual o requisito legal. La aplicación de gestión dispone de una potente consola de búsqueda y reproducción de grabaciones que permite definir y memorizar filtros. Estos filtros pueden incluir información de negocio relacionada con la llamada o cliente gestionado de la siguiente manera:
 
                            Las grabaciones puedan ser realizadas cuando sea necesarias, ya sean automatizadas bajo plan o activadas bajo demanda (lanzado manualmente por el agente o automáticamente por una aplicación externa)
                            El sistema garantiza que las grabaciones son almacenadas de forma segura y que esta seguridad se mantenga incluso si es almacenada en otros medios físicos (por ejemplo: cintas backup, DVDs, etc.)
                            La solución dispone de un control de acceso a las grabaciones. Sólo el personal autorizado debe tener acceso a reproducir y/o exportar grabaciones.
                            El módulo mantiene un registro detallado de reproducción y exportación por parte de los usuarios autorizados.
                        </p>
                </div>

                <div class="form-group col-xs-12 col-sm-4 added-services-item" id="audition">
                        <label class="flex">
                            <input type="checkbox" data-show="audition" class="activate-modules" id="check-auditoria">
                            <span>Auditoría</span>
                             <b class="value">0</b>
                        </label>
                        <p>
                            La Auditoría les proporciona análisis, evaluaciones, recomendaciones, asesoría e información concerniente a las actividades revisadas. <span class="showMore" data-show="span-audition">...</span>
                            <div class="hidden-content" id="span-audition" style="font-size:12px !important;color:#999999;">
                                <ul>
                                    <li>Verificar las condiciones de la operación y los procesos que siguen los agentes.</li>
                                    <li>Verificar las metodologías para brindar la información y el registro de los interacciones en el sistema.</li>
                                    <li>Verificar que las interacciones realizadas estén bajo los parámetros establecidos por cada cliente y así evitar reclamaciones.</li>
                                </ul>

                                El enfoque del área de auditoría está diseñado para alcanzar los requisitos y objetivos de la operación,  del cliente y del usuario final. 
                                  Debe garantizar la correcta ejecución de los procesos, 
                                  apuntando al cumplimiento de los kpis establecidos para 
                                    FCR, RUN, Contact Rate, Ventas y rentabilidad. <br/>
                                    PUNTOS AUDITABLES <br/>
                                    Calificación dada al registro en la llamada. <br/>
                                    Ingreso de información al sistema. <br/>
                                    Captura de datos requeridos. <br/>
                                    Manejo de objeciones. <br/>
                                    Conocimiento de la campaña. <br/>
                                    Suministro de información al cliente. <br/>
                                    Búsqueda de datos de contacto adicionales. <br/>
                                    Seguimiento de guión. <br/>
                                    Lenguaje apropiado. <br/>
                                    Trato al cliente. <br/>
                            </div>
                        </p>
                </div>
            <div class="clear"></div>
        </div>

            </form>




        </div>
    </section>
<!--Final Calculadora-->
    </section>
    <div class="container-fluid">
        <div class="row bg-success">
            <div class="col">
                <div class="container">
                    <div class="row p-0 m-0">
                        <div class="col-xl-12 p-0 m-0 pt-3 pb-3 bg-success">
                            <h4 class="text-center text-white p-0 m-0">TOTAL INVERSIÓN<br></h4>
                            <h1 class="text-center text-white total_inversion">$0</h1>
                            <!-- <small class="text-white d-block text-center p-2">
                                <input type="checkbox"> *
                               <a href="https://www.servon.com.co/files/servon.com.co/NbA2quIQDXf1OcEipBh7_35.docx">
                                    Aplican condiciones y restricciones</a>, precios no incluyen impuestos, el valor esta en pesos colombianos, 
                                </small>
                                -->
                        </div>

                    <div class="col-xl-12 summary-car d-none">
                            <div class="row text-white" style="font-size: 0.8em;margin-bottom:25px;">
                                <div class="col-xl-12 bg-info p-3 mb-2">
                                    <h5 class="text-white p-0 m-0">Resumen de cotización <span>$puesto 1</span></h5>
                                </div>

                                <div class="col-sm-12 col-lg-4 col-xl-4 mb-4" id="car-type-service">
                                    <p class="m-0 p-0">Tipo de servicio:</p>
                                    <h5 class="m-0 p-0"> - </h5>
                                </div>

                                <div class="col-sm-6 col-lg-4 col-xl-4 mb-4" id="people-to-call-car">
                                    <p class="m-0 p-0">Número de personas a llamar</p>
                                    <h5 class="m-0 p-0"> - </h5>
                                </div>

                                <div class="col-sm-6 col-lg-4 col-xl-4 mb-4" id="call-duration-car">
                                    <p class="m-0 p-0">Duración de la llamada:</p>
                                    <h5 class="m-0 p-0"> - </h5>
                                </div>

                                <div class="col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <p class="m-0 p-0">Inicio del servicio:</p>
                                    <h5 class="m-0 p-0 mb-3" id="start-service-car"> - </h5>

                                    <p class="m-0 p-0">Final del servicio:</p>
                                    <h5 class="m-0 p-0" id="end-service-car"> - </h5>
                                </div>

                                <div class="col-md-6 col-lg-4 col-xl-4 mb-4">
                                    <p class="m-0 p-0">Zona horaría:</p>
                                    <h5 class="m-0 p-0 mb-3" id="time-zone-car"> - </h5>
                                    <p class="m-0 p-0">Jornada laboral:</p>
                                    <h5 class="m-0 p-0" id="laboral-journal-car"> - </h5>
                                </div>

                                <div class="col-lg-4 col-xl-4 mb-4" id="activity-days-car">
                                    <p class="m-0 p-0">Días de actividad:</p>
                                    <h5 class="m-0 p-0"> - </h5>
                                </div>

                                <div class="col-xl-12 container-aditionals">
                                    <div class="box-aditional" id="bag-comition-car">
                                            <h5 class="m-0 p-0">Bolsa de comisión:</h5>
                                            <span> 0 </span>
                                    </div>

                                    <div class="box-aditional" id="bag-grabation-car">
                                            <h5 class="m-0 p-0">Grabaciones:</h5>
                                            <span> 0 </span>
                                    </div>

                                    <div class="box-aditional" id="bag-auditoria-car">
                                            <h5 class="m-0 p-0">Auditoria:</h5>
                                            <span> 0 </span>
                                    </div>
                                </div>
                            </div>

                            <div class="row justify-content-center bg-primary p-2">
                                <form method="post" action="https://checkout.payulatam.com/ppp-web-gateway-payu/" class="pay">
                                    <div class="col">
                                        <div class="form-group">   
                                            <input type="email" class="form-control noCheked" id="email" placeholder="Ingresa tu email" name="buyerEmail">
                                            <small class="text-white d-block text-center">
                                            <input type="checkbox" id="termsConditions">
                                                * <a href="https://www.servon.com.co/files/servon.com.co/NbA2quIQDXf1OcEipBh7_35.docx" style="color:#346669;display:inherit;">
                                                        Aplican condiciones y restricciones
                                                    </a>,precios no incluyen impuestos, el valor esta en pesos colombianos.
                                            </small>
                                            <button class="btn btn-info btn-lg mx-auto d-block w-75" type="Submit" id="pay" disabled>
                                                IR A PAGAR
                                            </button>
                                        </div>
                                        
                                    </div>
                                </form>
                            </div>













<div class="d-none" style="border:1px solid red;">
        <form method="post" action="https://www.servon.com.co/adm/TableRegisterCreate/42/false/true" accept-charset="UTF-8" enctype="multipart/form-data" id="formPayu">
                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">ReferenceCode</label>
                                    <input type="text" value="000" class="form-control " name="referencecode[value]" required="" id="OMOLDS_REFERENCECODE">
                                    <input type="hidden" name="referencecode[typeField]" value="short_answer">
                                    <input type="hidden" name="referencecode[nameDbField]" value="referencecode">
                                    <input type="hidden" name="referencecode[orderField]" value="1">
                                    <input type="hidden" name="referencecode[required]" value="yes">
                            </div>
                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">ServiceType</label>
                                    <input type="text" value="" class="form-control " name="servicetype[value]" required="" id="OMOLDS_SERVICETYPE">
                                    <input type="hidden" name="servicetype[typeField]" value="short_answer">
                                    <input type="hidden" name="servicetype[nameDbField]" value="servicetype">
                                    <input type="hidden" name="servicetype[orderField]" value="200">
                                    <input type="hidden" name="servicetype[required]" value="yes">
                            </div>
                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">PeopleToCall</label>
                                    <input type="text" value="" class="form-control " name="peopletocall[value]" required="" id="OMOLDS_PEOPLETOCALL">
                                    <input type="hidden" name="peopletocall[typeField]" value="short_answer">
                                    <input type="hidden" name="peopletocall[nameDbField]" value="peopletocall">
                                    <input type="hidden" name="peopletocall[orderField]" value="300">
                                    <input type="hidden" name="peopletocall[required]" value="yes">
                            </div>  

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">DurationCall</label>
                                <input type="text" value="" class="form-control " name="durationcall[value]" required="" id="OMOLDS_DURATIONOCALL">
                                <input type="hidden" name="durationcall[typeField]" value="short_answer">
                                <input type="hidden" name="durationcall[nameDbField]" value="durationcall">
                                <input type="hidden" name="durationcall[orderField]" value="400">
                                <input type="hidden" name="durationcall[required]" value="yes">
                            </div>

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">ServiceDate</label>
                                <input type="text" value="" class="form-control " name="servicedate[value]" required="" id="OMOLDS_SERVICEDATE">
                                <input type="hidden" name="servicedate[typeField]" value="short_answer">
                                <input type="hidden" name="servicedate[nameDbField]" value="servicedate">
                                <input type="hidden" name="servicedate[orderField]" value="500">
                                <input type="hidden" name="servicedate[required]" value="yes">
                            </div>

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">ActivityDays</label>
                                <input type="text" value="" class="form-control " name="activitydays[value]" required="" id="OMOLDS_ACTIVITYDAYS">
                                <input type="hidden" name="activitydays[typeField]" value="short_answer">
                                <input type="hidden" name="activitydays[nameDbField]" value="activitydays">
                                <input type="hidden" name="activitydays[orderField]" value="600">
                                <input type="hidden" name="activitydays[required]" value="yes">
                            </div>

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">BagComition</label>
                                <input type="text" value="" class="form-control " name="bagcomition[value]" required="" id="OMOLDS_BAGCOMITION">
                                <input type="hidden" name="bagcomition[typeField]" value="short_answer">
                                <input type="hidden" name="bagcomition[nameDbField]" value="bagcomition">
                                <input type="hidden" name="bagcomition[orderField]" value="700">
                                <input type="hidden" name="bagcomition[required]" value="yes">
                            </div>

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">Grabations</label>
                                    <input type="text" value="" class="form-control " name="grabations[value]" required="" id="OMOLDS_GRABATIONS">
                                    <input type="hidden" name="grabations[typeField]" value="short_answer">
                                    <input type="hidden" name="grabations[nameDbField]" value="grabations">
                                    <input type="hidden" name="grabations[orderField]" value="800">
                                    <input type="hidden" name="grabations[required]" value="yes">
                            </div>

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%">Audits</label>
                                <input type="text" value="" class="form-control " name="audits[value]" required="" id="OMOLDS_AUDITIONS">
                                <input type="hidden" name="audits[typeField]" value="short_answer">
                                <input type="hidden" name="audits[nameDbField]" value="audits">
                                <input type="hidden" name="audits[orderField]" value="900">
                                <input type="hidden" name="audits[required]" value="yes">
                            </div>

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%"> requiredConsultants</label>
                                    <input type="text" value="" class="form-control " name="requiredconsultants[value]" required="" id="OMOLDS_CONSULTANTS">
                                    <input type="hidden" name="requiredconsultants[typeField]" value="short_answer">
                                    <input type="hidden" name="requiredconsultants[nameDbField]" value="requiredconsultants">
                                    <input type="hidden" name="requiredconsultants[orderField]" value="1000">
                                    <input type="hidden" name="requiredconsultants[required]" value="yes">
                            </div>  

                            <div>
                                <label class="margenesTxts text-primary" style="width: 90%"> financialSummary</label>
                                <input type="text" value="" class="form-control" name="financialsummary[value]" required="" id="OMOLDS_FINANCIALSUMMARY">
                                <input type="hidden" name="financialsummary[typeField]" value="short_answer">
                                <input type="hidden" name="financialsummary[nameDbField]" value="financialsummary">
                                <input type="hidden" name="financialsummary[orderField]" value="1100">
                                <input type="hidden" name="financialsummary[required]" value="yes">
                            </div>

                            <div class="col-12 col-md-4 ">
                                <label class="margenesTxts text-primary" style="width: 90%">StatePay</label>
                                <input type="text" value="En proceso" class="form-control " name="statepay[value]" required="">
                                <input type="hidden" name="statepay[typeField]" value="short_answer">
                                <input type="hidden" name="statepay[nameDbField]" value="statepay">
                                <input type="hidden" name="statepay[orderField]" value="1200">
                                <input type="hidden" name="statepay[required]" value="yes">
                            </div>
                            <input name="mulriple_form" type="hidden" value="1">
                            <button class="btn btn-primary btnSubmit" id="btnSubmit0" type="submit">SAVE </button>
                        </form>
       </div>







                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="row p-3 m-0 mx-auto" id="mediosOm">
        <div class="col-12 col-lg-7 col-xl-10 mx-auto d-block">
            <p class="text-center p-0 m-0 text-secondary p-2">Recibimos los siguientes medios de pago:</p>
        </div>
        <div class="col-lg-6 col-xl-4 mx-auto d-block">
            <div class="row">
                <div class="col-3 p-0 m-0 mx-auto text-center"><img class="img-fluid mx-auto d-block" src="https://servon.com.co/index/viewArchive/903/archivo_imagen"></div>
                <div class="col-3 p-0 m-0 mx-auto"><img class="img-fluid mx-auto d-block" src="https://servon.com.co/index/viewArchive/904/archivo_imagen"></div>
                <div class="col-3 p-0 m-0 mx-auto"><img class="img-fluid mx-auto d-block" src="https://servon.com.co/index/viewArchive/37/archivo_imagen"></div>
                <div class="col-3 p-0 m-0 mx-auto"><img class="img-fluid mx-auto d-block" src="https://servon.com.co/index/viewArchive/81/archivo_imagen"></div>
            </div>
        </div>
    </div>
    <div class="modal fade" role="dialog" tabindex="-1" id="guion">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title m-0 p-0">Ejemplo de Guión</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                <div class="modal-body">
                    <div class="carousel slide" data-ride="carousel" id="carousel-1">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"><img class="img-fluid w-100 d-block" src="https://servon.com.co/index/viewArchive/908/archivo_imagen" alt="Slide Image"></div>
                            <div class="carousel-item"><img class="img-fluid w-100 d-block" src="https://servon.com.co/index/viewArchive/909/archivo_imagen" alt="Slide Image"></div>
                            <div class="carousel-item"><img class="img-fluid w-100 d-block" src="https://servon.com.co/index/viewArchive/910/archivo_imagen" alt="Slide Image"></div>
                        </div>
                        <div><a class="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-1" role="button"
                                data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-1" data-slide-to="0" class="active"></li>
                            <li data-target="#carousel-1" data-slide-to="1"></li>
                            <li data-target="#carousel-1" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0 m-0" id="footerOm">
        <footer class="page-footer bg-dark p-0 m-0">
            <div class="row p-0 m-0 p-3 bg-light">
                <div class="col p-0 m-0">
                    <p class="p-0 m-0 text-secondary" style="font-weight:300;">Todos los derechos reservados por BRM S.A.</p>
                    <a href="politicas.html">
                        <p class="p-0 m-0"><small>Políticas de privacidad</small></p>
                    </a>
                </div>
            </div>
        </footer>
    </div>
    <div id="Modales">
        <div class="modal fade" role="dialog" tabindex="-1" id="modalLogin">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title text-primary"><i class="fa fa-edit"></i> ZONA DE ACCESO</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xl-12 padMar">
                                <p class="text-secondary p-0 m-0 p-2">Para acceder a nuestros productos debes estar inscrito en nuestro sitio web.</p>
                            </div>
                            <div class="col">
                                <form method="post" class="p-4">
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Correo electrónico"></div>
                                    <div class="form-group"><input class="form-control outline" type="password" name="password" placeholder="Contraseña"></div>
                                    <div class="form-group"><a class="btn btn-primary btn-block" role="button" href="loginHome.html">ENVIAR</a></div>
                                    <div class="form-check pb-2"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label text-left" for="formCheck-1">Recordarme</label></div><a href="#">¿Olvidaste tu contraseña?</a></form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" role="dialog" tabindex="-1" id="modalCrearCuenta">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title text-primary"><i class="fa fa-edit"></i> CREAR CUENTA</h3><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xl-12 padMar">
                                <p class="text-secondary p-0 m-0 p-2">Diligencia los datos para la creación de cuenta y acceder a los servicios de Servon.</p>
                            </div>
                            <div class="col">
                                <form method="post" class="p-4">
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Nombres"></div>
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Apellidos"></div>
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Cédula"></div>
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Celular"></div>
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Correo electrónico"></div>
                                    <div class="form-group"><input class="form-control outline" type="email" name="email" placeholder="Crear contraseña"></div>
                                    <div class="form-group"><input class="form-control outline" type="password" name="password" placeholder="Repetir contraseña"></div>
                                    <div class="form-group"><a class="btn btn-primary btn-block text-white" role="button" href="loginHome.html"> CREAR CUENTA</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://brm-valenciad.github.io/servon/infraestructura/md5.min.js" type="text/javascript"></script>
    <script src="https://omolds.github.io/assets/js/jquery.easing.min.js"></script>
    <script src="https://omolds.github.io/assets/js/scrolling-nav.js"></script>
    <script src="https://omolds.github.io/assets/js/functionsOmolds.js"></script>
    <script src="https://momentjs.com/downloads/moment.min.js"></script>
    <script type="text/javascript" src="https://brm-valenciad.github.io/servon/infraestructura/moment-recur.js"></script>
    <script type="text/javascript" src="https://brm-valenciad.github.io/servon/calculadora/calculadora.js"></script>
    
    <script type="text/javascript">
        var parameters = {
                tipoDeMenu: "menú",
                component: "menú"
         };

        $.ajax({
            data:  parameters,
            url: '<?=APP_PAGE_OMOLDS;?>web/json_menu',
            type: 'POST',
            success: function(result) {
                var data = result.data || [];
                if(result.success == "true"){
                    var tmpl = $.templates(data.component); // Get compiled template
                    var html = tmpl.render(data); // Render template using data - as HTML string
                    $('#menu-header').append(html); // Insert HTML string into DOM
                }else{
                    console.error('ATENCIÓN:'+ result.msm);
                }
                
                
            }
        });
    </script>
