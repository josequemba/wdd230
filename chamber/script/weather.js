/* weather */
const wlocation = document.getElementById("location");
const wtemperature = document.getElementById("temperature");
const wdescription = document.getElementById("weather-description");
const wspeed = document.getElementById("wind-speed");
const afterTomorrow = document.getElementById("after-tomorrow");
const temperatureOne = document.getElementById("temperature-one");
const temperatureTwo = document.getElementById("temperature-two");
const descriptionOne = document.getElementById("weather-description-one");
const descriptionTwo = document.getElementById("weather-description-two");
const wspeedOne = document.getElementById("wind-speed-one");
const wspeedTwo = document.getElementById("wind-speed-two");
const iconOne = document.getElementById("icon-one");
const iconTwo = document.getElementById("icon-two");
const iconThree = document.getElementById("icon-three");


const apiKey = '921effc51dd4e2293b4816fb9eb3d222';
const apiKey2 = 'a446869a0965642e8eca031517d68e74';

const dateNow = new Date();
const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = weekDay[dateNow.getDay()];

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=16&units=imperial&appid=${apiKey2}`
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

        async function apiFetch2(link) {
            try {
                const response = await fetch(link);
                if (response.ok) {
                    const data = await response.json();
                    displayResults2(data);
                    //console.table(data);
                }
            } catch (error) {
                console.error(error);
            }
        }

        apiFetch(url);
        apiFetch2(url2);

        function displayResults2(data) {
            /* prediction2 */
            temperatureOne.innerHTML = `Temperature: ${data.list[7].main.temp}&deg;F`;
            descriptionOne.innerHTML = `Description: ${data.list[7].weather[0].description}`;
            wspeedOne.innerHTML = `Wind Speed: ${data.list[7].wind.speed} m/h`;

            const iconsrc2 = `https://openweathermap.org/img/w/${data.list[7].weather[0].icon}.png`;
            iconTwo.innerHTML = `<img src="${iconsrc2}" alt="Weather Icon">`;
            /* prediction3 */
            temperatureTwo.innerHTML = `Temperature: ${data.list[15].main.temp}&deg;F`;
            descriptionTwo.innerHTML = `Description: ${data.list[15].weather[0].description}`;
            wspeedTwo.innerHTML = `Wind Speed: ${data.list[15].wind.speed} m/h`;

            const iconsrc3 = `https://openweathermap.org/img/w/${data.list[15].weather[0].icon}.png`;
            iconThree.innerHTML = `<img src="${iconsrc3}" alt="Weather Icon">`;
        }

        function displayResults(data) {
            wlocation.innerHTML = `${data.name}, ${data.sys.country}`;
            wtemperature.innerHTML = `${data.main.temp}&deg;F`;
            wdescription.innerHTML = `${data.weather[0].description}`;
            wspeed.innerHTML = `${data.wind.speed} m/h`;
            afterTomorrow.innerHTML = `${dayName}`;

            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            iconOne.innerHTML = `<img src="${iconsrc}" alt="Weather Icon">`;
        }

    }, function (error) {
        console.error("Error getting location:", error.message);
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}

/* display members */
const urlMembers = 'data/members.json';
const spotLights = document.querySelector("#spotlight-advertisements");

async function apiFetch(link) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members);
            console.table(data);
        }
    } catch (error) {
        console.error(error);
    }
}
apiFetch(urlMembers);

function displayMembers(data) {
    const qualifiedMembers = data.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');

    const numAdvertisementsToShow = Math.floor(Math.random() * 2) + 2; // Random number between 2 and 3
    const selectedMembers = [];
    while (selectedMembers.length < numAdvertisementsToShow && qualifiedMembers.length > 0) {
        const randomIndex = Math.floor(Math.random() * qualifiedMembers.length);
        selectedMembers.push(qualifiedMembers.splice(randomIndex, 1)[0]);
    }

    selectedMembers.forEach(element => {
        if (element.membership_level == "Silver" || element.membership_level == "Gold") {
            const spotDiv = document.createElement('div');
            spotDiv.className = "spotlight-member";
            spotDiv.innerHTML = `<img src="images/${element.image}" alt="${element.name}" width="150">
                                    <h3>${element.name}</h3>
                                    <p>${element.membership_level}</p>
                                    `;
            spotLights.appendChild(spotDiv);
        }
    });
}

/* banner */
function isWeekday() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, and Wednesday
}

function toggleBanner() {
    const banner = document.getElementById('banner');
    if (isWeekday()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

function closeBanner() {
    const banner = document.getElementById('banner');
    banner.style.display = 'none';
}

window.onload = function () {
    toggleBanner();
};