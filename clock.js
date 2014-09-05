var canvas, context;

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.oRequestAnimationFrame ||
          function(callback) {
            window.setTimeout(callback, 1000 / 60);
          };

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
		context.font = canvas.height / 2 + "px Times New Roman";
		context.textAlign = "center";
		context.textBaseline = "middle";
		
	}
}

function animate() {
	window.requestAnimationFrame(animate);

	context.clearRect(0,0,canvas.width, canvas.height);
	context.fillText(new Date().toTimeString().substr(0, 8), canvas.width / 2, canvas.height / 2);
}