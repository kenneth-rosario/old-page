confirm("Are you ready for awesomness?");
$(document).on("click","#r2deep-selector",function(){
    $('html, body').animate({
        scrollTop: $("#R2DEEP").offset().top
    }, 1000);
});
$(document).on("click","#LAP-selector",function(){
	$('html, body').animate({
        scrollTop: $("#LAP").offset().top
    }, 1000);
});
$(document).on("click","#dance-selector",function(){
	$('html, body').animate({
        scrollTop: $("#Dance").offset().top
    }, 1000);
});
$(document).on("click","#about-selector",function(){
	$('html, body').animate({
        scrollTop: $("#About").offset().top
    }, 1000);
});
$(document).on("click","#Cine",function(){
	$('html, body').animate({
        scrollTop: $("#Music").offset().top
    }, 1000);
});