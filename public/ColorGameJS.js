

$("#header").delay(1000).fadeOut(5000)

$(window).click(function() {
    $("#overlay").fadeOut()
});

$("path, circle").click(function(event){
    $("#overlay").fadeIn()
    if(states[$(this).attr('id')]!=undefined){
        $("#overlay h1").text(states[$(this).attr('id')].name)
        $("#overlay p").text(states[$(this).attr('id')].text)
    }else{
        $("#overlay h1").text($(this).attr('id'))
    }
    event.stopPropagation();
})

$(document).mousemove(function(e) {
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

$("path, circle").hover(function(e) {
    $('#info-box').css('display','block');
    if(states[$(this).attr('id')]!=undefined){
        $('#info-box').html(states[$(this).attr('id')].name);
    }else{
        $('#info-box').html($(this).attr('id'));
    }
  });
  
$("path, circle").mouseleave(function(e) {
    $('#info-box').css('display','none');
});