function calculateDNAug() {

	var length = parseFloat(document.getElementById("DNAlength").value, 10);
	var amount = parseFloat(document.getElementById("DNAamount").value, 10);

	var answer1 = amount * 330;
	var answer = answer1 / 1000 * length;
	document.getElementById("answer").innerHTML = Math.round(answer * 100000) / 100000 + " µg";

}