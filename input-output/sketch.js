// Functions for Drawing

function setup () {
	createCanvas(windowWidth, windowHeight);
}

function draw () {
	stroke(255);
	if (mouseIsPressed === true) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	} 
}

// Save button to download image
var saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', function (){
	save('myCanvas.jpg');
})