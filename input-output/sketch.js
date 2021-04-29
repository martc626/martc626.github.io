// Functions for Drawing

function setup () {
	var c = createCanvas(windowWidth, windowHeight);
	var saveButton = document.querySelector('.save-button');

	saveButton.addEventListener('click', function (){
		function save () {
			saveCanvas(c, 'myCanvas', 'jpg');
		}
	})
}

function draw () {
	stroke(255);
	if (mouseIsPressed === true) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	} 
}

// Save button to download image


