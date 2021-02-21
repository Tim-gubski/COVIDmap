

$("#header").delay(500).fadeOut("slow")

$(window).click(function() {
    $("#overlay").fadeOut()
});

$("path").click(function(event){
    $("#overlay").fadeIn()
    if(states[$(this).attr('id')]!=undefined){
        $("#overlay h1").text(states[$(this).attr('id')].name)
        $("#overlay p").text(states[$(this).attr('id')].text)
    }else{
        $("#overlay h1").text($(this).attr('id'))
    }
    event.stopPropagation();
})

