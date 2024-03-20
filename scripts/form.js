function displayRating() {
    var rating = document.getElementById("page-rating").value;
    document.getElementById("current-rating").textContent = rating;
}
document.getElementById("page-rating").addEventListener("input", displayRating);


const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");
const message = document.getElementById("message");

pass2.addEventListener("focusout", checkSame);

function checkSame() {
	if (pass1.value !== pass2.value) {
		message.textContent = "❗Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		pass2.style.backgroundColor = "#fff0f3";
		pass2.value = "";
		//pass2.focus();
	} else {
		message.style.display = "none";
		pass2.style.backgroundColor = "#fff";
		pass2.style.color = "#000";
	}
}