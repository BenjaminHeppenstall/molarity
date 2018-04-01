function calculateDNAug() {

  var length = parseFloat(document.getElementById("DNAlength").value, 10);
  var amount = parseFloat(document.getElementById("DNAamount").value, 10);

  var answer1 = amount * ((1 / 330) * 1000);
  var answer = answer1 * (1 / length);
  document.getElementById("answer").innerHTML = answer + " pmol";

}