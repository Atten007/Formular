<?php

// Parameter entgegen nehmen
$salutation = $_GET["salutation"];
$firstName = $_GET["firstname"];
$from = "From: Programmieren Webseite <programmieren@seibert-media.net>";

$message = "Soeben hatte $salutation $firstName eine Anfrage gestellt.";


if ($firstName != "") {
	echo "Vielen Dank für deine Anfrage!";
	mail("mail@mika-kreis.de", "Formular von programmieren.de", $message, $from);
} else {
	echo "Sorry, fehlerhafte Eingabe";
}

?>