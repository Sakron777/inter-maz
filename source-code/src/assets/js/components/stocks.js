$('.btn-hidden').on('click', function() {
	$(this).siblings('ul').slideToggle();
});


$("[data-collapse]").on ("click", function(event){
	event.preventDefault();

	let $this = $(this),
		blockId = $(this).data('collapse');


	   $(blockId).slideToggle();
	   $this.toggleClass('active');
});