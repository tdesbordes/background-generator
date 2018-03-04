var css    = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient");

setGradient();
/**
 * 
 */
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

var randombutton=document.getElementById('randombutton');

function randomColors() {
	color1.value =  calculateRandom();
	color2.value =  calculateRandom();
	setGradient();
}

function calculateRandom() {
	let col = "#";
	for(let i = 0; i < 6; i++){
		col += Math.floor((Math.random() * 16)).toString(16);
	}
	return col;	
}

randombutton.addEventListener("click", randomColors);