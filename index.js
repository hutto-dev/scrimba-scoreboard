const homeScore = document.getElementById('home-score');
const awayScore = document.getElementById('away-score');

let hScore = 0;
let aScore = 0;


function homeOne() {
    hScore++;
    homeScore.textContent++;  
}

function homeTwo() {
    hScore += 2;
    homeScore.textContent = hScore;
    
}

function homeThree() {
    hScore += 3;
    homeScore.textContent = hScore;
}

function awayOne() {
    aScore++; 
    awayScore.textContent = aScore;
}

function awayTwo() {
    aScore += 2;
    awayScore.textContent = aScore
}

function awayThree() {
    aScore += 3;
    awayScore.textContent = aScore;
}

function homeClear() {
    hScore = 0;
    homeScore.textContent = '0';
}

function awayClear() {
    aScore = 0;
    awayScore.textContent = '0';
}