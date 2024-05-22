let questions = [
    {
        question: 'Which dog breed is the largest?',
        answears: [
            { text: 'Chihuahua', correct: false },
            { text: 'Siberian Husky', correct: false },
            { text: 'Great Dane', correct: true },
            { text: 'Poodle', correct: false },
        ]
    },
    {
        question: 'Which dog breed is the smallest?',
        answers: [
            { text: 'Chihuahua', correct: true },
            { text: 'Pomeranian', correct: false },
            { text: 'Shih Tzu', correct: false },
            { text: 'Pug', correct: false },
        ]
    },
    {
        question: 'Which country does the dog breed Beagle come from?',
        answers: [
            { text: 'United Kingdom', correct: true },
            { text: 'France', correct: false },
            { text: 'Italy', correct: false },
            { text: 'Spain', correct: false },
        ]
    },
    { 
        question: 'Which country does Bernese Mountain Dog come from?',
        answers: [
            { text: 'Sweden', correct: false },
            { text: 'Russia', correct: false },
            { text: 'Ireland', correct: false },
            { text: 'Schweiz', correct: true },
        ]
    },
    {
        question: 'Which dog breed is most commonly used in dog race?',
        answers: [
            { text: 'Golden Retriver', correct: false},
            { text: 'Greyhound', correct: true },
            { text: 'Japanese Spitz', correct: false },
            { text: 'Poodle', correct: false },
        ]
    },
    {
        question: 'Which dog breed is the heaviest?',
        answers: [
            { text: 'Chihuahua', correct: false },
            { text: 'English Mastiff', correct: true },
            { text: 'Saint Bernard', correct: false},
            { text: 'Newfoundland', correct: false },
        ]
    },
    {
        question: 'Which dog breed is one of the oldest?',
        ansers: [
            { text: 'Goldedn Retriver', correct: false },
            { text: 'Bullddog', correct: false },
            { text: 'Greyhound', correct: true},
            { text: 'Poodle', correct: false },
        ]
    },
    {
        question: 'Which dog breed is known for being used as a police dog due to its intelligence and trainabillity?',
        answers: [
            { text: 'German Shepherd', correct: true },
            { text: 'Pug', correct: false },
            { text: 'Labradore Retriver', correct: false },
            { text: 'Dalmatian', correct: false },
        ]
    },
    {
        question: 'Which dog breed is known for its distinctive blue-black tongue?',
        answers: [
            { text: 'Bulldog', correct: false },
            { text: 'Chow Chow', correct: true },
            { text: 'Chihuahua', correct: false },
            { text: 'Pomeranian', correct: false },
        ]
    },
    {
        question: 'How many dog breeds are recognized worldwide by the Fédération Cynologique Internationale (FCI)?',
        answers: [
            { text: '200', correct: false },
            { text: '475', correct: false },
            { text: '360', correct: true },
            { text: '150', correct: false },
        ]
    },
];

let currentQuestionIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let timer;
let timeLeft = 15;

let questionElement =
document.getElementById('question');
let answerButtonsElement =
document.getElementById('answer-buttons');
let correctElement =
document.getElementById('correct');
let incorrectElement =
document.getElementById('incorrect');
let timerElement = 
document.getElementById('timer');

function startQuiz() {
    showQuestion(question[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = '';

    question.answers.forEach(answer => {
        let button =
        document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => {
            if (answer.correct) {
                correctCount++;
                correctElement.innerText = correctCount;
                
            } else {
                incorrectCount++;
                incorrectElement.innerText =
                incorrectCount;
            }

            if (currentQuestionIndex < question.length - 1) {
                currentQuestionIndex++;

            showQuestion(questions[currentQuestionIndex]);
            
        } else {
            clearInterval(timer);
            showResult();
        }
     });

     answerButtonsElement.appendChild(button);
    });
    resetTimer();
}