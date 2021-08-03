var apiKey = "eac6f8df8facb4e3d674b534405696df"
var searchBtn = document.querySelector("#searchBtn")
var searchCity = document.querySelector("#cityName");


///Get the forcast 
function getForcast() {
    var city = searchCity.value;
    console.log(city)

}

///Attach evenlistner to search button
searchBtn.addEventListener("click", getForcast);