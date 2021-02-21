$("#header").delay(500).fadeOut("slow")

$(window).click(function() {
    $("#overlay").fadeOut()
});

$("path").click(function(event){
    $("#overlay").fadeIn()
    event.stopPropagation();
})