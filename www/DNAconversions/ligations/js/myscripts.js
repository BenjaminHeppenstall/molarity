$(document).ready(function(){
	$("#selectRatio").hide()
});

function calculateLigation() {

	var length = parseFloat(document.getElementById("length").value, 10);
	var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
	var vLength = parseFloat(document.getElementById("vLength").value, 10);

	if (isNaN(length) || isNaN(vAmount) || isNaN(vLength) || length <= 0 || vAmount <= 0 || vLength <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectRatio").hide()

	} else { 


		var answer1 = length / vLength;
		var answer = answer1 * vAmount;

		var answerSize = parseFloat(document.getElementById("selectRatio").value, 10);
	    var answer = answer / answerSize;


		document.getElementById("answer").innerHTML = answer + " ng insert for";
		$("#selectRatio").show()
		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var length = parseFloat(document.getElementById("length").value, 10);
	var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
	var vLength = parseFloat(document.getElementById("vLength").value, 10);


	if (isNaN(length) || isNaN(vLength) || isNaN(vAmount)) { 



	} else { 

		if (isNaN(length) || isNaN(vAmount) || isNaN(vLength) || length <= 0 || vAmount <= 0 || vLength <= 0) { 

			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectRatio").hide()

		} else { 

			var length = parseFloat(document.getElementById("length").value, 10);
			var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
			var vLength = parseFloat(document.getElementById("vLength").value, 10);

			var answer1 = length / vLength;
			var answer = answer1 * vAmount;

		    var answerSize = parseFloat(document.getElementById("selectRatio").value, 10);
	    	var answer = answer / answerSize;

	        document.getElementById("answer").innerHTML = answer + " ng insert for"; 
		    $("#selectRatio").show() 
		} 
	}
}