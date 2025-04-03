const p1 = {
    btn: document.querySelector("#p1Button"),
    score: 0,
    display: document.querySelector('#p1Display')
}

const p2 = {
    btn: document.querySelector("#p2Button"),
    score: 0,
    display: document.querySelector('#p2Display')
}

const resetbtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;

function upgradeScore(player1, player2) {
    if (!isGameOver) {
        player1.score++;
        if (player1.score === winningScore) {
            isGameOver = true;
            player1.display.classList.add("has-text-success");
            player2.display.classList.add("has-text-danger");
            player1.btn.disabled = true;
            player2.btn.disabled = true;
        }
        player1.display.textContent = player1.score;
    }
}

p1.btn.addEventListener('click', function () {
    upgradeScore(p1, p2);
})

p2.btn.addEventListener('click', function () {
    upgradeScore(p2, p1);
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetbtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.btn.disabled = false;
    }
}