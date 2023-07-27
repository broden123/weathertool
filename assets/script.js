var curcity = document.getElementById("main-weather-head");
var curcond = document.getElementById("cur-condition");
var curtemp = document.getElementById("cur-temp");
var curwind = document.getElementById("cur-wind");
var curhumid = document.getElementById("cur-humid");
var searchBtn = document.getElementById("search-btn");
var searchText = document.getElementById("search-history");
var searchHistory = [];

$(document).ready(function () {
  createTable();
});

searchBtn.addEventListener("click", function () {
  //grab text input to feed into api
  event.preventDefault();
  var textInput = document.getElementById("city-input");
  var city = $(textInput).val();
  fetchApi(city);
  //send input to local storage
  var data = localStorage.getItem("Search-History");
  var searchHistory = data ? JSON.parse(data) : [];
  localStorage.getItem("Search-History");
  searchHistory.push(city);
  //filter search history to prevent duplicates then set to local storage
  var filteredSearch = searchHistory.filter((element, index) => {
    return searchHistory.indexOf(element) === index;
  });
  localStorage.setItem("Search-History", JSON.stringify(filteredSearch));
});
function fetchApi(city) {
  // fetch api and return response onto page
  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=44203954d378b4691a519992a5653548"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      curcity.innerText = "Current Weather in " + data.city.name;
      curcond.innerText =
        "Current Condition: " + data.list[0].weather[0].description;
      curtemp.innerText = "Current Temp: " + data.list[0].main.temp + "°F";
      curwind.innerText = "Current Wind: " + data.list[0].wind.speed + " MPH";
      curhumid.innerText =
        "Current Humidity: " + data.list[0].main.humidity + "%";
      document.getElementById("1-day").innerText = data.list[4].dt_txt;
      document.getElementById("1-cond").innerText =
        "Condition: " + data.list[4].weather[0].description;
      document.getElementById("1-temp").innerText =
        "Temp: " + data.list[4].main.temp + "°F";
      document.getElementById("1-wind").innerText =
        "Wind: " + data.list[4].wind.speed + " MPH";
      document.getElementById("1-humid").innerText =
        "Humidity: " + data.list[4].main.humidity + "%";
      document.getElementById("2-day").innerText = data.list[12].dt_txt;
      document.getElementById("2-cond").innerText =
        "Condition: " + data.list[12].weather[0].description;
      document.getElementById("2-temp").innerText =
        "Temp: " + data.list[12].main.temp + "°F";
      document.getElementById("2-wind").innerText =
        "Wind: " + data.list[12].wind.speed + " MPH";
      document.getElementById("2-humid").innerText =
        "Humidity: " + data.list[12].main.humidity + "%";
      document.getElementById("3-day").innerText = data.list[20].dt_txt;
      document.getElementById("3-cond").innerText =
        "Condition: " + data.list[20].weather[0].description;
      document.getElementById("3-temp").innerText =
        "Temp: " + data.list[20].main.temp + "°F";
      document.getElementById("3-wind").innerText =
        "Wind: " + data.list[20].wind.speed + " MPH";
      document.getElementById("3-humid").innerText =
        "Humidity: " + data.list[20].main.humidity + "%";
      document.getElementById("4-day").innerText = data.list[28].dt_txt;
      document.getElementById("4-cond").innerText =
        "Condition: " + data.list[28].weather[0].description;
      document.getElementById("4-temp").innerText =
        "Temp: " + data.list[28].main.temp + "°F";
      document.getElementById("4-wind").innerText =
        "Wind: " + data.list[28].wind.speed + " MPH";
      document.getElementById("4-humid").innerText =
        "Humidity: " + data.list[28].main.humidity + "%";
      document.getElementById("5-day").innerText = data.list[36].dt_txt;
      document.getElementById("5-cond").innerText =
        "Condition: " + data.list[36].weather[0].description;
      document.getElementById("5-temp").innerText =
        "Temp: " + data.list[36].main.temp + "°F";
      document.getElementById("5-wind").innerText =
        "Wind: " + data.list[36].wind.speed + " MPH";
      document.getElementById("5-humid").innerText =
        "Humidity: " + data.list[36].main.humidity + "%";
    });
}
function createTable() {
  var data = localStorage.getItem("Search-History");
  var searchHistory = data ? JSON.parse(data) : [];
  var filteredSearch = searchHistory.filter((element, index) => {
    return searchHistory.indexOf(element) === index;
  });
  for (var i = 0; i < filteredSearch.length; i++) {
    console.log(filteredSearch[i]);
    var create = document.createElement("button");
    create.setAttribute("id", "search-" + i);
    create.setAttribute("class", "justify-content-center");
    create.textContent = filteredSearch[i];
    searchText.appendChild(create);
    //click on searched history to display data again
    create.addEventListener("click", function () {
      console.log(this.textContent);
      var city = this.textContent;
      fetchApi(city);
    });
  }
}
