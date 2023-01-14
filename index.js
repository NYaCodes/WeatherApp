let now = new Date();

let h2 = document.querySelector("h2");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

h2.innerHTML = ` ${date}, ${hours}:${minutes}, `;

function search(city) {
  //searchInput.value
  let apiKey = "f5029b784306910c19746e40c14d6cd3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSearch(e) {
  e.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  search(searchInput.value);
}

let form = document.querySelector("#search-form");

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
