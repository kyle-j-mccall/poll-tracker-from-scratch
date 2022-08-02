// import functions and grab DOM elements
import { renderCurrentPoll } from "./render-utils.js";
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const pollForm = document.getElementById('poll-form');
const currentPollEl = document.getElementById('current-poll-section');

const pollArray = [];

let question = '';
let optionA = '';
let optionB = '';
let optionATally = 0;
let optionBTally = 0;

pollForm.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
    const data = new FormData(pollForm);
    currentPollEl.textContent = '';
    const userQuestion = data.get('question');
    const userOptionA = data.get('option-a');
    const userOptionB = data.get('option-b');
    
    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;
    
    displayPoll();

    pollForm.reset();

    



});


function displayPoll() {
    const currentPoll = renderCurrentPoll(question, optionA, optionB);
    currentPollEl.append(currentPoll);
}
