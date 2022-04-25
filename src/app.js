let apiKey = "1d81c247d22842a0bce17c833b8a5ff0";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=${units}`;

// console.log(apiUrl);

function displayTemperature(response) {
  console.log(response);
  let temp = Math.round(response.data.main.temp);
  let city = response.data.name;
  let country = response.data.sys.country;
  let description = response.data.weather[0].description;
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  document.querySelector("#main-temperature").innerHTML = temp;
  document.querySelector("#city-name").innerHTML = `${city}, ${country}`;
  document.querySelector("#description").innerHTML = description;
  document.querySelector("#wind").innerHTML = `${wind} km/h`;
  document.querySelector("#humidity").innerHTML = `${humidity} %`;
}

axios.get(apiUrl).then(displayTemperature);
