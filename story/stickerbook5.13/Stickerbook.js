$(document).ready(function(){

	var i = 0;

	$("page1").show();
	for (i = 2; i <= 21; i++){
		$("#page" + i.toString()).hide();
	}
	i = 1;
   
   $("#prev-button").hide();
	  
	$("#next-button").click(function(){
		if (i == 21) {
			alert("This is already the last page");
		}
		else{
			var id = "#page" + i.toString();
	    	$(id).hide();
	    	//alert(id);
	    	i++;
	    	id = "#page" + i.toString();
	    	$(id).show();
         if (i == 21) {
            $("#next-button").hide();
         } else {
            $("#next-button").show();
         }
         if (i > 1) {
            $("#prev-button").show();
         }
		}
	});
	 
	$("#prev-button").click(function(){
		if (i == 1) {
			alert("This is already the first page");
		}
		else{
			var id = "#page" + i.toString();
	    	$(id).hide();
	    	//alert(id);
	    	i--;
	    	id = "#page" + i.toString();
	    	$(id).show();
         if (i == 1) {
            $("#prev-button").hide();
         } else {
            $("#prev-button").show();
         }
         if (i < 21) {
            $("#next-button").show();
         }
		}
	});
});

$( page8_init );

function page8_init(){
	$('#pic-begin').data('number', 1).draggable({
		containment: '#page8',
		stack: "#slots",
        revert: true
	});
	$('#pic-end').data('number', 0).draggable({
		containment: '#page8',
		stack: "#slots",
        revert: true
	});
	$('#pic-jump').data('number', 2).draggable({
		containment: '#page8',
		stack: "#slots",
        revert: true
	});
	$('#pic-run').data('number', 3).draggable({
		containment: '#page8',
		stack: "#slots",
        revert: true
	});
	$('#pic-shake').data('number', 4).draggable({
		containment: '#page8',
		stack: "#slots",
        revert: true
	});
	$('#image-begin').data('number', 1).droppable({
		drop: handleDrop
	});
	$('#image-end').data('number', 0).droppable({
		drop: handleDrop
	});
	$('#image1').data('number', 2).droppable({
		drop: handleDrop
	});
	$('#image2').data('number', 3).droppable({
		drop: handleDrop
	});
	$('#image3').data('number', 4).droppable({
		drop: handleDrop
	});	
}

function handleDrop( event, ui ){
	var ImageNumber = $(this).data( 'number' );
    var PicNumber = ui.draggable.data( 'number' );

    if ( ImageNumber == PicNumber || (ImageNumber >= 2 && ImageNumber <= 4 && PicNumber >= 2 && PicNumber <=4) ){
	    ui.draggable.draggable( 'disable' );
	    $(this).droppable( 'disable' );
		ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
		ui.draggable.draggable( 'option', 'revert', false );
    }
}