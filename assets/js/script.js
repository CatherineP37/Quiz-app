const questions = [
    {
    question: 'What does CSS stand for?',
    answerOptions: ['Clean Spotty Socks','Clean Style Sheets','Cascading Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
},
{
    question: 'When was JavaScript invented?',
    answerOptions: ['1995','1997','2003'],
    correctAnswer: '1995',
},
]

const questionSection = document.querySelector('.question-section');
const answers = document.querySelector('.answers');
const answerSection = document.querySelector('answer-section');
let questionIndex = 0;
const nextButton = document.getElementById('next');
const result = document.getElementById('result');
let correctAnswers = [];
let incorrectAnswers = [];
let correctAnswersList = document.getElementById('correct_answers_list');
let incorrectAnswersList = document.getElementById('incorrect_answers_list');

function quiz() {
    questionSection.innerHTML = `<p>${questions[questionIndex].question}</p>`;
    answers.innerHTML = '';
    questions[questionIndex].answerOptions.forEach((option) => {
        answers.innerHTML += `<button class='answer-button'>${option}</button>`;
    })
    let answerButtons = document.querySelectorAll('.answer-button');
    
    answerButtons.forEach((answerButton) => {
        answerButton.addEventListener('click', (e) => {
            if(e.target.textContent === questions[questionIndex].correctAnswer){              
                result.innerText = 'Well done! that answer is correct.';
                e.target.style.backgroundColor = '#0F7145';              
                correctAnswers.push({
                    question: questions[questionIndex].question,
                    userAnswer: e.target.textContent,
                    answer: questions[questionIndex].correctAnswer,
                })         
            } else {
                result.innerText = 'That answer is not correct.';
                e.target.style.backgroundColor = '#890F0F';                           
                incorrectAnswers.push({
                    question: questions[questionIndex].question,
                    userAnswer: e.target.textContent,
                    answer: questions[questionIndex].correctAnswer,
                })              
            }            
        })
    })
    nextButton.addEventListener('click', () => {
      if(questionIndex === questions.length){
        questionIndex = 0;        
        displayFeedback();
      } else {
        questionIndex++;
      }
      quiz();
    })
}

function displayFeedback() {
    if(correctAnswers.length === 1){
        correctAnswersList.innerHTML += '<h2>Correct answer</h2>';
        correctAnswers.forEach((correctAnswer) => {
        correctAnswersList.innerHTML += `<li>
        <div><h3>Question</h3>
        <p>${correctAnswer.question}</p></div>
        <div><h3>Your answer</h3>
        <p> ${correctAnswer.userAnswer}</p></div>        
        <div><h3>The correct answer</h3>
        <p>${correctAnswer.answer}</p></div>        
        </li>`;})
    } else if(correctAnswers.length > 1){
        correctAnswersList.innerHTML += '<h2>Correct answers</h2>';
        correctAnswers.forEach((correctAnswer) => {
        correctAnswersList.innerHTML += `<li>
        <div><h3>Question</h3>
        <p>${correctAnswer.question}</p></div>
        
        <div><h3>Your answer</h3>
        <p>${correctAnswer.userAnswer}</p></div>
        
        <div><h3>The correct answer</h3>
        <p>${correctAnswer.answer}</p>  </div>
        
        </li>`;})
    }

    if(incorrectAnswers.length === 1) {
        incorrectAnswersList.innerHTML += '<h2>Incorrect answer</h2>';
        incorrectAnswers.forEach((incorrectAnswer) => {  
        incorrectAnswersList.innerHTML += `<li>
        <div><h3>Question</h3>
        <p>${incorrectAnswer.question}</p></div>        
        <div><h3>Your answer</h3>
        <p>${incorrectAnswer.userAnswer}</p></div>        
        <div><h3>The correct answer</h3>
        <p>${incorrectAnswer.answer}</p></div>        
        </li>`;})
    } else if(incorrectAnswers.length > 1) {
        incorrectAnswersList.innerHTML += '<h2>Incorrect answers</h2>';
        incorrectAnswers.forEach((incorrectAnswer) => {
        incorrectAnswersList.innerHTML += `<li>
        <div> <h3>Question</h3>
        <p>${incorrectAnswer.question}</p></div>       
        <div><h3>Your answer</h3>
        <p>${incorrectAnswer.userAnswer}</p></div>        
        <div><h3>The correct answer</h3>
        <p>${incorrectAnswer.answer}</p></div>        
        </li>`;

    })}}


    

quiz();