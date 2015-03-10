$(document).ready(function(){

	$(".mainVideo.uno")[0].pause();
	$(".mainVideo.dos")[0].pause();
	$(".mainVideo.tres")[0].pause();
	$(".mainVideo.cuatro")[0].pause();
	$(".mainVideo.cinco")[0].pause();

	$(".mainVideo.uno")[0].currentTime = 0;
	$(".mainVideo.dos")[0].currentTime = 0;
	$(".mainVideo.tres")[0].currentTime = 0;
	$(".mainVideo.cuatro")[0].currentTime = 0;
	$(".mainVideo.cinco")[0].currentTime = 0;

	$(".mainVideo.uno")[0].play();
	$(".mainVideo.dos")[0].play();
	$(".mainVideo.tres")[0].play();
	$(".mainVideo.cuatro")[0].play();
	$(".mainVideo.cinco")[0].play();

	$("#actionVideo").hover(function(){

		var video = getRandomVideo();

		console.log(video);

		$(".mainVideo.active").css("display","none");
		$('.mainVideo'+'.'+video).css("display","block");
		$('.mainVideo'+'.'+video).addClass("hover");

	}, function(){

		$(".mainVideo.active").css("display","block");
		$('.mainVideo.hover').css("display","none");
		$('.mainVideo.hover').removeClass("hover");

	});

	document.addEventListener('touchstart', function(e) {
	    e.preventDefault();
	    $(".mainVideo.active").css("display","none");
		$('.mainVideo'+'.'+video).css("display","block");
		$('.mainVideo'+'.'+video).addClass("hover");
	}, false);

	});

	document.addEventListener('touchend', function(e) {
	    e.preventDefault();
	    $(".mainVideo.active").css("display","block");
		$('.mainVideo.hover').css("display","none");
		$('.mainVideo.hover').removeClass("hover");
	}, false);

	});

function getRandomVideo(){

	var x = Math.floor((Math.random() * 5));
	var arrayFiles = ["dos", "tres", "cuatro", "cinco"];
	return arrayFiles[x].toString();

}