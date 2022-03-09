document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {


    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {
        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10);    
    };
    updateSquares();
    
}

function updateSquares() {

    let square = document.querySelectorAll(".square");

    square.forEach((square) => {
        let position = square.id;
        let symbols = board[position];

        if (symbols != '') {
            square.innerHTML = `<div class='${symbols}'></div>`
        }

    })
}