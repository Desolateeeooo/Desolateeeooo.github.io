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
socialMediaButton.addEventListener("click", changeLostPoints(20), {once: true});
scrollButton.addEventListener("click", changeLostPoints(30), {once: true});
fapButton.addEventListener("click", changeLostPoints(60), {once: true});
playButton.addEventListener("click", changeLostPoints(20), {once: true});
drugsButton.addEventListener("click", changeLostPoints(50), {once: true});
sweetsButton.addEventListener("click", changeLostPoints(10), {once: true});
