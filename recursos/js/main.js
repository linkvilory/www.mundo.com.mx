$(document).ready(function(){
	$("#actionVideo").click(function(){

		$(".mainVideo.active")[0].pause();
		var current = $(".mainVideo.active")[0].currentTime;
		

		var video = getRandomVideo();

		console.log(current);
		console.log(video);

		$('.mainVideo'+'.'+video)[0].pause();
		$('.mainVideo'+'.'+video)[0].currentTime = current;
		$('.mainVideo'+'.'+video)[0].pause();

		$(".mainVideo.active").css("display","none");
		$(".mainVideo.active").removeClass("active");
		$('.mainVideo'+'.'+video)[0].play();
		$('.mainVideo'+'.'+video).css("display","block");
		$('.mainVideo'+'.'+video).addClass("active");
		

	});
});

function getRandomVideo(){

	var x = Math.floor((Math.random() * 5));
	var arrayFiles = ["uno", "dos", "tres", "cuatro", "cinco"];
	return arrayFiles[x].toString();

}