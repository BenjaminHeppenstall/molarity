//amount * 660 * 1 000 000 * length
function calculateDNAug() {

	var length = parseFloat(document.getElementById("DNAlength").value, 10);
	var amount = parseFloat(document.getElementById("DNAamount").value, 10);

	if (isNaN(length) || isNaN(amount) || length <= 0 || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else { 

		var answer1 = amount * 660;
	    var answer = answer1 / 1000000 * length;

		document.getElementById("answer").innerHTML = answer + " µg";
		//document.getElementById("answer").innerHTML = "works";
		
	}
}