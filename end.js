const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

/* //local storage saves its values as arrays 
localStorage.setItem('highScores', []);
console.log(localStorage.getItem("highScores"));
//once console logged it shows an empty string

//you can convert the array to a string though...
localStorage.setItem("highScores", JSON.stringify([]));

//the highScores key in the local storage now shows a string
//the console also logs a string which needs to be converted into an array

console.log(JSON.parse(localStorage.getItem("highScores")));
*/

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };
    highScores.push(score);

    //if b.score is higher than a.score then put b before a 
    /* highScores.sort( (a,b) => {
        return b.score - a.score;
    }) 
    // you can use this or the following */
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);
    
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};