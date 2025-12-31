const quizData = [{
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
        answer: "Delhi"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "Who invented the computer?",
        options: ["Charles Babbage", "Newton", "Einstein", "Tesla"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Leopard"],
        answer: "Tiger"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Indian", "Pacific", "Atlantic", "Arctic"],
        answer: "Pacific"
    },
    {
        question: "What gas do plants absorb?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Which country invented paper?",
        options: ["India", "China", "Japan", "Egypt"],
        answer: "China"
    },
    {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "What is H2O?",
        options: ["Hydrogen", "Oxygen", "Water", "Salt"],
        answer: "Water"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");
const retryBtn = document.getElementById("retry");

loadQuestion();

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 60;
    timeEl.textContent = timeLeft;

    startTimer();

    const q = quizData[currentQuestion];
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    optionsEl.innerHTML = "";

    q.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;
        optionsEl.appendChild(label);
    });

    if (currentQuestion === quizData.length - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    }
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft === 0) {
            saveAnswer();
            nextQuestion();
        }
    }, 1000);
}

function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected && selected.value === quizData[currentQuestion].answer) {
        score++;
    }
}

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    }
}

nextBtn.addEventListener("click", () => {
    saveAnswer();
    nextQuestion();
});

submitBtn.addEventListener("click", () => {
    saveAnswer();
    clearInterval(timer);
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";
    timeEl.style.display = "none";

    resultEl.textContent = `🎉 Quiz Completed! Your Score: ${score} / ${quizData.length}`;
    retryBtn.textContent = "Retry";
});