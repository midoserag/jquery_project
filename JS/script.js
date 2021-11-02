


let aboutOffsetTop = $("#about").offset().top;


$(window).scroll(function(){

    let wScroll = $(window).scrollTop();
    
    if(wScroll > aboutOffsetTop ){

        $("#main-nav").css("backgroundColor" , "rgba(0,0,0,0.7)");
        $("#btnUp").fadeIn(500);
    }

    else{

        $("#main-nav").css("backgroundColor" , "transparent");
        $("#btnUp").fadeOut(500);
    } 

});


$("#btnUp").click(function(){

    $("html,body").animate( {scrollTop:0}, 1500);

});



$("a[href^='#']").click(function(){

    let aHref = $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate( {scrollTop:sectionOffset}, 900);

});



$("#sideBarToggle").click(function(){

    let colorsBoxWidth = $("#colorsBox").innerWidth();

    if( $("#sideBar").css("left") == "0px" ){

        $("#sideBar").animate({left:`-${colorsBoxWidth}`} , 800);
    }

    else{

        $("#sideBar").animate({left:0} , 800);

    }

});


$(".color-item").eq(0).css("backgroundColor" , "red");
$(".color-item").eq(1).css("backgroundColor" , "brown");
$(".color-item").eq(2).css("backgroundColor" , "orange");
$(".color-item").eq(3).css("backgroundColor" , "green");
$(".color-item").eq(4).css("backgroundColor" , "blue");
$(".color-item").eq(5).css("backgroundColor" , "fuchsia");


$(".color-item").click(function(){

    let bgColor = $(this).css("backgroundColor");
    $(".change").css("color" , bgColor);

});


$(document).ready(function(){

    $("#loading").fadeOut(3000 , function(){

        $("body").css("overflow" , "auto");

    }); 

});

