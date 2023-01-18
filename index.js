form.addEventListener("submit", handleSearch);

function displayTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-input");
  let cityElement = document.querySelector("h1");
  let description = document.querySelector("#temperature-description");
  temperatureElement.innerHTML = `${temperature}°C`;
  cityElement.innerHTML = response.data.name;
  description.innerHTML = response.data.weather[0].description;
}
let apiKey = "f5029b784306910c19746e40c14d6cd3";
let units = "metric";
let city = "sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

axios.get(`${apiUrl}&appid=${apiKey}`).then(displayTemperature);

let button = document.querySelector("#current-location-button");
button.addEventListener("click", getCurrentLocation);

searchCity("New York");
