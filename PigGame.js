var scores, roundScore, activePlayer, dice; 
var winningScore = 100;

init();

$(document).ready(prompt);

 // Call function
 document.querySelector('.btn-new').addEventListener('click', function () {
     document.querySelector('#name-'+ activePlayer).textContent = 'Player '+ (activePlayer+1);
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove("winner");
     init();
     document.querySelector('.btn-hold').style.display='block';
     document.querySelector('.btn-roll').style.display='block';
     prompt();
 });

document.querySelector('.btn-roll').addEventListener('click', function ()
{
    var dice = Math.floor( Math.random() * 6 + 1);
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src ="\ 4-DOM-Pig-Game\\dice-" + dice + '.png'; 
    
    
    if ( dice!== 1 )
    {
        roundScore+= dice;
        document.querySelector('#current-' + activePlayer).innerText = roundScore;
    } 
    else
    {
        roundScore=0;
        updateScoresONScreen();       
    }
}); 


document.querySelector('.btn-hold').addEventListener('click', function () {
        scores[activePlayer] += roundScore;
        roundScore=0;
        document.getElementById('score-'+ activePlayer).textContent=scores[activePlayer];
        if( scores[activePlayer] >= winningScore )
        {
            document.querySelector('#name-'+ activePlayer).textContent = 'WINNER !';
            document.querySelector('.btn-hold').style.display='none';
            document.querySelector('.btn-roll').style.display='none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle("winner");
        }
        else
        updateScoresONScreen();
});

function init()
{
scores = [0, 0];    // 2 player 
roundScore=0;
activePlayer=0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('current-0').innerText=0;
document.getElementById('current-1').innerHTML=0;
document.getElementById('score-0').textContent=0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('.player-0-panel').classList.add('active');            
document.querySelector('.player-1-panel').classList.remove('active');            
}

function prompt()
{
    if (confirm("Do you want to set a winning score?") )
        winningScore = prompt("Enter new winning Score");
}

function updateScoresONScreen()
{
        document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');            
        document.getElementById('current-'+ activePlayer).textContent=0;         
        activePlayer === 0 ? activePlayer=1: activePlayer=0;
        document.querySelector('.player-'+ activePlayer + '-panel').classList.toggle('active');  
}
//Extra
//document.querySelector('#current-'+ activePlayer).textContent = dice;

//document.getElementsByClassName('btn-roll')[0].style.display='none';

// goes in btn-hold
        // document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');    
        // if (activePlayer) activePlayer=0; else activePlayer=1;
        // document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active');
        
 //document.querySelector('current-'+ activePlayer).textContent=0;
//if (activePlayer) activePlayer=0; else activePlayer=1;