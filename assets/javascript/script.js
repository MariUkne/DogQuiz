//Array containing questions with answer options
let questions = [{
        question: 'Which dog breed is the largest?',
        answers: [{
                text: 'Chihuahua',
                correct: false
            },
            {
                text: 'Siberian Husky',
                correct: false
            },
            {
                text: 'Great Dane',
                correct: true
            },
            {
                text: 'Poodle',
                correct: false
            },
        ]
    },
    {
        question: 'Which dog breed is the smallest?',
        answers: [{
                text: 'Chihuahua',
                correct: true
            },
            {
                text: 'Pomeranian',
                correct: false
            },
            {
                text: 'Shih Tzu',
                correct: false
            },
            {
                text: 'Pug',
                correct: false
            },
        ]
    },
    {
        question: 'Which country does the dog breed Beagle come from?',
        answers: [{
                text: 'United Kingdom',
                correct: true
            },
            {
                text: 'France',
                correct: false
            },
            {
                text: 'Italy',
                correct: false
            },
            {
                text: 'Spain',
                correct: false
            },
        ]
    },
    {
        question: 'Which country does Bernese Mountain Dog come from?',
        answers: [{
                text: 'Sweden',
                correct: false
            },
            {
                text: 'Russia',
                correct: false
            },
            {
                text: 'Ireland',
                correct: false
            },
            {
                text: 'Schweiz',
                correct: true
            },
        ]
    },
    {
        question: 'Which dog breed is most commonly used in dog race?',
        answers: [{
                text: 'Golden Retriever',
                correct: false
            },
            {
                text: 'Greyhound',
                correct: true
            },
            {
                text: 'Japanese Spitz',
                correct: false
            },
            {
                text: 'Poodle',
                correct: false
            },
        ]
    },
    {
        question: 'Which dog breed is the heaviest?',
        answers: [{
                text: 'Chihuahua',
                correct: false
            },
            {
                text: 'English Mastiff',
                correct: true
            },
            {
                text: 'Saint Bernard',
                correct: false
            },
            {
                text: 'Newfoundland',
                correct: false
            },
        ]
    },
    {
        question: 'Which dog breed is one of the oldest?',
        answers: [{
                text: 'Golden Retriever',
                correct: false
            },
            {
                text: 'Bullddog',
                correct: false
            },
            {
                text: 'Greyhound',
                correct: true
            },
            {
                text: 'Poodle',
                correct: false
            },
        ]
    },
    {
        question: 'Which dog breed is known for being used as a police dog due to its intelligence and trainabillity?',
        answers: [{
                text: 'German Shepherd',
                correct: true
            },
            {
                text: 'Pug',
                correct: false
            },
            {
                text: 'Labrador Retriever',
                correct: false
            },
            {
                text: 'Dalmatian',
                correct: false
            },
        ]
    },
    {
        question: 'Which dog breed is known for its distinctive blue-black tongue?',
        answers: [{
                text: 'Bulldog',
                correct: false
            },
            {
                text: 'Chow Chow',
                correct: true
            },
            {
                text: 'Chihuahua',
                correct: false
            },
            {
                text: 'Pomeranian',
                correct: false
            },
        ]
    },
    {
        question: 'How many dog breeds are recognized worldwide by the Fédération Cynologique Internationale (FCI)?',
        answers: [{
                text: '200',
                correct: false
            },
            {
                text: '475',
                correct: false
            },
            {
                text: '360',
                correct: true
            },
            {
                text: '150',
                correct: false
            },
        ]
    },
];

//Variables to keep track of the current question, number of correct answers, number of incorrect answers, and timer-related variables 
let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let timer;
let timeLeft = 15;

//Constants to reference HTML elements
const questionElement =
    document.getElementById('question');
const answerButtonsElement =
    document.getElementById('answer-buttons');
const correctElement =
    document.getElementById('correct');
const incorrectElement =
    document.getElementById('incorrect');
const timerElement =
    document.getElementById('timer');
const startButton =
    document.getElementById('startButton');
const quizContainer =
    document.getElementById('quiz-container');
const controls =
    document.getElementById('controls');
const score =
    document.getElementById('score');

//Listener for the button that starts the game when clicked
startButton.addEventListener('click', () => {
    //Hide the start button and show the quiz container, controls, and score
    startButton.style.display = 'none';
    quizContainer.style.display = 'block';
    controls.style.display = 'block';
    score.style.display = 'block';
    //Start the game
    startQuiz();
});

//Function to start the game
function startQuiz() {
    //Reset variables and show the first question
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    correctElement.innerText = correctCount;
    incorrectElement.innerText = incorrectCount;
    showQuestion(questions[currentQuestionIndex]);
}

//Function to display a question and its answer options
function showQuestion(question) {
    //Display the question text
    questionElement.innerText = question.question;
    //Clear answer options from previous question
    answerButtonsElement.innerHTML = '';

    //Loop through the answer options and create buttons for each answer
    question.answers.forEach(answer => {
        let button =
            document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        //Listener for the button to check if the answer is correct or not
        button.addEventListener('click', () => {
            if (answer.correct) {
                //If the answer is correct, increment the number of correct answer and update the score
                correctCount++;
                correctElement.innerText = correctCount;

            } else {
                //Otherwise, increment the number of incorrect answer and update the score
                incorrectCount++;
                incorrectElement.innerText =
                    incorrectCount;
            }

            //Check if there are more questions remaining
            if (currentQuestionIndex < questions.length - 1) {
                //If yes, show the next question
                currentQuestionIndex++;
                showQuestion(questions[currentQuestionIndex]);
            } else {
                //Otherwise, show the result
                clearInterval(timer);
                showResult();
            }
        });

        //Append the button to HTML
        answerButtonsElement.appendChild(button);
    });

    //Reset the timer for each question
    resetTimer();
}

//Function to start the timer
function startTimer() {
    timerElement.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;
        //Check if time has run out
        if (timeLeft <= 0) {
            clearInterval(timer);
            incorrectCount++;
            incorrectElement.innerText = incorrectCount;
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(questions[currentQuestionIndex]);
            } else {
                showResult();
            }
        }
    }, 1000);
}

//Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    timeLeft = 15;
    startTimer();
}

//Function to display the game result
function showResult() {
    questionElement.innerText = 'Quiz completed! Your result:';
    answerButtonsElement.innerHTML = `
    <p>Correct answers: ${correctCount}</p>
    <p>Incorrect answers: ${incorrectCount}</p>
  `;
  createRestartButton();
}

//Function to create the restart button
function createRestartButton() {
    let restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Quiz';
    restartButton.onclick = restartQuiz;
    restartButton.id = 'restart-button';
    quizContainer.appendChild(restartButton);
}

//Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = '';
    let restartButton = document.getElementById('restart-button');
    if (restartButton) {
        quizContainer.removeChild(restartButton);
    }
    startQuiz();
}