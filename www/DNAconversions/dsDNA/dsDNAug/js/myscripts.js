//amount * 660 * 1 000 000 * length
function calculateDNAug() {

	var length = parseFloat(document.getElementById("DNAlength").value, 10);
	var amount = parseFloat(document.getElementById("DNAamount").value, 10);

	var answer1 = amount * 660;
	var answer = answer1 / 1000000 * length;
	document.getElementById("answer").innerHTML = answer + " µg";

	//answerArray = answer.toString();
	//var digits = answerArray.split("");
	//digits.push("1","2","3","4","5","6","7","8","9");

	//var output = answer[1];

	//document.getElementById("answer").innerHTML = digits;
}