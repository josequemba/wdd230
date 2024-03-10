
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/* slide second*/
let slideIndex2 = 1;

function plusSlides(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("circle-img");
    
    if (n > slides.length - 2) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides.length - 2;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("displayed");
    }
    for (i = slideIndex2; i < Math.min(slideIndex2 + 3, slides.length); i++) {
        slides[i].classList.add("displayed");
    }
}

// Show slides initially
showSlides2(slideIndex2);
    
//last mofification
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;
});

//humburger menu
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