
var input1 = document.getElementById("mol");
input1.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("mol").blur();
        document.getElementById("calcBtn").click();
    }
});

/* var input = document.getElementById("notation");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("calcBtn").click();
    }
}); */

function calculateMolecules() {

	var power = Math.pow(10, 23);

	var amount = parseFloat(document.getElementById("mol").value, 10);
	var size = parseFloat(document.getElementById("size").value, 10);

	if (isNaN(amount) || amount <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";

	} else {

		var answer1 = 6.022140857 * amount;
	    answer1 = Math.round(answer1 * 100000000) / 100000000;

	    var answer = power * answer1;

	    if (isNaN(size)) { 

	    	document.getElementById("answer").innerHTML = Math.round((answer * size) * 100) / 100 + " molecules";
	    	
	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 molecules";

	    } else {

			document.getElementById("answer").innerHTML = Math.round((answer * size) * 100) / 100 + " molecules";
			//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}

function change() {

	var power = Math.pow(10, 23);

	var amount = parseFloat(document.getElementById("mol").value, 10);
	var size = parseFloat(document.getElementById("size").value, 10);

	if (isNaN(amount) || amount <= 0) { 


	} else {

		var answer1 = 6.022140857 * amount;
	    answer1 = Math.round(answer1 * 100000000) / 100000000;

	    var answer = power * answer1;

	    if (isNaN(size)) { 

	    	document.getElementById("answer").innerHTML = answer + " molecules";

	    } else if (size == 0) {

	    	document.getElementById("answer").innerHTML = "0 molecules";

	    } else {

			document.getElementById("answer").innerHTML = Math.round((answer * size) * 100) / 100 + " molecules";
			//document.getElementById("answer").innerHTML = "works";

		}
		
	}


}