'use strict'

$(document).ready(function () {

	
//	var windowWidth = $(window).width();
	
//	if (windowWidth < 767) { 
//      menuAcc();
//	}
	
	$(window).resize(function(){
		var windowWidth = $(window).width();
		
		if (windowWidth < 767) {
			menuAcc();
			}else{
//				delete menuAcc();
			}
		
    
    });
	
	
	function menuAcc(){
		$('.menu__nav__sub').hide();
		$('.menu__nav > li > a').click(function () {
				var checkElement = $(this).next();
				if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
					return false;
				}
				if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
					$('.menu__nav .menu__nav__sub:visible').slideUp('normal');
					checkElement.slideDown('normal');
					return false;
				}
			}
		);
	};



		
	
})