
//  * GET HTML ELEMENTS tags

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const retryBtn = document.getElementById("retry");



//   QUESTIONS BANK (10 QUESTIONS)

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who wrote the national anthem of India?",
        options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Mahatma Gandhi", "Subhas Chandra Bose"],
        answer: "Rabindranath Tagore"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    },
    {
        question: "Who is known as the Father of Computers?",
        options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        answer: "Charles Babbage"
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        answer: "2"
    },
    {
        question: "Which country is famous for the Great Wall?",
        options: ["Japan", "India", "China", "Korea"],
        answer: "China"
    },
    {
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Which instrument is used to measure temperature?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        answer: "Thermometer"
    }
];



let currentQuestion = 0; // current question index
let score = 0;           // user score
let timeLeft = 60;       // 60 seconds timer
let timer;               // setInterval 



function loadQuestion() {
    clearInterval(timer);       // old timer stop
    timeLeft = 60;              // reset timer
    timeEl.textContent = timeLeft;

    startTimer();               // start new timer

    const q = quizData[currentQuestion];
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;

    optionsEl.innerHTML = "";   // clear old options

    q.options.forEach(option => {
        const label = document.createElement("label");
        label.classList.add("d-block", "mb-2");

        label.innerHTML = `
            <input type="radio" name="option" value="${option}">
            ${option}
        `;

        optionsEl.appendChild(label);
    });
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
    } else {
        showResult();
    }
}



function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextBtn.style.display = "none";
    timeEl.style.display = "none";

    resultEl.innerHTML = `Quiz Completed! <br>
                          Your Score: ${score} / ${quizData.length}`;

    retryBtn.textContent = "Retry Quiz";
}



nextBtn.addEventListener("click", () => {
    saveAnswer();
    nextQuestion();
});

retryBtn.addEventListener("click", () => {
    location.reload();
});


loadQuestion(); // page load par first question
