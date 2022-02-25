const nameRex = /^[a-z]+$/i;
const phnRex = /^[0-9]?[0-9]{10}$/;

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phnum = document.getElementById("phnum");
const pwd = document.getElementById("pwd");
const conf = document.getElementById("confirm");
const submit = document.getElementById("btn");

submit.addEventListener("click", () => {
	if (!nameRex.test(fname.value) || !nameRex.test(lname.value)) {
		alert("First name and Last name should include only alphabets!");
	} else if (!phnRex.test(phnum.value)) {
		alert("Invalid phone number!");
	} else if (pwd.value !== conf.value) {
		alert("Passwords don't match!");
	} else if (pwd.value === "" || conf.value === "") {
		alert("Password fields can't be blank!");
	} else if (pwd.value.length < 8 || conf.value.length < 8) {
		alert("Password should be at least 8 characters long!");
	} else {
		alert("Account Created");
	}
});
