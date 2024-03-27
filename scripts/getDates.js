
//Getting current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentDate.getUTCFullYear();

//Getting the las modification date and time
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;

//Humburger menu
const button = document.getElementById('humburgerMenu');
const nav = document.querySelector('.nav-box');

button.addEventListener('click', () => {
	nav.classList.toggle('open');
	button.classList.toggle('open');
});

//Dark mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	body.classList.toggle('dark-mode');
	main.classList.toggle('dark-mode');
    modeButton.classList.toggle('dark-mode');
});

// week activities
const baseURL = "https://josequemba.github.io/wdd230/";
const linksURL = "https://josequemba.github.io/wdd230/data/links.json";

async function getLinks(link) {
    const response = await fetch(link);
    if (response.ok) {
        const data = await response.json();
        //console.table(data);
        displayLinks(data.weeks);
    }
}
getLinks(linksURL);

function displayLinks(weeks) {
    weeks.forEach(week => {
        const ulElement = document.querySelector(".titles-links");
        const liElement = document.createElement("li");
        liElement.innerHTML = `${week.week} ${getLinksAndTitle(week.links)}`
        ulElement.appendChild(liElement);
    });
}

function getLinksAndTitle (links) {
    return links.map(link => {
        return `<a href=${link.url}>${link.title}</a>`
    }).join(' | '); 
}

//weather
const tempItem = document.querySelector("#temperature");
const tempIcon = document.querySelector('#temperature-icon')

const apiKey = '921effc51dd4e2293b4816fb9eb3d222';

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

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
            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            tempIcon.innerHTML = `<img src="${iconsrc}" alt="Weather Icon">`;
            tempIcon.style 
            tempItem.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
        }

    }, function(error) {
        console.error("Error getting location:", error.message);
    });
} else {
    console.error("Geolocation is not supported by this browser.");
}

//get visited times
const visitsDisplay = document.getElementById("pagevisits");
let visitCount = Number(window.localStorage.getItem("numVisits")) || 0;

if (visitCount !== 0) {
    visitsDisplay.textContent = `Page Visits: ${visitCount}`;
} else {
    localStorage.setItem('numVisits', 1);
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
};

visitCount++;

localStorage.setItem("numVisits", visitCount);

