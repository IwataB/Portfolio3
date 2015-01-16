$("document").ready(function(){
    $(".ik").css("background-color", "red");
    
    //$('body').css('text-align',"center");
    
    $(".mouseText").css("color", "blue");
    
    $("p:last").css("color", "blue");
    
    $(".mouseDetect").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);
    
    $("h2").bind('click', click).bind('dblclick', doubleclick);
    
    $(".changeToText").bind('click', changeToText);
    
    $(".changeToHtml").bind('click', changeToHtml);
    
    $('#randPara').bind('click',addAPara);
    
    $(".addAPara").bind('click', addAPara);
    
    $(".removeAPara").bind('click', removeAPara);
    
    $('#hide').bind('click', hideThePage);
    $('#show').bind('click',showThePage);
    $('#show').css('visibility','hidden');
    
    
    $('#accordion').accordion({header:"h4"});
});

function mouseOverMe(){
    $(".mouseText").html("Mouse on");
}

function mouseOutMe(){
    $(".mouseText").html("Mouse off");
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

function changeToText(){
    $(".changed").text("<h2>See?</h2>");
}

function changeToHtml(){
    $(".changed").html("<h2>See?</h2>");
}

function hideThePage(){
    $('#show').css('visibility','visible');
    $('div').hide('slide',{},2500);
    $('#show').show('fold',{},2500);
}

function showThePage(){
    $('div').show('fold',{},2500);
    $('#show').hide('puff',{},2500);
}

function addAPara(){
    $('#randPara').append('<p>HI!!!!</p>');
}
function removeAPara(){
    $('#rendPara p:last').remove();
}