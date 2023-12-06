function getWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`).then(Response => Response.json())
        .then(out => displaydata(out))
    function displaydata(dataArray) {
        temp = Math.floor(dataArray.main.temp - 273.15)
        city = city.toUpperCase()
        result.innerHTML = `<div class="card" style="width: 100% bg-none" id="full">
                            <div class="card-header fw-bolder" id="gray">
                            
                            
                            <p class="text-center" id="temp">${temp}°C</p>

                            
                        
<center>
             <li class="list-group-item" id="city">    ${city}</li>
                            </center>
                            </div>


                            
                            </div>`
    }
}
function getLocation() {
    navigator.geolocation.getCurrentPosition(success, error)
    function success(location) {
        console.log(location.coords.latitude);
        result.innerHTML = `<div class="card" style="width: 100%" id="lon">
        

                            <div class="card-header" id="cor">Coordinates
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" id="lat">Latitude: ${location.coords.latitude}</li>
                            <li class="list-group-item" id="lati">Longitude: ${location.coords.longitude}</li>
                         
                            </ul>
                            </div>`
    }
    function error() {
        alert('device location unavailable');
    }
}