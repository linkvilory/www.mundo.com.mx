$(document).ready(function(){
	$("#actionVideo").click(function(){
		$(".mainVideo")[0].pause();
		var video = getRandomVideo();
		
		var current = $(".mainVideo")[0].currentTime;
		console.log(current);
		
		console.log(file);

		$('.mainVideo source').attr('src', file);
		$(".mainVideo")[0].load();
		$(".mainVideo")[0].pause();
		$(".mainVideo")[0].play();
	});
});

function getRandomVideo(){

	var x = Math.floor((Math.random() * 5));
	var arrayFiles = ["uno", "dos", "tres", "cuatro", "cinco"];
	return arrayFiles[x];
}