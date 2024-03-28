//last mofification
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});

//humburger menu
menuHum();

function menuHum () {
    const buttonMenus = document.getElementsByClassName("hamburger-menu");
    const navMenus = document.getElementsByClassName("nav-box");
    
    for (let i = 0; i < buttonMenus.length; i++) {
        buttonMenus[i].addEventListener('click', () => {
            for (let j = 0; j < navMenus.length; j++) {
                navMenus[j].classList.toggle('open');
            }
            buttonMenus[i].classList.toggle('open');
        });
    }
}

//Getting current year
displayyear();

function displayyear () {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    document.getElementById("year").textContent = currentDate.getUTCFullYear();
}

// Load members from JSON
let isGridView = true;
const buttonView = document.getElementById('button-view');
const urlMembers = 'data/members.json';
const membersContainer = document.getElementById('members-container');

function updateButton () {
    if (isGridView) {
        buttonView.innerHTML = 'List';
    } else {
        buttonView.innerHTML = 'Grid';
    }
}
updateButton();

async function apiFetch(link) {
    try {
        const response = await fetch(link);
        if (response.ok) {
            const data = await response.json();
            if (isGridView){
                displayMembersGrid(data.members);
            } else {
                displayMembersList(data.members);
            }
            //console.table(data);
        }
    } catch (error) {
        console.error(error);
    }
}
apiFetch(urlMembers);

function displayMembersGrid(data) {
    membersContainer.innerHTML = ''; 
    data.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member');
        memberElement.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" width="150">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
        <p>Membership Level: <strong>${member.membership_level}</strong></p>
        <p>${member.other_information}</p>
        `;
        membersContainer.appendChild(memberElement);
    });
};

function displayMembersList(data) {
    membersContainer.innerHTML = ''; 
    data.forEach(member => {
        const memberElement = document.createElement('div');
        memberElement.classList.add('member');
        memberElement.innerHTML = `
        <img src="images/${member.image}" alt="${member.name}" width="150">
        <h2>${member.name}</h2>
        <p>Membership Level: <strong>${member.membership_level}</strong></p>
        `;
        membersContainer.appendChild(memberElement);
    });
};

buttonView.addEventListener('click', ()=> {
    isGridView = !isGridView;
    updateButton ();
    membersContainer.classList.toggle('grid-view');
    membersContainer.classList.toggle('list-view');
    apiFetch(urlMembers);
});
