function alterarStatus (id) {
    let clickedGame = document.getElementById(`game-${id}`);
    let gameDiv = clickedGame.querySelector(".dashboard__item__img");
    let gameButton = clickedGame.querySelector(".dashboard__item__button");
    if (gameButton.classList.contains('dashboard__item__button--return')) {
        if(!confirm("Tem certeza que deseja devolver o jogo?")) {
            return;
        }
        gameDiv.classList.remove('dashboard__item__img--rented')
        gameButton.classList.remove("dashboard__item__button--return");
        gameButton.innerHTML = "Alugar";
    } else {
        gameDiv.classList.add('dashboard__item__img--rented')
        gameButton.classList.add("dashboard__item__button--return");
        gameButton.innerHTML = "Devolver";
    }
}