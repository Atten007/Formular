// console.log( jQuery("input").val );

// Klick-Funktion im Formular
jQuery("#submit-button").on("click", function() {
	e.preventDefault();

	// Schleife
	/* jQuery("input[type!='submit'], input[type='text'], select, textarea").each(function() {

		if ( console.log( jQuery(this).attr("type") === "radio" ) {
			if ( jQuery(this).prop("checked") === true ) {
				console.log( "1" + jQuery(this).val);
			}
		// } else if ( jQuery(this).attr("type") === "submit" ) {
			// hier soll nichts passieren
		} else {
				console.log( "2" + jQuery(this).val)
	}
	}); */

	let errorBox = jQuery("#error-messages");
	let errorText = "";
	errorBox.removeClass("show");


	// Prüfung Feld "Anrede"

	let salutationBox = jQuery("#salutation")
	let salutationField = jQuery("input[name='salutation']:checked");

	jQuery("#salutation").removeClass("error");
	if ( !salutationField.length ) {
		errorText += "Bitte wähle eine Anrede aus.<br>";
		jQuery("#salutation").addClass("error");
	}

	// Prüfung Textfelder

	jQuery(".required-text").each(function() {

		// Reset aktuelles Feld
		jQuery(this).parent().removeClass("error");

		if ( !jQuery(this).val() )
			errorText += "Bitte trage in folgendem Feld etwas ein: " + jQuery(this).parent().text() + "<br>";
		jQuery(this).parent().addClass("error");
	});

	// Fehler- oder Erfolgsmeldung
	if (errorText) {
		errorBox.html(errorText).addClass("show");
	} else {
		location.href = "danke.html";
	}

});