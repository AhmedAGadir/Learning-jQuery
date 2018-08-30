// elements fade, fly in as you scroll to their position on the screen


$(document).ready(function() {

	var windowScrollPositionTop;
	var windowHeight;
	var windowsScrollPosition;

	// make your own jQuery functions
	$.fn.revealOnScroll = function(direction) {

		return this.each(function() {

			if (!$(this).hasClass('hidden')) {

				if (direction == 'right') {
					$(this).css({
						opacity: 0,
						right: '700px',
					})
				} else {
					$(this).css({
						opacity: 0,
						right: '-700px',
					})
				}

				$(this).addClass('hidden');
			}

			// returns an object that tells us how far down for the top the element begins
			var elementOffset = $(this).offset();
			var elementOffsetTop = elementOffset.top;

			if (!$(this).hasClass('animation-complete')) {
				if (windowsScrollPosition > elementOffsetTop) {
					$(this).animate({
						opacity: 1,
						right: 0,
					}, 1000).addClass('animation-complete')
				}
			}

		})
	}

	$(window).scroll(function() {
	
		// distance between the top of the document and the top of the window
		windowScrollPositionTop = $(window).scrollTop();
		// window height
		windowHeight = $(window).height();
		windowsScrollPosition = windowScrollPositionTop + windowHeight
	
		// you can list items like this and apply a function to each of them like this in jQuery
		//$('#sidebar, #photo, li').revealOnScroll();

		$('#sidebar').revealOnScroll('left')
		$('#photo').revealOnScroll('right')
		$('ul').revealOnScroll('left')

	})
})