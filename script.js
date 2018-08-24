function myChangeFunc() {
  document.getElementById("ltest").innerHTML = "W3Schools";
  document.getElementById("ltest").href = "https://www.w3schools.com";
  document.getElementById("ltest").target = "_blank";
}
function myAlertFunc() {
    alert("aaa");
}

function tFunc() {
    alert("x");
}

var btlos  = document.getElementById('btlos');
btlos.addEventListener ('click', myChangeFunc, true);

var btale  = document.getElementById('btale');
btale.addEventListener ('click', myAlertFunc, true);

function Quadrat() {
  var Eingabe  = document.getElementById('Eingabe');
  var Ergebnis = Eingabe.value * Eingabe.value;
  alert("Das Quadrat von " + Eingabe.value + " = " + Ergebnis);
  Eingabe.value = 0;
 }

var los  = document.getElementById('los');
los.addEventListener ('click', Quadrat, true);

<!-- ------------------------------------------------ -->
document.querySelector('#berechnen').addEventListener('click', berechne_BMI);
 
  function berechne_BMI () {
	var groesse = parseInt(document.getElementById("groesse").value),
	    masse = parseInt(document.getElementById("masse").value),
	    bmi = Math.round(100000 * masse / (groesse * groesse)) / 10;
				
	document.querySelector("output").textContent = bmi;
  }