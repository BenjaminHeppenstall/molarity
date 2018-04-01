function calculateMolecules() {

	var power = Math.pow(10, 23);

	var amount = parseFloat(document.getElementById("mol").value, 10);

	var answer1 = 6.022140857 * amount;
	answer1 = Math.round(answer1 * 100000000) / 100000000;
	
	var answer = power * answer1;
	document.getElementById("answer").innerHTML = answer + " molecules";


}