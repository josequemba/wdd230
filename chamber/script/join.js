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


