export function renderCurrentPoll(question, optionA, optionB) {
    const currentPollContainer = document.createElement('div');
    const userQuestionEl = document.createElement('h3');
    const optionAEl = document.createElement('p');
    const voteAButton = document.createElement('button');
    const optionBEl = document.createElement('p');
    const voteBButton = document.createElement('button');


    userQuestionEl.textContent = question;
    optionAEl.textContent = optionA;
    optionBEl.textContent = optionB;

    currentPollContainer.append(userQuestionEl, optionAEl, voteAButton, optionBEl, voteBButton);
    return currentPollContainer;
}