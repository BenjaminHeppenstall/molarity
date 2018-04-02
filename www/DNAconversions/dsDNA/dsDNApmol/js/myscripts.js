//amount * ((1/660) * 1 000 000) * (1/length) = pmol

$('input[type="textbox"]').keyup(function(e) {
    if(e.keyCode == 13) {
        $(this).next().focus();
    }
});

function calculateDNAug() {

	var length = parseFloat(document.getElementById("DNAlength").value, 10);
	var amount = parseFloat(document.getElementById("DNAamount").value, 10);

	if (isNaN(length) || isNaN(amount) || length <= 0 || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else { 

		var answer1 = amount * ((1 / 660) * 1000000);
	    var answer = answer1 * (1 / length);

		document.getElementById("answer").innerHTML = answer + " pmol";
		//document.getElementById("answer").innerHTML = "works";
			

		
	}

}