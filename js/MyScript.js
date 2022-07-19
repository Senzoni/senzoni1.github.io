	$(document).ready(function(){

	$(window).scroll(( ) => {
		let scrollDistance = $(window).scrollTop();

		$('.section').each((i, el) => {

			if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
				$('nav a').each((i, el) => {
					if ($(el).hasClass('active')) {
						$(el).removeClass('active');
					}
				});

				$('nav li:eq(' + i + ')').find('a').addClass('active'); 
			}
		});
		

	});

	$(".loaderArea").css("display", "none");

	function calculate(){
		let sum = parseInt ($("#select1 option:selected").val()) + parseInt ($("#select2 option:selected").val()) + parseInt ($("#select3 option:selected").val());
		let days = parseInt ($("#select1 option:selected").attr("days")) + parseInt ($("#select2 option:selected").attr("days")) + parseInt ($("#select3 option:selected").attr("days"));
		$(".days .digit").text(days);
		$(".price .digit").text(sum);
	}
	
	$("select").on("change", function(){
		calculate();
	}); 
	calculate();

	let options = {threshold: [0.5]};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.element-animation');
		elements.each((i,el) => {
			observer.observe(el);
		});
	});	

	

		function onEntry (entry){
			entry.forEach(change => {
				if (change.isIntersecting){
					change.target.classList.add('show-animation');
				}
			});
		}


$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});



