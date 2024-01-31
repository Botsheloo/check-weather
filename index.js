function refreshWeather(response){
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.city;

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