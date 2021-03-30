var button1 = document.querySelector('#multiply');
var button2 = document.querySelector('#reset');
var container = document.querySelector('#container');
var counter = document.querySelector('#count');
var red = document.querySelector('#red');
var yellow = document.querySelector('#yellow');
var blue = document.querySelector('#blue');
var black = document.querySelector('#black');


button1.addEventListener('click', function(event){
	console.log(event, event.target);
	var smiley = document.querySelector('.smiley');
	var smileyClone = smiley.cloneNode(true);
	smileyClone.classList.add('.smileys');
	smileyClone.style.visibility = 'visible';

	smileyClone.style.top = (80 * Math.random()) + '%';
	smileyClone.style.left = (90 * Math.random()) + '%';
	
	container.appendChild(smileyClone);

	var smileyClone = container.querySelectorAll('.smiley');
	var counter = smileyClone.length - 1;
	count.innerHTML = counter;
});

button2.addEventListener('click', function(event){
	console.log(event, event.target);	
	var smileyClone = container.querySelectorAll('.smileys');

	smileyClone.forEach(function(){
		smileyClone.remove();
	})

	var smileyClone = container.querySelectorAll('.smiley');
	var counter = smileyClone.length - 1;
	count.innerHTML = counter;
});

container.addEventListener('click', function(event){
	console.log(event, event.target);
	if(event.target.tagName = '.smileys'){
		event.target.remove();
	}

	var smileyClone = container.querySelectorAll('.smiley');
	var counter = smileyClone.length - 1;
	count.innerHTML = counter;
});

red.addEventListener('click', function(event){
	var smileyClone = container.querySelectorAll('svg');
	smileyClone.forEach(function(svg){
		svg.style.fill = 'red';
	})	
});

yellow.addEventListener('click', function(event){
	var smileyClone = container.querySelectorAll('svg');
	smileyClone.forEach(function(svg){
		svg.style.fill = 'yellow';
	})
});

blue.addEventListener('click', function(event){
	var smileyClone = container.querySelectorAll('svg');
	smileyClone.forEach(function(svg){
		svg.style.fill = 'blue';
	})	
});

black.addEventListener('click', function(event){
	var smileyClone = container.querySelectorAll('svg');
	smileyClone.forEach(function(svg){
		svg.style.fill = 'black';
	})	
});
