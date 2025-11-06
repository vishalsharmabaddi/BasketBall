let gamePlayer1 = document.getElementById("player1");
let gamePlayer2 = document.getElementById("player2");
let count = 0;
let count2 = 0;

function addone(){
    count += 1;
    gamePlayer1.textContent = count;
}

function addtwo(){
    count += 2;
    gamePlayer1.textContent = count;
}

function addthree(){
    count += 3;
    gamePlayer1.textContent = count;
}


function add2one(){
    count2 += 1;
    gamePlayer2.textContent = count2;
}

function add2two(){
    count2 += 2;
    gamePlayer2.textContent = count2;
}

function add2three(){
    count2 += 3;
    gamePlayer2.textContent = count2;
}