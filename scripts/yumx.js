
$(document).ready(function(){
	$('#menu').click(function(){
    // --- toggle hamburger icon ---
		$(this).toggleClass('open');
    // --- toggle menu overlay ---
    $('.overlay').toggleClass('pulldown');
	});

});
