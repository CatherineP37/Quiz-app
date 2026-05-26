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
                e.target.style.backgroundColor = 'green';              
                correctAnswers.push({
                    question: questions[questionIndex].question,
                    userAnswer: e.target.textContent,
                    answer: questions[questionIndex].correctAnswer,
                })         
            } else {
                result.innerText = 'That answer is not correct.';
                e.target.style.backgroundColor = 'red';                           
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
    correctAnswers.forEach((correctAnswer) => {
        correctAnswersList.innerHTML += `<li><p>Question: ${correctAnswer.question}</p>
        <p>Your answer: ${correctAnswer.userAnswer}</p>
        <p>The correct answer: ${correctAnswer.answer}</p>  
        </li>`;
    })
   incorrectAnswers.forEach((incorrectAnswer) => {
        incorrectAnswersList.innerHTML += `<li><p>Question: ${incorrectAnswer.question}</p>
        <p>Your answer: ${incorrectAnswer.userAnswer}</p>
        <p>The correct answer: ${incorrectAnswer.answer}</p>
        </li>`;
    })
}
    

quiz();