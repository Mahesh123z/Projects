const board = document.getElementById('tic-tac-toe-board');
const resetButton = document.getElementById('reset-button');
const message = document.getElementById('message');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.textContent = `Player ${currentPlayer} wins!`;
            return;
        }
    }

    if (!gameBoard.includes('')) {
        gameActive = false;
        message.textContent = "It's a draw!";
    }
}

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = cell.dataset.index;

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        checkWinner();

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function handleResetClick() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    message.textContent = '';
    board.innerHTML = '';
    createBoard();
}

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

resetButton.addEventListener('click', handleResetClick);
createBoard();
