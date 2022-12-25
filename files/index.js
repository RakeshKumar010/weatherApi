let text = document.getElementById('text');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let temp_max = document.getElementById('temp_max');
let temp_min = document.getElementById('temp_min');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let country = document.getElementById('country');
let day = document.getElementById('day');
let time = document.getElementById('time');


async function funName() {

  let cityName = text.value;

  let key = "43393d2a620b139e118eadb20ce6b044";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;

  let promise = await fetch(api);
  let v1 = await promise;
  let json1 = await v1.json();


  //getDay
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  //getMonth
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



  const d = new Date();
  city.innerHTML = `${json1.name},${json1.sys.country}`;
  temp.innerHTML = `Temperature :- ${Math.floor(json1.main.temp - 273.15)}°C`;
  temp_max.innerHTML = `Temp_max :- ${Math.floor(json1.main.temp_max - 265.15)}°C`;
  temp_min.innerHTML = `Temp_min :- ${Math.floor(json1.main.temp_min - 280.15)}°C `;
  humidity.innerHTML = `humidity :- ${json1.main.humidity}%`;
  wind.innerHTML = `Wind :- ${json1.wind.speed} km/h`;
  country.innerHTML = `Country :- ${json1.sys.country}`;

  day.innerHTML = `Day :- ${weekday[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
  if (d.getHours < 12) {
    time.innerHTML = `Time :- ${d.getHours()}:${d.getMinutes()} am`;
  } else {
    time.innerHTML = `Time :- ${d.getHours()}:${d.getMinutes()} pm`;
  }






}