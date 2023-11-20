let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

function make(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].textContent = currentPlayer;

        if (checkWinner()) {
            document.getElementById('msg').textContent = currentPlayer + ' ' + ' ' + "wins!";
            gameOver = true;
        }
        else if (board.every(btn => btn !== '')) {
            document.getElementById('msg').textContent = 'It\'s a Draw match';
            gameOver = true;
        }
        else {
            currentPlayer = currentPlayer === 'X' ? '0' : 'X';
        }
    }
}

function checkWinner() {
    const winnerCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];

    for (const combo of winnerCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

function reset() {
     currentPlayer = 'X';
     board = ['', '', '', '', '', '', '', '', ''];
     gameOver = false;

    document.getElementById('board').childNodes.forEach(btn => btn.textContent='');
    document.getElementById('msg').textContent='';
}