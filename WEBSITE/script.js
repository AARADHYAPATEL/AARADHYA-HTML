// Array of questions
const quizData = [
    {
        question: 
        "Which is faster?",
        options:
        ["Quantum Computer", "Super Computer", "Macbook Pro", "Lenovo T460"],
        correct: 0,
    },
    {
        question: 
        "Which is a Boot sector virus",
        options: 
        ["Disk Killer", "Sunday", "Flip", "Elkern"],
        correct: 0,
    },
    {
        question: 
        "Which one is a valid variable in Python",
        options: 
        ["123huxz", "Image", "__yrh", "Hello World"],
        correct: 2,
    },
    {
        question: 
        "Who is the father of computers",
        options: 
        ["Keon lin shon", "Ronaldo", "Charles Babbage", "Lionel Messi"],
        correct: 2, // Correcting the index to match the correct answer
    }
];

const quiz = document.querySelector('#quit');
const answerElms = document.querySelectorAll(".answer");
const [questionElm, option1, option2, option3, option4] = document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
);

const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Loading quiz questions
const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    options.forEach((curOption, index) => window[`option${index + 1}`].innerText = curOption);
};

loadQuiz();

// Get the selected answer function on button click
const getSelectedOption = () => {
    const selectedOptionIndex = Array.from(answerElms).findIndex(curElm => curElm.checked);
    return selectedOptionIndex;
};

const deselectingAnswers = () => {
    answerElms.forEach(curElm => curElm.checked = false);
};

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        // Deselecting the previous option
        deselectingAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <div class="result">
        <h2> your score=${score}/${quizData.length} correct answer</h2>
        <p2>CONGRATULATIONS !!</p2>
        <hr>
        <button class="reload-button" onclick="location.reload()">Play Again </button>
        </div>`;
    }
});
