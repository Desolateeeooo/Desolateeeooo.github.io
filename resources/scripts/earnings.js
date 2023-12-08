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
runButton.addEventListener("click", changeEarnedPoints(5));
showerButton.addEventListener("click", changeEarnedPoints(5));
workoutButton.addEventListener("click", changeEarnedPoints(3));
stretchButton.addEventListener("click", changeEarnedPoints(1));
mediateButton.addEventListener("click", changeEarnedPoints(2));


