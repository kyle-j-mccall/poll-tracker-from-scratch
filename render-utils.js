export function renderCurrentPoll(question, optionA, optionB) {
    const currentPollContainer = document.createElement('div');
    const userQuestionEl = document.createElement('h3');
    const optionAEl = document.createElement('p');
    const optionBEl = document.createElement('p');
    
    


    userQuestionEl.textContent = question;
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;

    currentPollContainer.append(userQuestionEl, optionAEl, optionBEl);
    return currentPollContainer;
}