var curcity = document.getElementById("main-weather-head");
var curcond = document.getElementById("cur-condition");
var curtemp = document.getElementById("cur-temp");
var curwind = document.getElementById("cur-wind");
var curhumid = document.getElementById("cur-humid");

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=Austin&units=imperial&appid=44203954d378b4691a519992a5653548"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.city.name);
    console.log(data.list[0].weather[0].description);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].wind.speed);
    console.log(data.list[0].main.humidity);

    curcity.innerText = "Current Weather in " + data.city.name;
    curcond.innerText =
      "Current Condition: " + data.list[0].weather[0].description;
    curtemp.innerText = "Current Temp: " + data.list[0].main.temp + "°F";
    curwind.innerText = "Current Wind: " + data.list[0].wind.speed + " MPH";
    curhumid.innerText =
      "Current Humidity: " + data.list[0].main.humidity + "%";
  });
