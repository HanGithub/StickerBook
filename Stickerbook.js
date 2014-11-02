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
  
  //page8
  var originalPosition_left = [170, 270, 370, 470,570, 670,770];
  $('#page8>.p.draggable').each(function(index, element){
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
  $( "#runbutton" ).hide()                  
  $(".program").each(function(index, element){
    $(element).droppable({
    
      accept: accept_list[index],
      out: function(event,ui){
        $(this).droppable("option", "accept", accept_list[index]);
        ui.draggable.data("dropped", false);
        drop_picname[index] = "blank";
        if(drop_picname[0] == "begin" && drop_picname[4] == "end")
            $( "#runbutton" ).show()
        else
            $( "#runbutton" ).hide()
      },
      drop: function(event, ui) {
        ui.draggable.addClass("bigger");
        ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
        $(this).droppable("option", "accept", ui.draggable);
        ui.draggable.data("dropped", true);
        drop_picname[index] = ui.draggable.attr("id");
        if(drop_picname[0] == "begin" && drop_picname[4] == "end")
            $( "#runbutton" ).show()
        else
            $( "#runbutton" ).hide()
      },
    });
  })

  var option_dialog= {
      autoOpen: false,
      height: 600,
      width: 600,
      modal: true,
      title: "Roberto",
  }

  $( "#dialog" ).dialog(option_dialog);
  $( "#dialog" ).dialog({
    position : { of: "#runbutton", my: "center bottom", at: "center top",}
  });
  $( "#runbutton" ).click(function() {
    $( "#dialog" ).dialog( "open" );
    $(".move").hide();
  });

  $(".playbutton").click(function(){
      $(".move").hide();
      var timer = 0;
      if(drop_picname[0] == "begin" && drop_picname[4] == "end"){
        for (var i = 1; i < 4; i++){        
          if (drop_picname[i] != 'blank'){          
            $('.' + drop_picname[i]).delay(1000 * timer).fadeIn(800);
            $('.' + drop_picname[i]).fadeOut(10);
            timer++;
          }
        }      
      }
  });

  //page11
  var originalPosition_left_repeat = [100, 220, 320, 420, 520, 620, 720, 830];

  $('#page11>.p.draggable, #page15>.p.draggable').each(function(index, element){
    $(this).data("dropped", false);
    var sticker_ID = element.id
    $(element).on('mousedown', function(element){
      if (sticker_ID == "repeat" || sticker_ID == "end_repeat"){
        $(this).addClass("bigger_repeat");
      }
      if(sticker_ID == "begin" || sticker_ID == "end"){
        $(this).addClass("bigger_extra");
      }
      $(this).addClass("bigger_page11");
      $(this).zIndex(999);
    });

    $(element).on('mouseup', function(){
      if ($(this).data("dropped") == false){
        $(this).removeClass("bigger_page11");
        if (sticker_ID == "repeat" || sticker_ID == "end_repeat"){
          $(this).removeClass("bigger_repeat");
        }
        if(sticker_ID == "begin" || sticker_ID == "end"){
          $(this).removeClass("bigger_extra");
        }
      }          
    });

    $(element).draggable({
      revert: function(event, ui) {
        var reversesticker_id = element.id
        if(reversesticker_id == "repeat" || reversesticker_id == "end_repeat"){
          //console.log(this.id)
          $(this).data("ui-draggable").originalPosition = {              
            top: 555,
            left: originalPosition_left_repeat[index],
          }   
        }else{
          $(this).data("ui-draggable").originalPosition = {
            top: 575,
            left: originalPosition_left_repeat[index],
          }
        }                    
        return !event;
      },
      stop: function(event, ui) {
        $(this).zIndex(1);
      }
    });
  });
  var accept_list_page_repeat = [ "#begin",
                                  "#repeat",
                                  "#jumping, #running, #shake, #standing",
                                  "#jumping, #running, #shake, #standing",
                                  "#jumping, #running, #shake, #standing",
                                  "#end_repeat",                            
                                  "#end",
                                ];
  var drop_picname_page11 = ["blank","blank","blank","blank","blank","blank","blank"];

  $( "#runbutton_page11" ).hide()

  $(".program2").each(function(index, element){
    $(element).droppable({
      accept: accept_list_page_repeat[index],
      out: function(event,ui){
        $(this).droppable("option", "accept", accept_list_page_repeat[index]);
        ui.draggable.data("dropped", false);
        drop_picname_page11[index] = "blank";
        if(drop_picname_page11[0] == "begin" && drop_picname_page11[6] == "end")
            $( "#runbutton_page11" ).show()
        else
            $( "#runbutton_page11" ).hide()
      },     
      drop: function(event, ui) {      
        var slot_ID = element.id
        if (slot_ID == "slot-repeat" || slot_ID == "slot-end-repeat"){
          ui.draggable.addClass("bigger_repeat");
        }
        if(slot_ID == "slot-begin" || slot_ID == "slot-end"){
          ui.draggable.addClass("bigger_extra");
        }
        ui.draggable.addClass("bigger_page11");         
        ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
        if (slot_ID == "slot-end-repeat"){
          ui.draggable.position( { of: $(this), my: 'right', at: 'right' } );
        }
        if (slot_ID == "slot-repeat"){
          ui.draggable.position( { of: $(this), my: 'left', at: 'left' } );
        }
        $(this).droppable("option", "accept", ui.draggable);
        ui.draggable.data("dropped", true);
        drop_picname_page11[index] = ui.draggable.attr("id");

        if(drop_picname_page11[0] == "begin" && drop_picname_page11[6] == "end")
            $( "#runbutton_page11" ).show()
        else
            $( "#runbutton_page11" ).hide()
      },
    });
  })

  $( "#dialog_page11" ).dialog(option_dialog);
  $( "#dialog_page11" ).dialog({
    position : { of: "#runbutton_page11", my: "center bottom", at: "center top",}
  });
  $( "#runbutton_page11" ).click(function() {
    $( "#dialog_page11" ).dialog( "open" );
    $("#picmove_page11").attr('src', '').hide()
  });

  $( "#dialog_page11" ).on('dialogclose', function(){
    $('#stillrun_page11').text("False")
  });

  var drop_picLists = {
    'jumping': 'illustrations/jumping.png',
    'running': 'illustrations/running.png',
    'shake': 'illustrations/shake.png',
    'standing': 'illustrations/standing.png'
  }

  $(".playbutton_page11").click(function(){
    $("#picmove_page11").show()  
    var drop_piclist = getPicNum(drop_picname_page11, 2, 5);
    var end = 0;
    if(drop_picname_page11[1] == "repeat" && drop_picname_page11[5] == "end_repeat"){
      end = 999;
    }else{
      end = drop_piclist.length - 1;
    }     
    console.log(drop_piclist)
    $('#picmove_page11').attr('src', drop_picLists[drop_piclist[0]]);
    var i = 1;
    var counter = 0
    $("#stillrun_page11").text("True")
    function timeout(drop_piclist, i, counter, end){
      setTimeout(function(){
          if (counter == end || $("#stillrun_page11").text() == "False")
            return
          $('#picmove_page11').attr('src', drop_picLists[drop_piclist[i]])
          i++
          i %= drop_piclist.length
          counter++;
          timeout(drop_piclist, i, counter, end)
          return
      }, 1400)
    }
    timeout(drop_piclist, i, counter, end)                             
  });

  //page15
  $('#page15>.p.draggable').each(function(index, element){
    $(element).draggable({
      revert: function(event, ui) {
      var reversesticker_id = element.id
        if(reversesticker_id == "repeat" || reversesticker_id == "end_repeat"){
          $(this).data("ui-draggable").originalPosition = {              
            top: 555,
            left: originalPosition_left_repeat[index],
          }   
        }else{
          $(this).data("ui-draggable").originalPosition = {
            top: 575,
            left: originalPosition_left_repeat[index],
          }
        }                    
        return !event;
      },
      stop: function(event, ui) {
        $(this).zIndex(1);
      }
    });
  });
  var drop_picname_page15 = ["blank","blank","blank","blank","blank","blank","blank"];
  $( "#runbutton_page15" ).hide();

  $(".program3").each(function(index, element){

    $(element).droppable({
      accept: accept_list_page_repeat[index],
      out: function(event,ui){
        $(this).droppable("option", "accept", accept_list_page_repeat[index]);
        ui.draggable.data("dropped", false);
        drop_picname_page15[index] = "blank";
        if(drop_picname_page15[0] == "begin" && drop_picname_page15[6] == "end")
            $( "#runbutton_page15" ).show()
        else
            $( "#runbutton_page15" ).hide()
      },
    
      drop: function(event, ui) {      
        var slot_ID = element.id
        if (slot_ID == "slot-repeat" || slot_ID == "slot-end-repeat"){
          ui.draggable.addClass("bigger_repeat");
        }
        if(slot_ID == "slot-begin" || slot_ID == "slot-end"){
          ui.draggable.addClass("bigger_extra");
        }
        ui.draggable.addClass("bigger_page11");         
        ui.draggable.position( { of: $(this), my: 'center', at: 'center' } );
        if (slot_ID == "slot-end-repeat"){
          ui.draggable.position( { of: $(this), my: 'right', at: 'right' } );
        }
        if (slot_ID == "slot-repeat"){
          ui.draggable.position( { of: $(this), my: 'left', at: 'left' } );
        }
        $(this).droppable("option", "accept", ui.draggable);
        ui.draggable.data("dropped", true);
        drop_picname_page15[index] = ui.draggable.attr("id");
        if(drop_picname_page15[0] == "begin" && drop_picname_page15[6] == "end")
            $( "#runbutton_page15" ).show()
        else
            $( "#runbutton_page15" ).hide()
      },
    });
  })

  $( "#dialog_page15" ).dialog(option_dialog);
  $( "#dialog_page15" ).dialog({
    position : { of: "#runbutton_page15", my: "center bottom", at: "center top",}
  });
  $( "#runbutton_page15" ).click(function() {
    $( "#dialog_page15" ).dialog( "open" );
    $("#picmove_page15").attr('src', '').hide()
  });

  $( "#dialog_page15" ).on('dialogclose', function(){
    $('#stillrun_page15').text("False")
  });

  $(".playbutton_page15").click(function(){
    //$(".move").hide();     
    $("#picmove_page15").show()  
    var drop_piclist = getPicNum(drop_picname_page15, 2, 5);

    var end = drop_piclist.length - 1;
    if(drop_picname_page15[1] == "repeat" && drop_picname_page15[5] == "end_repeat"){
      end = 3 * drop_piclist.length - 1; 
    }
    console.log(drop_piclist)
    $('#picmove_page15').attr('src', drop_picLists[drop_piclist[0]]);
    var i = 1;
    var counter = 0
    $("#stillrun_page15").text("True")
    function timeout(drop_piclist, i, counter, end){
      setTimeout(function(){
          if (counter == end || $("#stillrun_page15").text() == "False")
            return
          $('#picmove_page15').attr('src', drop_picLists[drop_piclist[i]])
          i++
          i %= drop_piclist.length
          counter++;
          timeout(drop_piclist, i, counter, end)
          return
      }, 1400)
    }
    timeout(drop_piclist, i, counter, end)
  });
});

function getPicNum(drop_picname, start, end){
  var result = [];
  for(var i = start; i < end; i++){
    if(drop_picname[i] != 'blank'){
      result.push(drop_picname[i]);
    }
  } 
  return result;
}