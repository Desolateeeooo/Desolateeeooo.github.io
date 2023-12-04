import { overallPoints } from "./overall.js";

const earnedPoints = document.querySelector("#earningCount");
let count = 0;

const changeEarnedPoints = (increment) => () => {
	earnedPoints.innerHTML = count += increment;
	overallPoints.innerHTML = +overallPoints.innerHTML + increment;
	localStorage.setItem('pointStorage', overallPoints.innerHTML);
}

const runButton = document.querySelector("#run");
const showerButton = document.querySelector("#shower");
const workoutButton = document.querySelector("#workout");
const stretchButton = document.querySelector("#stretch");
const mediateButton = document.querySelector("#mediate");
runButton.addEventListener("click", changeEarnedPoints(5), {once: true});
showerButton.addEventListener("click", changeEarnedPoints(5), {once: true});
workoutButton.addEventListener("click", changeEarnedPoints(3), {once: true});
stretchButton.addEventListener("click", changeEarnedPoints(1), {once: true});
mediateButton.addEventListener("click", changeEarnedPoints(2), {once: true});

