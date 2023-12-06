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
    document.querySelector("#list").appendChild(li);
}

const remove = (e) => {
	const el = e.target;
	el.parentNode.remove();
}

const truncate = (str, maxlength) => {
	return (str.length > maxlength) ?
	str.slice(0, maxlength - 1) + '…' : str;
}

const addRewardButton = document.querySelector("#reward");
const clearButton = document.querySelector("#clear");

addRewardButton.addEventListener("click", pushRewards());
// clearButton.addEventListener("click", remove());