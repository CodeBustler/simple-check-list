let dateDisplay = document.getElementById('date');
let dayDisplay = document.getElementById('day');
let date = new Date();

let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'oct',
  'Nov',
  'Dec',
];

let days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
let year = date.getFullYear();
let month = date.getMonth();
let cDate = date.getDate();
let day = date.getDay();

let currentDate = `${cDate} - ${months[month]} - ${year}`;

dateDisplay.innerHTML = currentDate;
dayDisplay.innerHTML = days[day];
