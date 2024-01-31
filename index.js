function citySearch(event){
    event.preventDefault();
    let h1 = document.querySelector("h1");
    let searchEngine = document.querySelector(".search-form-input");
    h1.innerHTML = searchEngine.value;
}
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", citySearch);
