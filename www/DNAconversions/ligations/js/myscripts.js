function calculateLigation() {

	var length = parseFloat(document.getElementById("length").value, 10);
	var vAmount = parseFloat(document.getElementById("vAmount").value, 10);
	var vLength = parseFloat(document.getElementById("vLength").value, 10);

	var answer1 = length / vLength;
	var answer = answer1 * vAmount;
	document.getElementById("answer").innerHTML = Math.round(answer * 100000) / 100000 + " ng insert for 1:1 ratio";

}