$(document).ready(function(){

	$('#actionVideo').on({ 'touchstart' : function(){ 
		$("#actionVideo").css({
			"display":"none",
			"visibility":"hidden"
		});
		$(".mainVideo.active")[0].pause();
		var current = $(".mainVideo.active")[0].currentTime;

		var video = getRandomVideo();

		//console.log(current);
		//console.log(video);

		$(".mainVideo.active").css("display","none");
		$(".mainVideo.active").removeClass("active");
		$('.mainVideo'+'.'+video).css("display","block");
		$('.mainVideo'+'.'+video).addClass("active");
		$('.mainVideo'+'.'+video)[0].currentTime = 0;
		$('.mainVideo'+'.'+video)[0].play();
	} });

	$("#actionVideo").click(function(){
		$("#actionVideo").css({
			"display":"none",
			"visibility":"hidden"
		});
		$(".mainVideo.active")[0].pause();
		var current = $(".mainVideo.active")[0].currentTime;

		var video = getRandomVideo();

		//console.log(current);
		//console.log(video);

		$(".mainVideo.active").css("display","none");
		$(".mainVideo.active").removeClass("active");
		$('.mainVideo'+'.'+video).css("display","block");
		$('.mainVideo'+'.'+video).addClass("active");
		$('.mainVideo'+'.'+video)[0].currentTime = 0;
		$('.mainVideo'+'.'+video)[0].play();

	});

	$(".dos").bind("ended", function() {
		$(this).css("display","none");
		$(this).removeClass("active");
		$('.mainVideo.uno').css("display","block");
		$('.mainVideo.uno').addClass("active");
		$('.mainVideo.uno')[0].currentTime = 0;
		$('.mainVideo.uno')[0].play();
		$("#actionVideo").css({
			"display":"block",
			"visibility":"visible"
		});
	});
	$(".tres").bind("ended", function() {
		$(this).css("display","none");
		$(this).removeClass("active");
		$('.mainVideo.uno').css("display","block");
		$('.mainVideo.uno').addClass("active");
		$('.mainVideo.uno')[0].currentTime = 0;
		$('.mainVideo.uno')[0].play();
		$("#actionVideo").css({
			"display":"block",
			"visibility":"visible"
		});
	});
	$(".cuatro").bind("ended", function() {
		$(this).css("display","none");
		$(this).removeClass("active");
		$('.mainVideo.uno').css("display","block");
		$('.mainVideo.uno').addClass("active");
		$('.mainVideo.uno')[0].currentTime = 0;
		$('.mainVideo.uno')[0].play();
		$("#actionVideo").css({
			"display":"block",
			"visibility":"visible"
		});
	});
	$(".cinco").bind("ended", function() {
		$(this).css("display","none");
		$(this).removeClass("active");
		$('.mainVideo.uno').css("display","block");
		$('.mainVideo.uno').addClass("active");
		$('.mainVideo.uno')[0].currentTime = 0;
		$('.mainVideo.uno')[0].play();
		$("#actionVideo").css({
			"display":"block",
			"visibility":"visible"
		});
	});
});

function getRandomVideo(){

	var x = Math.floor((Math.random() * 4));
	var arrayFiles = ["dos", "tres", "cuatro", "cinco"];
	return arrayFiles[x].toString();

}