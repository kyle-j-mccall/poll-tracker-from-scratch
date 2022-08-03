// import functions and grab DOM elements
import { renderCurrentPoll } from "./render-utils.js";
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const pollForm = document.getElementById('poll-form');
const currentPollEl = document.getElementById('current-poll-section');
const optionAButton = document.getElementById('option-a-button');
const optionBButton = document.getElementById('option-b-button');
const submitPollButton = document.getElementById('submit-poll-button');
const pastPollContainer = document.getElementById('past-poll-container');
const subtractAButton = document.getElementById('subtract-a-button');
const subtractBButton = document.getElementById('subtract-b-button');

const pollArray = [];

let question = '';
let optionA = '';
let optionB = '';
let optionATally = 0;
let optionBTally = 0;

pollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(pollForm);
    
    const userQuestion = data.get('question');
    const userOptionA = data.get('option-a');
    const userOptionB = data.get('option-b');
    
    question = userQuestion;
    optionA = userOptionA;
    optionB = userOptionB;
    
    displayCurrentPoll();

    pollForm.reset();
  
});

optionAButton.addEventListener('click', () => {
    optionATally++;
    displayCurrentPoll();
    
});

optionBButton.addEventListener('click', () => {
    optionBTally++;
    displayCurrentPoll();
    
});

subtractAButton.addEventListener('click', () => {
    optionATally--;
    displayCurrentPoll();
});

subtractBButton.addEventListener('click', () => {
    optionBTally--;
    displayCurrentPoll();
});

submitPollButton.addEventListener('click', () => {
    pastPollContainer.textContent = '';
    displayPastPolls();
    optionATally = 0;
    optionBTally = 0;
    currentPollEl.textContent = '';

});

function displayCurrentPoll() {
    currentPollEl.textContent = '';
    const currentPoll = renderCurrentPoll(question, optionA, optionB, optionATally, optionBTally);
    currentPollEl.append(currentPoll);
}

function displayPastPolls() {
    const pastPolls = {
        question: question,
        optionA: optionA,
        optionB: optionB,
        optionACount: optionATally,
        optionBCount: optionBTally
    };

    pollArray.push(pastPolls);
    

    

    for (let poll of pollArray) {
        const currentPoll = renderCurrentPoll(poll.question, poll.optionA, poll.optionB, poll.optionACount, poll.optionBCount);
        pastPollContainer.append(currentPoll);

    }


    
}