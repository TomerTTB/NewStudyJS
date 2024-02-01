//board
let board;
let boardWidth = 500; //px
let boardHeight = 500;
let context


//Players
let playerWidth = 10;
let playerHeight = 50;
let playerVelocityY = 0; //Control the Y movment of the paddle

let player1 = {
    x: 10,
    y: boardHeight / 2,
    width: playerWidth,
    height: playerHeight,
    velocityY: playerVelocityY
}

let player2 = {
    x: 480,
    y: boardHeight / 2,
    width: playerWidth,
    height: playerHeight,
    velocityY: playerVelocityY
}

//Ball
let ballWidth = 10;
let ballHeight = 10;

let ball = {
    x: boardWidth / 2,
    y: boardHeight / 2,
    width: ballWidth,
    height: ballHeight,
    velocityX: 1,
    velocityY: 2
}

let player1Score = 0;
let player2Score = 0;

window.onload = function () {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); //Used to draw on the canvas

    //Draw initial player1
    context.fillStyle = "skyblue";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    //Draw initial player2
    context.fillStyle = "skyblue";
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    requestAnimationFrame(update);

    //Listener for keyup
    document.addEventListener("keyup", movePlayer);
}

function update() {
    requestAnimationFrame(update);

    context.clearRect(0, 0, boardWidth, boardHeight);

    //Player1 
    context.fillStyle = "skyblue";
    //player1.y += player1.velocityY;
    let nexyPlayer1Y = player1.y + player1.velocityY;
    if (!outOfBounds(nexyPlayer1Y)) {
        player1.y = nexyPlayer1Y;
    }
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    //player2
    context.fillStyle = "skyblue";
    //player2.y += player2.velocityY;
    let nexyPlayer2Y = player2.y + player2.velocityY;
    if (!outOfBounds(nexyPlayer2Y)) {
        player2.y = nexyPlayer2Y;
    }
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

    //Ball
    context.fillStyle = "white";
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
    context.fillRect(ball.x, ball.y, ball.width, ball.height);

    //If the ball touches the top or bottom
    if (ball.y <= 0 || (ball.y + ball.height >= boardHeight)) {
        ball.velocityY *= -1; //Reverse ball direction
    }

    //Bounce the ball back from paddle
    if (detectCollision(ball, player1)) {
        if (ball.x <= player1.x + player1.width) {
            // Left side of ball touches right side of player1
            ball.velocityX *= -1;
        }
    } else if (detectCollision(ball, player2)) {
        if (ball.x + ballWidth >= player2.x) {
            // Right side of ball touches left side of player2
            ball.velocityX *= -1;
        }
    }

    //Game Over
    if (ball.x < 0) {
        player2Score++;
        resetGame(1);
    } else if (ball.x + ballWidth > boardWidth) {
        player1Score++;
        resetGame(-1);
    }

    //Score
    context.font = "45px sans-serif";
    context.fillText(player1Score, boardWidth / 5, 45);
    context.fillText(player2Score, boardWidth * 4 / 5, 45);

    //The dotted line
    for (let i = 0; i < board.height; i += 25) {
        context.fillRect(board.width / 2 - 10, i, 5, 5);
    }
}

//Not letting the paddle get out of the 0/500
function outOfBounds(yPosition) {
    return (yPosition < 0 || yPosition + playerHeight > boardHeight);
}

//Moving the player
function movePlayer(e) {
    //Player1
    if (e.code == "KeyW") {
        player1.velocityY = -3;
    } else if (e.code == "KeyX") {
        player1.velocityY = 3;
    }

    //Player2
    if (e.code == "ArrowUp") {
        player2.velocityY = -3;
    } else if (e.code == "ArrowDown") {
        player2.velocityY = 3;
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width && // Formula to detect collision of 2 
        a.x + a.width > b.x && //
        a.y < b.y + b.height && //
        a.y + a.height > b.y;
}

function resetGame(direction) {
    ball = {
        x: boardWidth / 2,
        y: boardHeight / 2,
        width: ballWidth,
        height: ballHeight,
        velocityX: direction,
        velocityY: 2
    }
}