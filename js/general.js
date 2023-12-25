$(document).ready(function() {
   let exp = $("#contenido_exp").val();
   changeExp(exp);
   $("#imagen_").on("click", function() {
    $(this).toggleClass("transformed");
    console.log('se apreto la imagen')
});
});

function changeExp(exp){
   exp = exp === "" ? "cronos": "asiste";
    $("#contenido_exp").val(exp);
    if(exp== "cronos"){
        $("#t1").addClass('is-active');
        $("#t2").removeClass('is-active');
        var img = "img/loginCronos.jpg";
        $(".image-1").attr('src',img);
        $(".image-2").attr('src',img);
        $(".image-3").attr('src',img);
        $(".image-4").attr('src',img);
        visibilidadPrev();
        $("#cont_exp_tittle").text('Sistema Cronos');
        $("#cont_exp_sub").text('Software web para R.R.H.H');
        $("#cont_exp_text").html('Software desarrollado bajo la desarrolladora DSTchile. <br> El cual su función es la procesion de todos los modulos que realiza RRHH, ya sea contratos, registros, liquidaciones, etc. También el software genera firmas digitales con qr, notifica por correo actualizaciones, enrolamiento u otro. Diseñado para tanto el uso del equipo de RRHH como el empleado y su encargado.<br> Utilizando PHP sin framework, Javascript/Jquery, boostrap, sweetAlert y heidiSql.');
    }
    else{
        $("#t1").removeClass('is-active');
        $("#t2").addClass('is-active');
        var img = "img/loginAct.png";
        $(".image-1").attr('src',img);
        $(".image-2").attr('src',img);
        $(".image-3").attr('src',img);
        $(".image-4").attr('src',img);
        visibilidadPrev();
        $("#cont_exp_tittle").text('Asistes Activos');
        $("#cont_exp_sub").text('Software web para Registro de asistencia');
        $("#cont_exp_text").html('Migracion de PHP 5 a PHP 8.2 (cambio de librerias (phpexcel,phpmailer)). Software desarrollado y actualizado bajo la desarrolladora DSTchile.<br> Incorporación de notificacion de correo,activacion de accesos, bloqueo de cuenta por intentos excesivo de acceso. <br> Utilizando PHP sin framework, Javascript/Jquery,sweetAlert y heidiSql.');
    }    
}

//comportamiento del boton flotante
$('.btn_float').on('click',function(){
    var target= $('.header').offset().top;
    $('html, body').animate({
        scrollTop: target
    }, 1000); 
});

//comportamiento de seleccion en experiencias
$("#t2").on('click',function (){
    changeExp("activos");
});

$("#t1").on('click',function (){
    changeExp("");
});

//comportamientos de ubicacion en ver 
$("a[href='#cont_exp']").on('click', function() {
    // Obtener la posición del contenedor
    var targetOffset = $("#cont_exp").offset().top;

    // Realizar el desplazamiento suave
    $('html, body').animate({
        scrollTop: targetOffset
    }, 1500); 
});

$("a[href='#cont_tech']").on('click', function() {
    var targetOffset = $("#cont_tech").offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 1300); 
});

$("a[href='#cont_pro]").on('click', function(){
    var targetOffset = $("#cont_pro").offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 1500);
});


$('#next').on('click',function(){
    // visibilidad del icono prev
    var exp = $("#contenido_exp").val();
    var num = parseInt($("#n_img").val()) +1;
     if(exp=="cronos"){
        switch(num){
            case 2:
                var img = "img/cronos3.jpg";
                $("#n_img").val('2');
            break;
            case 3:
                var img = "img/prev.jpg";
                $("#n_img").val('3');
            break;    
            default:
                var img = "img/loginCronos.jpg";
                $("#n_img").val('1');
            break;     
        }
        $(".image-1, .image-2, .image-3, .image-4").attr('src', img);
        visibilidadPrev();
     }
     else{
        switch(num){
            case 2:
                var img = "img/asiste2.png";
                $("#n_img").val('2');
            break;
            case 3:
                var img = "img/valida.png";
                $("#n_img").val('3');
            break;    
            default:
                var img = "img/loginAct.png";
                $("#n_img").val('1');
            break;     
        }
        $(".image-1, .image-2, .image-3, .image-4").attr('src', img);
        visibilidadPrev();
     }
});

$('#prev').on('click',function(){
    // visibilidad del icono prev
    var exp = $("#contenido_exp").val();
    var num = parseInt($("#n_img").val()) -1;
     if(exp=="cronos"){
        console.log('que hay en el de exp ',exp);
        switch(num){
            case 2:
                var img = "img/cronos3.jpg";
                $("#n_img").val('2');
            break;
            case 3:
                var img = "img/prev.jpg";
                $("#n_img").val('3');
            break;    
            default:
                var img = "img/loginCronos.jpg";
                $("#n_img").val('1');
            break;     
        }
        $(".image-1, .image-2, .image-3, .image-4").attr('src', img);
        visibilidadPrev();
     }
     else{
        switch(num){
            case 2:
                var img = "img/asiste2.png";
                $("#n_img").val('2');
            break;
            case 3:
                var img = "img/valida.png";
                $("#n_img").val('3');
            break;    
            default:
                var img = "img/loginAct.png";
                $("#n_img").val('1');
            break;     
        }
        $(".image-1, .image-2, .image-3, .image-4").attr('src', img);
        visibilidadPrev();
     }
});

function visibilidadPrev(){
    let numImg = $("#n_img").val();
    if(parseInt(numImg) == 1){
        $("#prev").css('visibility','hidden');
    }
    else{
        $("#prev").css('visibility','visible');
    }
}

//acciones para abrir o cerrar modal juntaClick
$('#ir_jc').on('click',function(){
    $('#modal-juntaClick').addClass('is-active');
});

function cerrarModJunta(){
    $('#modal-juntaClick').removeClass('is-active');
}

$('#ir_porta').on('click',function(){
    $('#modal-porta').addClass('is-active');
});

function cerrarModPort(){
    $('#modal-porta').removeClass('is-active');
}

$('#ir_mobile').on('click',function(){
    $('#modal-mobile').addClass('is-active');
});

function cerrarModMobile(){
    $('#modal-mobile').removeClass('is-active');
}
