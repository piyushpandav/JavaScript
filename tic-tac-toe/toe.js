let buttons = document.querySelectorAll('.w-button button');
let turn = "X";

function checkBTN(el) {
    if (turn == 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
    if (el.innerHTML == "") {
        el.innerHTML = turn;
    }
    el.disabled = true;
    checkWin();
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  
        [0, 4, 8], [2, 4, 6]  
    ];

    for (let combo of winningCombos) {
        let [a, b, c] = combo;
        if (buttons[a].innerHTML &&
            buttons[a].innerHTML === buttons[b].innerHTML &&
            buttons[b].innerHTML === buttons[c].innerHTML) {
            alert(`${buttons[a].innerHTML} is the winner!`);
            disableAllButtons();
            return;
        }
    }
}

function disableAllButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function resetGame() {
    buttons.forEach(button => {
        button.innerHTML = "";
        button.disabled = false;
    });
    turn = "X";
}

buttons.forEach(button => {
    button.addEventListener('click', () => checkBTN(button));
});