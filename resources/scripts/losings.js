import { overallPoints } from "./overall.js";


const losingPoints = document.querySelector("#losingCount");
let count = 0;

const changeLostPoints = (increment) => () => {
	losingPoints.innerHTML = count += increment;
	overallPoints.innerHTML = +overallPoints.innerHTML - increment;
	localStorage.setItem('pointStorage', overallPoints.innerHTML);
}

const socialMediaButton = document.querySelector("#socialMedia");
const scrollButton = document.querySelector("#scroll");
const fapButton = document.querySelector("#fap");
const playButton = document.querySelector("#play");
const drugsButton = document.querySelector("#drugs");
const sweetsButton = document.querySelector("#sweets");
socialMediaButton.addEventListener("click", changeLostPoints(20));
scrollButton.addEventListener("click", changeLostPoints(30));
fapButton.addEventListener("click", changeLostPoints(60));
playButton.addEventListener("click", changeLostPoints(20));
drugsButton.addEventListener("click", changeLostPoints(50));
sweetsButton.addEventListener("click", changeLostPoints(10));
