function refreshWeather(response){
  let temperatureElement = document.querySelector(".temperature");
  let h1Element = document.querySelector("h1");
  let conditionElement = document.querySelector(".condition");
  let windElement = document.querySelector(".wind");
  let humidityElement = document.querySelector(".humidity");
  let timeElement = document.querySelector(".time");
  let date = new Date(response.data.time * 1000);
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let minutes = date.getMinutes();

  if (minutes < 10){
    minutes = `0${minutes}`;
  }

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  h1Element.innerHTML = response.data.city;
  conditionElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = response.data.wind.speed;
  humidityElement.innerHTML = response.data.temperature.humidity;
  timeElement.innerHTML = `${days[date.getDay()]} ${date.getHours()}:${minutes}`;
}
function searchCity(city){
  //make api call and update the interface
  let apiKey = "o2e4e95f318btbd0334afc45b9074ea8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function citySearch(event){
    event.preventDefault();
    let searchEngine = document.querySelector(".search-form-input");
    searchCity(searchEngine.value);
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", citySearch);
searchCity("Seoul");