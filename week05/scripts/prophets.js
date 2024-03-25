const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData (link) {
    const response = await fetch (link);

    if (response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
        //console.table(data.prophets);
    }
}

getProphetData(url);

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        const card = document.createElement("section");
        const fullName = document.createElement("h2");
        const portrait = document.createElement("img");
        const birthDate = document.createElement("p");
        const birthPlace = document.createElement("p");

        fullName.innerHTML = `${prophet["name"]} ${prophet["lastname"]}`;
        birthDate.innerHTML = `Date of Birth: ${prophet["birthdate"]}`;
        birthPlace.innerHTML = `Place of Birht: ${prophet["birthplace"]}`;
        portrait.setAttribute('src', prophet["imageurl"]);
        portrait.setAttribute('alt', 'Portrait of ' + `${prophet["name"]} ${prophet["lastname"]}`);
        portrait.setAttribute('loading', 'lazy'); 
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '400');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace),
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}