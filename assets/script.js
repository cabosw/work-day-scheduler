//date variables
var currentDayEl = document.getElementById('currentDay');
daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


//get date data for current weekday and day of month for header content
//get current hours, necessary for colorBlock() function
const now = new Date();
currentDay = daysOfTheWeek[now.getDay()];
currentMonth = monthsOfYear[now.getMonth()];
currentDate = now.getDate();
currentDayEl.textContent = currentDay + " " + currentMonth + " " + currentDate;
currentHour = now.getHours();


//Creates an array from custom data attributes of node element
//Array makes it possible to iterate through the data-hour values
//and compare to current hour to decide styling
function colorBlock() {
	var blockHour = document.getElementsByClassName('timeBlock');
	var blockHourData = [];
	for (var i=0; i<blockHour.length; i++) {
		attr = blockHour.item(i).attributes.getNamedItem("data-hour");
		blockHourData.push(attr.value);
	}
	console.log(blockHourData.length)
	for (var i=0; i<blockHourData.length; i++) {
		if (blockHourData[i]<currentHour) {
			console.log(blockHour[i]);
			blockHour[i].classList.add("past");
		}
		if (blockHourData[i]>currentHour) {
			console.log(blockHour[i]);
			blockHour[i].classList.add('future')
		}
		if (blockHourData[i] == currentHour) {
			console.log(blockHour[i]);
			blockHour[i].classList.add('present')
		}
	}
}
colorBlock();

//retrieve any locally stored text content for each time block
var hour9 = localStorage.getItem('9');
currentHour9 = document.getElementById('9');
currentHour9.textContent = hour9;

var hour10 = localStorage.getItem('10');
currentHour10 = document.getElementById('10');
currentHour10.textContent = hour10;

var hour11 = localStorage.getItem('11');
currentHour11 = document.getElementById('11');
currentHour11.textContent = hour11;

var hour12 = localStorage.getItem('12');
currentHour12 = document.getElementById('12');
currentHour12.textContent = hour12;

var hour13 = localStorage.getItem('13');
currentHour13 = document.getElementById('13');
currentHour13.textContent = hour13;

var hour14 = localStorage.getItem('14');
currentHour14 = document.getElementById('14');
currentHour14.textContent = hour14;

var hour15 = localStorage.getItem('15');
currentHour15 = document.getElementById('15');
currentHour15.textContent = hour15;

var hour16 = localStorage.getItem('16');
currentHour16 = document.getElementById('16');
currentHour16.textContent = hour16;

var hour17 = localStorage.getItem('17');
currentHour17 = document.getElementById('17');
currentHour17.textContent = hour17;


//When save button is clicked text is stored with a key 
//matching it's corresponding time
const buttons = document.querySelectorAll('.saveBtn')
buttons.forEach(function(currentBtn){
  currentBtn.addEventListener('click', function() {
		var hour = this.id
		console.log(hour);
		var text = document.getElementById(hour).value;
		console.log(text);
		localStorage.setItem (hour, text);
	})})




