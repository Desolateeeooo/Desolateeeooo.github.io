const overallPoints = document.querySelector("#overallPoints");
let totalCount = localStorage.getItem('pointStorage') ?? 100;
overallPoints.innerHTML = totalCount;

const resetFunc = () => () => {
	overallPoints.innerHTML = 100;
	localStorage.setItem('pointStorage', 100);
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener("click", resetFunc());

export { overallPoints };