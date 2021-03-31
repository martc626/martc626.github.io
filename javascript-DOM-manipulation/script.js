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
	smileyClone.classList.add('smileys');
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

	smileyClone.forEach(function(smiley){
		smiley.remove();
	})

	var smileyClone = container.querySelectorAll('.smiley');
	var counter = smileyClone.length - 1;
	count.innerHTML = counter;
});

container.addEventListener('click', function(event){
	console.log(event, event.target);
	if(event.target.classList.contains('smileys')){
		event.target.remove();
	}

	var smileyClone = container.querySelectorAll('.smiley');
	var counter = smileyClone.length - 1;
	count.innerHTML = counter;
});

container.addEventListener('mouseenter', function(event){
	console.log(event, event.target);
	document.querySelectorAll('.smileys').forEach(function(zoom){
		zoom.style.height = '130px';
		zoom.style.opacity = '0.3';
	})
})

container.addEventListener('mouseleave', function(event){
	console.log(event, event.target);
	document.querySelectorAll('.smileys').forEach(function(zoom){
		zoom.style.height = '100px';
		zoom.style.opacity = '1';
	})
})

red.addEventListener('click', function(event){
	console.log(event, event.target);
	document.querySelectorAll('.smileys .st0').forEach(function(el){
		el.style.fill = 'red';
	})
});

yellow.addEventListener('click', function(event){
	console.log(event, event.target);
	document.querySelectorAll('.smileys .st0').forEach(function(el){
		el.style.fill = 'yellow';
	})
});

blue.addEventListener('click', function(event){
	console.log(event, event.target);
	document.querySelectorAll('.smileys .st0').forEach(function(el){
		el.style.fill = 'blue';
	})
});

black.addEventListener('click', function(event){
	console.log(event, event.target);
	document.querySelectorAll('.smileys .st0').forEach(function(el){
		el.style.fill = 'black';
	})	
});
