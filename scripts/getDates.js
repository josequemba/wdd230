
//Getting current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentDate.getUTCFullYear();

//Getting the las modification date and time
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

/* //Getting location
if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("location").textContent = data.features[0].context.map(component => component.text).join(", ");
                document.getElementById("location").textContent = latitude;
            })
            .catch(error => {
                console.error("Error fetching address:", error);
            });
    }, function(error) {
        console.error("Error getting location:", error.message);
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}

// get the temperature
var temperatureCelsius;
const apiKey = 'OPENWEATHERMAP_API_KEY';
const latitude = navigator.geolocation.getCurrentPosition.latitude;
const longitude = navigator.geolocation.getCurrentPosition.longitude;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        temperatureKelvin = data.main.temp;
        temperatureCelsius = temperatureKelvin; // Convert temperature to Celsius temperatureKelvin - 273.15
        document.getElementById("temperature").textContent = `${temperatureCelsius}`;
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
 */

//get visited times
if (localStorage.getItem('visitCount')) {
    let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', visitCount);
} else {
    localStorage.setItem('visitCount', 1);
}
const visitCount = localStorage.getItem('visitCount');
document.getElementById("pagevisits").textContent = `Page Visits: ${visitCount}`;
