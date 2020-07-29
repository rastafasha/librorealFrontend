$(document).ready(function(){
    var clickEvent = false;
	$('#myCarousel2').carousel({
		interval:   4000,
        pause:true
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			$('.list-group li').removeClass('active');
			$(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				$('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
});
$(window).load(function() {
    var boxheight = $('#myCarousel2 .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel2 .item').length;
	var triggerheight = Math.round(boxheight/itemlength+1);
	$('#myCarousel2 .list-group-item').outerHeight(triggerheight);
});