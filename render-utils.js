export function renderCurrentPoll(question, optionA, optionB, optionATally, optionBTally) {
    const currentPollContainer = document.createElement('div');
    const userQuestionEl = document.createElement('h3');
    const optionAEl = document.createElement('p');
    const optionATallyEl = document.createElement('p');
    const optionBEl = document.createElement('p');
    const optionBTallyEl = document.createElement('p');
    
    optionATallyEl.textContent = `votes A: ${optionATally}`;
    optionBTallyEl.textContent = `votes B: ${optionBTally}`;

    userQuestionEl.textContent = question;
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;

    currentPollContainer.classList.add('rendered-poll-container');

    currentPollContainer.append(userQuestionEl, optionAEl, optionBEl, optionATallyEl, optionBTallyEl);
    return currentPollContainer;
}