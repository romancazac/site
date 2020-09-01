

var $status = $('.pagingInfo');

var $slickElement = $('#slider1');


$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay: false,
  dots: false,

  slidesToShow:3,
});

$(document).ready(function(){
	$('#slider2').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		
		
	});
});