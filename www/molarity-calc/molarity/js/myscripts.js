//C = (m/v) * (1/Da)

$(document).ready(function(){
	$("#selectConcentration").hide()
});


function calculateMolarity() { 

	var mass = parseFloat(document.getElementById("mass").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

	if (isNaN(mass) || isNaN(volume) || isNaN(daltons) || daltons <= 0 || mass <= 0 || volume <= 0) { 

		document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
		$("#selectConcentration").hide()

	} else { 

		var massSize = parseFloat(document.getElementById("selectMass").value, 10);
		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);
		

		var mass = mass * massSize;
		var volume = volume * volumeSize;
		var daltons = daltons * daltonsSize;

		var answer = (mass / volume) * (1 / daltons); 
        var answerSize = parseFloat(document.getElementById("selectConcentration").value, 10);
	   	var answer = answer * answerSize;
	    var answer = Math.round(answer * 1000000) / 1000000;


	    document.getElementById("answer").innerHTML = "The molarity is " + answer; 
		$("#selectConcentration").show()
		//document.getElementById("answer").innerHTML = "works";
			

		
	}
}
function change() { 

	var mass = parseFloat(document.getElementById("mass").value, 10);
	var volume = parseFloat(document.getElementById("volume").value, 10);
	var daltons = parseFloat(document.getElementById("daltons").value, 10);

    var massSize = parseFloat(document.getElementById("selectMass").value, 10);
	var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
	var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);
		

    var mass = mass * massSize;
	var volume = volume * volumeSize;
	var daltons = daltons * daltonsSize;

	if (isNaN(mass) || isNaN(volume) || isNaN(daltons)) { 



	} else {

		if (isNaN(mass) || isNaN(volume) || isNaN(daltons) || daltons <= 0 || mass <= 0 || volume <= 0) { 
			
			document.getElementById("answer").innerHTML = "please fill in all fields with valid numbers";
			$("#selectConcentration").hide()

		} else { 

    		var massSize = parseFloat(document.getElementById("selectMass").value, 10);
       		var volumeSize = parseFloat(document.getElementById("selectVolume").value, 10);
    		var daltonsSize = parseFloat(document.getElementById("selectDaltons").value, 10);

    		var mass = parseFloat(document.getElementById("mass").value, 10);
    		var volume = parseFloat(document.getElementById("volume").value, 10);
    		var daltons = parseFloat(document.getElementById("daltons").value, 10);

	    	var mass = mass * massSize;
    		var volume = volume * volumeSize;
    		var daltons = daltons * daltonsSize;

	    	var answer = (mass / volume) * (1 / daltons);  
            var answerSize = parseFloat(document.getElementById("selectConcentration").value, 10);
    	   	var answer = answer * answerSize;
	        var answer = Math.round(answer * 1000000) / 1000000;


	        document.getElementById("answer").innerHTML = "The molarity is " + answer; 
		    $("#selectConcentration").show() 
		}

	}
}