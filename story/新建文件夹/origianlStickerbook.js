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

        if (i == 8){
          // first drag and drop page
          $("#page8-draggable.p.draggable.ui-draggable").show();
        } else {
          $("#page8-draggable.p.draggable.ui-draggable").hide();
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

        if (i == 8){
          // First drag and drop page
          $("#page8-draggable.p.draggable.ui-draggable").show();
        } else {
          $("#page8-draggable.p.draggable.ui-draggable").hide();
        }
    }
  });

  $('.p.draggable').each(function(index, element){
    var begin_op = $(this).position();
    console.log(begin_op);
    $(element).mousedown(function(){
      $(this).addClass("bigger");
    });
    $(element).mouseup(function(){
      $(this).removeClass("bigger");
    });
    $(element).draggable({
      revert: function(event, ui) {
        $(this).data("ui-draggable").originalPosition = begin_op;
        console.log(begin_op);
        return !event;
      },
    });
  });

  var accept_list = ["#pic-begin", 
                     "#pic-jump, #pic-run, #pic-shake, #pic-stand, #pic-sleep",
                     "#pic-jump, #pic-run, #pic-shake, #pic-stand, #pic-sleep",
                     "#pic-jump, #pic-run, #pic-shake, #pic-stand, #pic-sleep",
                     "#pic-end",
                    ];

  $(".program").each(function(index, element){
    $(element).droppable({
      accept: accept_list[index],
      drop: function(event, ui) {
        ui.draggable.addClass("bigger");
        ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
      },
    });
  });
 
/*  var dropped = false;
  $(".p.draggable").draggable({

    cursor: "crosshair",
    revert: 'true',
    helper: 'clone',
    appendTo: 'body',
    zIndex: 999,
    start: function(event, ui) {
          dropped = false;
          $(".p.draggable").addClass("bigger");
          $(this).addClass("hide");
          ui.helper.attr('id', 'page8-draggable')
        },
        stop: function(event, ui) {
          if (dropped==true) {
            $(this).remove();
            $(".p.draggable").removeClass("bigger");
          } else {
            $(this).removeClass("hide");
            $(".p.draggable").removeClass("bigger");
          }
        }     
  });

  

  var drop_option = {
    drop: function(event, ui) {
          console.log("drop");
          dropped = true;
          $(this).removeClass("border").removeClass("over");
          var dropped = ui.draggable;
          var droppedOn = $(this);          
          $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
          $.ui.ddmanager.current.cancelHelperRemoval = true;
          ui.helper.position( { of: $(this), my: 'center', at: 'center' } );
        }, 
      over: function(event, elem) {
          // $(this).addClass("over");
          // console.log("over");
        },
      out: function(event, elem) {
          // $(this).removeClass("over");
      }
  };

  $('#drop img').droppable(drop_option);

  $('#image-begin').droppable({
    accept: "#pic-begin",
  });

  $('#image-end').droppable({
    accept: "#pic-end",
  });

  $('#image1, #image2, #image3').droppable({
    accept: "#pic-jump, #pic-run, #pic-shake",
  });*/
  

});

