//last mofification
document.addEventListener("DOMContentLoaded", function() {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modification: ${lastModified}`;
});

//Getting current year
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.getElementById("year").textContent = currentDate.getUTCFullYear();
