var name = 'Luna';
console.log(name);

var favNumber = 6*2+1;
console.log(favNumber);

favNumber = 'thirteen';
console.log(favNumber);

var amIHungry = true;
console.log(amIHungry);

var nameLetters = ['L', 'u', 'n', 'a'];
console.log(nameLetters);

var multiData = [30*9-5+100, 'leap year?', false];
console.log(multiData);

var firstName = 'Citra Luna';
var lastName = 'Martha';
console.log(firstName,lastName);

var integers = 99+1;
console.log(integers);

console.log(nameLetters[0],nameLetters[nameLetters.length - 1]);

var maryPoppins = 'Supercalifragilisticexpialidocious';
console.log(maryPoppins.length);

console.log(firstName.length == lastName.length);

nameLetters.forEach(function(item) {
	console.log(item);
});

var time = new Date().getHours();
if (time >= 19 && time <= 21.40) {
	console.log('yep, it is between 7 - 9:40 PM');
} else {
	console.log('nope, it is not between 7 - 9:40 PM');
}

var day = new Date().getDate();
if (day === 1) {
	console.log('ugh, the monday blues~');
}
else if (day === 2) {
	console.log('it\'\s just tuesday?!??');
}
else if (day === 3) {
	console.log('hump day wednesday, can this week end?');
}
else if (day === 4) {
	console.log('thurday, so close to the weekend!!');
}
else if (day === 5) {
	console.log('friday!! finally :)');
}
else if (day === 6) {
	console.log('woot, saturday! let me laze around');
}
else (day === 7) {
	console.log('fuck, it\'\s a sunday');
}

var favResto = [
	"Genki Sushi",
	"Joe's Pizza",
	"Namaaz Dining"
];
console.log(favResto);


var pandemicStoppedMe = [
	"Go to the cinemas",
	"Hug my loved ones",
	"Travel the world"
];
console.log(pandemicStoppedMe);

var favNYCPlaces = [
	"Rice to Riches",
	"Midtown area",
	"H Mart"
];
console.log(favNYCPlaces);

var favMovies = [
	"Miracle in Cell No. 7",
	"Soul",
	"Us"
];
console.log(favMovies);

var lists = [favResto, pandemicStoppedMe, favNYCPlaces, favMovies];
console.log(lists);

lists.forEach(function(array) {
	array.forEach(function(item) {
		console.log(item);	
	});
});

var lists = [{favResto, pandemicStoppedMe, favNYCPlaces, favMovies}];
console.log(lists);
