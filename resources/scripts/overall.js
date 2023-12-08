import truncate from "./rewards.js"

const overallPoints = document.querySelector("#overallPoints");
let totalCount = localStorage.getItem('pointStorage') ?? 100;

overallPoints.innerHTML = totalCount;
const resetFunc = () => () => {
	overallPoints.innerHTML = 100;
	localStorage.setItem('pointStorage', 100);
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", resetFunc());

const userName = document.querySelector("#userName");

const validate = () => {
	const inputName = document.querySelector("#inputName").value;
	userName.innerHTML = truncate(inputName, 22);
	localStorage.setItem("nameStorage", userName.innerHTML);
}
userName.innerHTML = localStorage.getItem("nameStorage");

inputName.addEventListener("keydown", function (e) {
	if (e.key === 'Enter') {
		validate();
	};
});


export { overallPoints };