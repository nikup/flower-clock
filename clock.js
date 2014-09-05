var canvas, context;

function init() {
	canvas = document.getElementById("clock");
	context = canvas.getContext("2d");

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var img = new Image;
	img.src = 'background.jpg';

	img.onload = function() {
		var pat = context.createPattern(img,"repeat");
		context.fillStyle = pat;
		context.font = "320px Georgia bold";
		context.textAlign = "center";
		context.textBaseline = "middle";
		
	}
}

function animate() {
	requestAnimationFrame(animate);

	context.clearRect(0,0,canvas.width, canvas.height);
	context.fillText(new Date().toTimeString().substr(0, 8),
		canvas.width / 2, canvas.height / 2);
}