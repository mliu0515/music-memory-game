// global constants

const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const totalStrikesAllowed = 3; //this gives player 3 chances

//Global Variables
var pattern = [1, 1, 4, 3, 2, 3, 4, 3];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var currStrike = 0;

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  currStrike = 0; // current number of strikes is equal to 0
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  //Similar to startGame but in reverse. 
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

//When the computer plays a clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

//Play a sequence of clues
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    clueHoldTime -= 20;
  }
}

//When losing the game:
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

//When winning the game:
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

//Handle user guesses
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  // add game logic here
  var correct = pattern[guessCounter];
  if (correct != btn && currStrike == totalStrikesAllowed) {
    loseGame();
  } else {
    if (correct != btn) { //if the guess is wrong but we still have more chances
      currStrike += 1; //increment the strike by 1
      alert("oops, you last note is wrong. Guess the last note again."); //alert
    } else { // else if we made a correct guess
      if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress += 1;
        playClueSequence();
      }
    } else {
      guessCounter += 1;
    }
  }
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 207.652,
  2: 233.082,
  3: 261.6,
  4: 311.127
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)