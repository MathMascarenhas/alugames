function alterarStatus (id) {
    let gameButton = document.getElementById(`game-${id}`).lastElementChild;
    if (gameButton.classList.contains("dashboard__item__button--return")) {
        gameButton.className = "dashboard__item__button";
        gameButton.innerHTML = "Alugar";
    } else {
        gameButton.classList.add("dashboard__item__button--return");
        gameButton.innerHTML = "Devolver";
    }
}