$("document").ready(function(){
    $(".ik").css("background-color", "red");
    
    $('p:last').css("color", "blue");
    
    $("#word").bind('mouseover', mouseOverTrue).bind('mouseout', mouseOverFalse);
});

function mouseOverTrue()
{
    $("#stuff").html("You are on my favorite word");
}
