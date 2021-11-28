// console.log("TEST");


// Formular-Validierung
function checkForm(f) {
	f.preventDefault();

	// Initialisierung
	let salutationContainer = document.getElementById("salutation");
	let salutationFields = document.getElementsByName("salutation");
	let salutation = ""
	for (let i = 0; i < salutationFields.length; i++) {
		if (salutationFields[i].checked) {
			salutation = salutationFields[i].value;
		}
	}

	let firstnameField = document.getElementsByName("firstname")[0];
	let firstname = firstnameField.value;
	let lastnameField = document.getElementsByName("lastname")[0];
	let lastname = lastnameField.value;
	let messageField = document.getElementsByName("message")[0];
	let message = lastnameField.value;

	let errorBox = document.getElementById("error-messages");
	let errorText = "";

	// Zurücksetzen
	errorBox.classList.remove("show");
	document.getElementById("salutation").classList.remove("error");
	firstnameField.parentElement.classList.remove("error");
	lastnameField.parentElement.classList.remove("error");
	messageField.parentElement.classList.remove("error");

	// Prüfung der Eingaben
	if (salutation === "") {
		errorText += "Bitte wähle eine Anrede aus.<br>";
		document.getElementById("salutation").classList.add("error");
	}

	if (firstname === "") {
		errorText += "Bitte trage einen Nachnamen ein. <br>";
		firstnameField.parentElement.classList.add("error");
	}

	if (lastname === "") {
		errorText += "Bitte trage einen Nachnamen ein. <br>";
		lastnameField.parentElement.classList.add("error");
	}

	if (message === "") {
		errorText += "Bitte trage eine Nachricht ein. <br>";
		messageField.parentElement.classList.add("error");
	}

	// Fehler- oder Erfolgsmeldung
	if (errorText) {
		errorBox.innerHTML = errorText;
		errorBox.classList.add("show");
	} else {
		location.href = "danke.html";
	}


	console.log(salutation);


}





function checkFormAdvanced(f) {
	f.preventDefault();

	// Initialisierung
	let errorBox = document.getElementById("error-messages");
	let errorText = "";
	errorBox.classList.remove("show");

	let salutationContainer = document.getElementById("salutation");
	let salutationFields = document.getElementsByName("salutation");
	let salutation = ""
	for (let i = 0; i < salutationFields.length; i++) {
		if (salutationFields[i].checked) {
			salutation = salutationFields[i].value;
		}
	}
	salutationContainer.classList.remove("error");

	// Prüfung Feld "Anrede"
	if (salutation === "") {
		errorText += "Bitte wähle eine Anrede aus. <br>";
		document.getElementById("salutation").classList.add("error");
	}


	// Alle Textfelder
	let TextFields = document.getElementsByClassName("required-text");
	for (let j = 0; j < textFields.length; j++) {
		textFields[j].parentElement.classList.remove("error");
	}

	if (firstname === "") {
	errorText += "Bitte trage ein folgendem Feld etwas ein:" + textFields[j].labels[0].childNodes[0].textContent.trim() + "<br>";
		textFields[j].parentElement.classList.add("error");
	}

	// Fehler- oder Erfolgsmeldung
	if (errorText) {
		errorBox.innerHTML = errorText;
		errorBox.classList.add("show");
	} else {
		location.href = "danke.html";
	}

	console.log(textFields);
}







document.getElementById("submit-button").addEventListener("click", function(e) { 
	checkFormAdvanced(e);
});