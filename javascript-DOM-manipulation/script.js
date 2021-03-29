var button1 = document.querySelector('#multiply');
var button2 = document.querySelector('#reset');
var container = document.querySelector('#container');
var counter = document.querySelector('#count');
var red = document.querySelector('#red');
var yellow = document.querySelector('#yellow');
var blue = document.querySelector('#blue');
var black = document.querySelector('#blue');


button1.addEventListener('click', function(event){
	console.log(event, event.target);
	var image = document.createElement('svg');
	image.src = 'smiley.svg';
 	
 	image.style.top = (80 * Math.random()) + '%';
	image.style.left = (90 * Math.random()) + '%';

	container.appendChild(image);

	var images = container.querySelectorAll('svg');
	var counter = images.length;
	count.innerHTML = counter;
});

button2.addEventListener('click', function(event){
	console.log(event, event.target);
	container.innerHTML = '';	

	var images = container.querySelectorAll('svg');
	var counter = images.length;
	count.innerHTML = counter;
});

container.addEventListener('click', function(event){
	console.log(event, event.target);
	if(event.target.tagName = 'svg'){
		event.target.remove();
	}

	var images = container.querySelectorAll('svg');
	var counter = images.length;
	count.innerHTML = counter;
});

red.addEventListener('click', function(event){
	var images = container.querySelectorAll('svg');
	images.forEach(function(image){
		image.style.backgroundColor = 'red';
	})	
});

