$(document).ready(function(){

//Click to see the mobile nav

$('#hamburger').on('click', function (){
	console.log('hamburger was clicked');
	$('#mobileNav').slideToggle("fast", "linear");
	});
/*
//Click to see "About"

$('#about').on('click', function (){
	console.log('About was clicked');
	$('#about-us').slideDown("slow");
	});
*/

//Show tooltip on hover
/*
$('.special-img').tooltipsy();
*/

//Click to "See More" services

$('#button-more').on('click', function(){
	console.log('button-more was clicked');
	$('#services2').slideToggle("slow");
	});

//Click to see solo badger & hide rest

$('#button1').on('click', function(){
	console.log('button1 was clicked');
	$('#badger-result1').fadeIn("fast", "linear");
	$('#badger-text1').fadeIn("slow", "linear");
	$('#order-button1').fadeIn("slow", "linear");
	$('img#single-badger').fadeIn("slow", "linear");
	});


$('#button1').on('click', function(){
	$('#badger-text2, #badger-text3').hide();
	$('#badger-result2, #badger-result3').hide();
	$('#order-button2, #order-button3').hide();
	$('img#double-badger, img#quadruple-badger').hide();
	$('img#single-badger-clear, #badger-text-clear').hide();
	});

//Click to see double badgers & hide rest

$('#button2').on('click', function(){
	$('#badger-text2').fadeIn("slow", "linear");
	$('#badger-result2').fadeIn("fast", "linear");
	$('#order-button2').fadeIn("slow", "linear");
	$('img#double-badger').fadeIn("slow", "linear");
	});

$('#button2').on('click', function(){
	$('#badger-text1, #badger-text3').hide();
	$('#badger-result1, #badger-result3').hide();
	$('#order-button1, #order-button3').hide();
	$('img#single-badger, img#quadruple-badger').hide();
	$('img#single-badger-clear, #badger-text-clear').hide();
	});

//Click to see quadruple badgers & hide rest

$('#button3').on('click', function(){
	$('#badger-result3').fadeIn("fast", "linear");
	$('#badger-text3').fadeIn("slow", "linear");
	$('#order-button3').fadeIn("slow", "linear");
	$('img#quadruple-badger').fadeIn("slow", "linear");
	});

$('#button3').on('click', function(){
	$('#badger-text1, #badger-text2').hide();
	$('#badger-result1, #badger-result2').hide();
	$('#order-button1, #order-button2').hide();
	$('img#double-badger, img#single-badger').hide();
	$('img#single-badger-clear, #badger-text-clear').hide();
	});


//If Button1 is hovered, highlight it + de-highlight 2 & 3

$('#button1').hover(function(){
	$(this).toggleClass('highlighted');
	if($(this).hasClass('highlighted')) 

	{

	$('#button2, #button3').removeClass('highlighted2 highlighted3');

	}
});

//If Button1 is clicked, highlight it + de-click 2 & 3
$('#button1').on('click', function(){
	$(this).toggleClass('highlighted');

	if($(this).hasClass('highlighted')) 

	{
	$('#button2, #button3').removeClass('highlighted2 highlighted3');
	}
});

//If Button2 is hovered, highlight it + de-highlight 1 & 3
$('#button2').hover(function(){
	$(this).toggleClass('highlighted2');
	if($(this).hasClass('highlighted2')) 

	{
	$('#button1, #button3').removeClass('highlighted highlighted3');
	}

});

//If Button2 is clicked, highlight it + de-click 1 & 3, and

$('#button2').on('click', function(){
	$(this).toggleClass('highlighted2');
	if($(this).hasClass('highlighted2')) 

	{
	$('#button1, #button3').removeClass('highlighted highlighted3');
	}
});

//If Button3 is clicked, highlight it + de-click 1 & 2, and

$('#button3').on('click', function(){
	$(this).toggleClass('highlighted3');
	if($(this).hasClass('highlighted3')) 

	{
	$('#button1, #button2').removeClass('highlighted highlighted2');
	}
});

$('#button3').hover(function(){
	$(this).toggleClass('highlighted3');
	if($(this).hasClass('highlighted3')) 

	{
	$('#button1, #button2').removeClass('highlighted highlighted2');
	}
});


});
