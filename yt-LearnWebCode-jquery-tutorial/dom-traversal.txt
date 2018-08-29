// ======== from LearnWebCode =========

// https://www.youtube.com/watch?annotation_id=annotation_3009332853&feature=iv&list=UUHRp19HU7Y2LwfI0Ai6WAGQ&src_vid=gIvR-WX5lIQ&v=1vMFpT0h-WI

// use of $(this) allows us to add this to multiple elements
// useful for x buttons
// selects parent element with a class of foobar
$(this).parents('foobar').hide()

// use of $(this) allows us to add this to multiple elements
// useful for expanding/closing sibling text on a click
// selects next sibling with a class of foo
$(this).next('foo').slideToggle();

// dynamically loads content from another file into current document
$('.about-placeholder').load('about.html .body-text')
remember to use return false (or maybe preventDefault())