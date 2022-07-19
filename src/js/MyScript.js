	$(document).ready(function(){

	$(window).scroll(( ) => {
		let scrollDistance = $(window).scrollTop();
		

	});
	$(".loaderArea").css("display", "none");

	function calculate(){
		let sum = parseInt ($("#select1 option:selected").val()) + parseInt ($("#select2 option:selected").val()) + parseInt ($("#select3 option:selected").val());
		let days = parseInt ($("#select1 option:selected").attr("days")) + parseInt ($("#select2 option:selected").attr("days")) + parseInt ($("#select3 option:selected").attr("days"));
		$(".days.digit").text(days);
		$(".price.digit").text(sum);
	}
	
	$("select").on("change", function(){
		calculate();
	}); 
	calculate();
	});	


$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});



