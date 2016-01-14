$(function(){
	console.log('DOM Loaded');

	$('.testimonials').on('hover', function() {
		($this).addClass('animated flipinY' );
	});
});