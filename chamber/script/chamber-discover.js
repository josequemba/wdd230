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


/* last visit message */
displaymessage();

function displaymessage() {
    if (typeof(Storage) !== "undefined") {
    var currentDate2 = new Date();
    var dateString = currentDate2.toDateString();
    
    var lastVisit = localStorage.getItem("lastVisit");
    
    if (!lastVisit) {
        document.getElementById("message").innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        var daysDifference = Math.floor((currentDate2 - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysDifference < 1) {
        document.getElementById("message").innerHTML = "Back so soon! Awesome!";
        } else {
        var dayOrDays = (daysDifference === 1) ? "day" : "days";
        document.getElementById("message").innerHTML = "You last visited " + daysDifference + " " + dayOrDays + " ago.";
        }
    }
    
    localStorage.setItem("lastVisit", dateString);
    } else {
    document.getElementById("message").innerHTML = "Sorry, your browser does not support localStorage.";
    }
}