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
  
  var originalPosition_left = [170, 270, 370, 470,570, 670,770];
  $('.p.draggable').each(function(index, element){
    $(this).data("dropped", false);
    $(element).on('mousedown', function(){
      $(this).addClass("bigger");
      $(this).zIndex(999);
    });

    $(element).on('mouseup', function(){
      if ($(this).data("dropped") == false)
        $(this).removeClass("bigger");
    });

    $(element).draggable({
      revert: function(event, ui) {
        $(this).data("ui-draggable").originalPosition = {
          top: 575,
          left: originalPosition_left[index],
        };
        return !event;
      },
      stop: function(event, ui) {
        $(this).zIndex(1);
      }
    });
  });
  var accept_list = ["#begin", 
                     "#jumping, #running, #shake, #standing, #spinning",
                     "#jumping, #running, #shake, #standing, #spinning",
                     "#jumping, #running, #shake, #standing, #spinning",
                     "#end",
                    ];
  var drop_picname = ["blank","blank","blank","blank","blank"];                  
  $(".program").each(function(index, element){
    $(element).droppable({
    
      accept: accept_list[index],
      out: function(event,ui){
        $(this).droppable("option", "accept", accept_list[index]);
        ui.draggable.data("dropped", false);
        drop_picname[index] = "blank";
      },
      drop: function(event, ui) {
        ui.draggable.addClass("bigger");
        ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
        $(this).droppable("option", "accept", ui.draggable);
        ui.draggable.data("dropped", true);
        drop_picname[index] = ui.draggable.attr("id");
      },
    });
  })

  /*$("#runbutton").click(function(){
    for(j=0; j<5; j++){
      console.log(drop_picname[j]);
    }
  });*/
  var option_dialog= {
    autoOpen: false,
    height: 600,
    width: 600,
    modal: true,
    title: "Roberto",
    position: { of: "#runbutton", my: "center bottom", at: "center top",},
  }

  $( "#dialog" ).dialog(option_dialog);

  $( "#runbutton" ).click(function() {

    $( "#dialog" ).dialog( "open" );
  
    $(".move").hide();
  });

  $(".playbutton").click(function(){
      $(".move").hide();
      var timer = 0;
      for (var i = 0; i < drop_picname.length; i++){
        if (drop_picname[i] != 'blank'){
          console.log(drop_picname[i]);
          // $('.' + drop_picname[i]).show();
          $('.' + drop_picname[i]).delay(1000 * timer).fadeIn(800);
          $('.' + drop_picname[i]).fadeOut(10);
          timer++;
        }
      }
    });
  
});


  /*function runProgram() {
      alert('hello2');
      var slots = document.querySelectorAll('#page8 .p.draggable');
      for (var i=0; i<slots.length; i++) {
        alert(slots[i].id);
        //alert(slots[i].data("drop-picname"));
      }
    }*/
    /*
    $( "#dialog" ).dialog( "open" );
    var dialog_pic = ["#dialog-begin", "#dialog-jump", "#dialog-run", "#dialog-end", "#dialog-shake", "#dialog-sleep", "#dialog-stand",]
    for(j=0; j<7; j++){
      $(dialog_pic[j]).hide();
    }
     
      $(".playbutton").click(function(){
        $('#moves').empty();
        for(k=0; k<5; k++){ 
          if(drop_picname[k] != "blank"){
            //$('.' + drop_picname[k]).show();
            $("#moves").prepend('<img src="images/' + drop_picname[k] + '.jpg"><br>');                
          }              
        }
      })
*/