//m = C * V * Da

$(document).ready(function(){
	$("#selectMass").hide()
});


function calculateMass() { 

	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

	if (isNaN(concentration) || isNaN(volume) || isNaN(daltons) || daltons <= 0 || concentration <= 0 || volume <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectMass").hide()

	} else { 

		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);
		

		var concentration = concentration * concentrationSize;
		var desiredVolume = volume * volumeSize;
		var daltons = daltons * daltonsSize;

		var answer = concentration * volume * daltons; 
        var answerSize = parseFloat(document.getElementById("selectMass").value, 10);
	   	var answer = answer * answerSize;
	    var answer = Math.round(answer * 1000000) / 1000000;


	    document.getElementById("answer").innerHTML = "the mass is  " + answer; 
		$("#selectMass").show()
		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var concentration = parseFloat(document.getElementById("concentration").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

    var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
	var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
	var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);
		

    var concentration = concentration * concentrationSize;
	var desiredVolume = volume * volumeSize;
	var daltons = daltons * daltonsSize;

	if (isNaN(concentration) || isNaN(volume) || isNaN(daltons)) { 



	} else {

		if (isNaN(concentration) || isNaN(volume) || isNaN(daltons) || daltons <= 0 || concentration <= 0 || volume <= 0) { 

			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectMass").hide()

		} else { 

    		var concentrationSize = parseFloat(document.getElementById("selectConcentration").value, 10);
       		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
    		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);

    		var concentration = parseFloat(document.getElementById("concentration").value, 10);
    	    var volume = parseFloat(document.getElementById("volume").value, 10);
    	    var daltons = parseFloat(document.getElementById("daltons").value, 10);


	    	var concentration = concentration * concentrationSize;
    		var Volume = volume * volumeSize;
    		var daltons = daltons * daltonsSize;

	    	var answer = concentration * volume * daltons; 
            var answerSize = parseFloat(document.getElementById("selectMass").value, 10);
    	   	var answer = answer * answerSize;
	        var answer = Math.round(answer * 1000000) / 1000000;


	        document.getElementById("answer").innerHTML = "The mass is " + answer; 
		    $("#selectMass").show() 
		}

	}
}