let apiKey = "1d81c247d22842a0bce17c833b8a5ff0";
let units = "metric";

//formates date from timestamp getted from weather api
function formateDate(timestamp) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let day = days[date.getDay()];
  return `Last update: ${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  //   console.log(response);
  let temp = Math.round(response.data.main.temp);
  let city = response.data.name;
  let country = response.data.sys.country;
  let description = response.data.weather[0].description;
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  let iconEl = document.querySelector("#icon");

  iconEl.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconEl.setAttribute("alt", description);
  document.querySelector("#date").innerHTML = formateDate(response.data.dt);
  document.querySelector("#main-temperature").innerHTML = temp;
  document.querySelector("#city-name").innerHTML = `${city}, ${country}`;
  document.querySelector("#description").innerHTML = description;
  document.querySelector("#wind").innerHTML = `${wind} km/h`;
  document.querySelector("#humidity").innerHTML = `${humidity} %`;
}

function search(city) {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input").value;
  search(searchInput);
}

search("Paris");
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);
