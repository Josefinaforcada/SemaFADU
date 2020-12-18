$(document).ready(function() {

	$('.iconoc').click(function(){
		$(this).toggleClass('faveado');
	});

	$('.iconofav').click(function(){
		$(this).removeClass('icon-heartempty')
		.addClass('icon-heartfill');
	});
	
	var contenedorMemes = $('#contenedorMemes');

	$( "#memear" ).click(function() {
		contenedorMemes.toggleClass("display-none")
		
	});
	
    $('.boton-niveles').click(function(){
        $('.niveles .desplegable').
        slideToggle();
    });
                             
});


    

