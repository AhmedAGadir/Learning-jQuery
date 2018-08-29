// $(document).ready(function() {})

// the following is a shortcut for the above.
$(function() {

	$('#panel1').hide(300).show(1000).hide(300).show(1000);

	$('#panel1').slideUp(1000).delay(1000).slideDown(1000);

	$('#panel1').fadeToggle(1000).fadeToggle(1000);

	$('#panel1').css({
		color: 'red',
		fontWeight: 'bold',
		display: 'none'});

	$('#btn1').html('<h2>my panel</h2>');

	$('#btn1').on('click', function() {
		$('#panel1').slideToggle(200);
	});
	

	// clever part
	$('.panel-button').on('click', function() {
		var panelId = $(this).attr('data-panel-id');
		$('#'+panelId).toggle();
	})

	}
})
