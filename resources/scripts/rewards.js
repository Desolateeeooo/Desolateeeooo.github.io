import { overallPoints } from "./overall.js";

const truncate = (str, maxlength) => {
	return (str.length > maxlength) ?
	str.slice(0, maxlength - 1) + '…' : str;
}

const remove = (e) => {
	const el = e.target;
	let rewardStorage = localStorage.getItem('rewardButtons');
	const rewardButtons = JSON.parse(rewardStorage ?? '[]');
	rewardButtons.forEach(reward => {
		overallPoints.innerHTML = +overallPoints.innerHTML - reward._cost;
		localStorage.setItem('pointStorage', overallPoints.innerHTML);
	})
	el.parentNode.remove();
}

const createButtons = () => {
	let rewardStorage = localStorage.getItem('rewardButtons');
	const rewardButtons = JSON.parse(rewardStorage ?? '[]');
	rewardButtons.forEach(reward => {
		const li = document.createElement("li");
		let rewardBtn = document.createElement("input");
    rewardBtn.type = "button";
    rewardBtn.value = `${truncate(reward._name, 35)} for ${parseInt(reward._cost)} points`;
    rewardBtn.onclick = remove;
		rewardBtn.classList.add('addedReward');
    li.appendChild(rewardBtn);
    document.querySelector("#list").appendChild(li);
	});
	return rewardButtons;
}

let localButtonsArr = createButtons();
const list = document.querySelector("#list");

const pushRewards = () => () => {
	const i1 = document.querySelector("#rewardName").value;
	const i2 = document.querySelector("#cost").value;
	
	const li = document.createElement("li");

	let rewardBtn = document.createElement("input");
    rewardBtn.type = "button";
    rewardBtn.value = `${truncate(i1, 35)} for ${parseInt(i2)} points`;
    rewardBtn.onclick = remove;
		rewardBtn.classList.add('addedReward');
    li.appendChild(rewardBtn);
    list.appendChild(li);
		const buttonProperties = {_name: i1, _cost: i2};
		localButtonsArr.push(buttonProperties);
		localStorage.setItem('rewardButtons', JSON.stringify(localButtonsArr));
}

const addRewardButton = document.querySelector("#reward");
addRewardButton.addEventListener("click", pushRewards());

const clearButton = document.querySelector("#clear");
const clearAll = () => {
	localStorage.removeItem("rewardButtons");
	localButtonsArr = [];
	list.innerHTML = '';
}
clearButton.addEventListener("click", clearAll);

const pointsMinusCost = (cost) => {
	overallPoints.innerHTML = +overallPoints.innerHTML - cost._cost;
	localStorage.setItem('pointStorage', overallPoints.innerHTML);
}

export default truncate;