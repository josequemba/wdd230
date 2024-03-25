const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#wheather-icon");
const captionDesc = document.querySelector("figcaption");

const apiKey = '921effc51dd4e2293b4816fb9eb3d222';
const latitude = 49.74992575580052;
const longitude = 6.63691347648839;
//https://api.openweathermap.org/data/2.5/weather?lat=49.74992575580052&lon=6.63691347648839&units=imperial&appid=921effc51dd4e2293b4816fb9eb3d222

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch(link) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            //console.table(data);
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', 'cloud icon');
    captionDesc.textContent = `${desc}`;
}
