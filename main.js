player = 'x'
AI = 'O'

//table

const name1 = localStorage.getItem('first name')
const name2 = localStorage.getItem('second name')

console.log(name1, name2)

if (name1 == 0 ){
    document.getElementById('name1').innerText = "Player1";
}
else {
    document.getElementById('name1').innerText = name1;
    document.getElementById('name2').innerText =" AI";
}

//end tble


//possible combinations of winning
const winCombos =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]

const boxes = document.querySelectorAll(".box")
var  board;
startGame();

function startGame(){
    board = Array.from(Array(9).keys());
    for(var i = 0; i< boxes.length; i++){
        boxes[i].addEventListener('click', turnClick)
    }
}

function turnClick(box){
    
    if(typeof board[box.target.id] == 'number'){
        turn(box.target.id, player)
        if(!checkWin(board, player) && !checkTie()) turn(bestSpot(), AI);   
    }
}

function turn(box, currentplayer){
    if(currentplayer === player){
        boxes[box].firstElementChild.classList.add('x-shape');
        boxes[box].firstElementChild.nextElementSibling.classList.add('x-inside');
    }else if(currentplayer === AI){
        boxes[box].firstElementChild.classList.add('zero-shape')
        boxes[box].firstElementChild.nextElementSibling.classList.add('zero-inside')
    }
    board[box] = currentplayer;
    let gameWon = checkWin(board, currentplayer)
    if(gameWon) gameOver(gameWon)
}

function checkWin(board, currentplayer){
    let plays = board.reduce((a,e,i) => (e === currentplayer) ? a.concat(i) : a, []);
    let gameWon = null;
    for(let [index, win] of winCombos.entries()){
        if(win.every(elem => plays.indexOf(elem) > -1)){
            gameWon = {index: index, player: currentplayer};
            break;
        }
    }     
    return gameWon;
}

function gameOver(gameWon){
    if(gameWon.player === player)
    {   
        sessionStorage.setItem("player1", parseInt(sessionStorage.getItem('player1')) + 1);
        const head = document.querySelectorAll('td');

        head[0].innerText = sessionStorage.getItem('player1')
        head[1].innerText = sessionStorage.getItem('player2')
        const node3 = document.createElement('p')

        const win = document.createTextNode( localStorage.getItem('first name') + ' won!')
        node3.appendChild(win)
        document.getElementById('right-hand-side').appendChild(node3).classList.add('draw')

        console.log("Player won");
    }
    else if(gameWon.player === AI){
        
        sessionStorage.setItem("player2", parseInt(sessionStorage.getItem('player2')) + 1);
        const head = document.querySelectorAll('td');

        head[0].innerText = sessionStorage.getItem('player1')
        head[1].innerText = sessionStorage.getItem('player2')

        const node3 = document.createElement('p')
        const win = document.createTextNode('AI won!')
        node3.appendChild(win)
        document.getElementById('right-hand-side').appendChild(node3).classList.add('draw')
        console.log("AI won");
    }
    for (var i = 0; i < boxes.length; i++)
    {  
         boxes[i].removeEventListener('click', turnClick, false);    
    }
}

function emptySquares(){
    return board.filter(s => typeof s == 'number');
}

function bestSpot(){
    return minmax(board, AI).index;
}

function checkTie(){
    if(emptySquares().length == 0){
        for(let i = 0; i < boxes.length; i++)
        {
            boxes[i].removeEventListener('click', turnClick, false);
        }
        console.log("Tie");
        return true;
    }
    return false;
}

function minmax(board, cuurentplayer){
    var availSpace = emptySquares(board);
    if(checkWin(board, cuurentplayer))
    {   
        return {score: -10};
       
    }else if (checkWin(board, AI))
    { 
        return{ score: 20};
    }else if (availSpace.length == 0){
        return {score: 0};
    }

    var moves= [];
    for (var i = 0; i < availSpace.length; i++){
        var move = {}
        move.index = board[availSpace[i]];
        board[availSpace[i]] = cuurentplayer;

        if(cuurentplayer === AI){
            var result = minmax(board, player)
            move.score = result.score;
        }else{
            var result = minmax(board, AI)
            move.score = result.score;
        }

        board[availSpace[i]] = move.index;
        moves.push(move);
    }

    var bestMove;
    if (cuurentplayer === AI){
        var bestScore = -10000;
        for(var i= 0; i<moves.length; i++){
            if(moves[i].score > bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }else{
        var bestScore = 10000;
        for(var i= 0; i<moves.length; i++){
            if(moves[i].score < bestScore){
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}

function refresh(){
    window.location.reload();
}

