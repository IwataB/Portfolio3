$("document").ready(function(){
    $(".ik").css("background-color", "red");
    
    $('.mouseText').css("color", "blue");
    
    $(".mouseDetect").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h2").bind('click', click).bind('dblclick', doubleclick);
    
    $(".changeToText").bind('click', changeToText);
    
    $(".changeToHtml").bind('click', changeToHtml);
});

function mouseOverMe(){
    $(".mouseText").html("Back off fool!");
}

function mouseOutMe(){
    $(".mouseText").html("Come at me bro!");
}

function click(){
    $("h2").html("Double-Click me");
    
    $("h2").unbind('click');
}

function doubleclick(){
    $("h2").html("Why are you listening to a website you twit?");
    
    $("h2").unbind('dblclick').bind('click', clickv2);
}

function clickv2(){
    $("h2").html("Stop clicking me you twit!");
    
    $("h2").unbind('click').bind('click', clickv3);
}

function clickv3(){
    $("h2").html("What? You're still here? A persistant one you are...");
    
    $("h2").undbind('click').bind('click', clickv4);
}

function clickv4(){
    $("h2").html("Click the letter I");
    
    $("h2").unbind('click');
    
    $("h1").bind('click', clickv5);
    
    $("h1").html("Still listening to websites I see... Get a hobby");
}

function changeToText(){
    $(".changed").text("<h2>See my skillz?</h2>");
}

function changeToHtml(){
    $(".changed").html("<h2>See my skillz?</h2>");
}