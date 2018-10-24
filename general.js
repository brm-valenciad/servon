console.warn("Soy el general.js");

        if (location.protocol == 'http:'){
            location.href = location.href.replace(/^http:/, 'https:');
        }
        

        /*usuario loguin registrado*/
        $(document).ready(function(){
            if('<?= $login ?>' == 'true'){
                var Base64Usrl = Base64.encode(location.href);
                Base64Usrl =  Base64Usrl.replace(/[/]/g, "OMOLDS");
                $('#loginUserBtn').html('<i class="fa fa-user-circle-o"></i> Cerrar');
                $('#loginUserBtn').attr('href','/login/closeSession'+'/'+Base64Usrl);
                $('#loginUserBtn').removeAttr('data-target');
                $('#loginUserBtn').removeAttr('data-toggle');
            }
        });
       


        $('#modalLogin').on('show.bs.modal', function (event) {
            var Base64Usrl = Base64.encode(location.href);
            Base64Usrl =  Base64Usrl.replace(/[/]/g, "OMOLDS");
            $('#login-form').attr('action', $('#login-form').attr('action')+'/'+Base64Usrl);
        });

       
        
        var parameters = {
            tipoDeMenu: "menú",
            component: "menú"
        };
        $.ajax({
            data:  parameters,
            url: 'https://www.servon.com.co/web/json_menu',
            type: 'POST',
            success: function(result) {
                var data = result.data || [];
                    console.warn(data);
                if(result.success == "true"){
                    var tmpl = $.templates(data.component); // Get compiled template
                    var html = tmpl.render(data); // Render template using data - as HTML string
                    $('#menu-header').append(html); // Insert HTML string into DOM
                }else{
                    console.error('ATENCIÓN:'+ result.msm);
                }
                
                
            }
        });
