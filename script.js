/* =========================================================
   ICSE CLASS 10 HUB
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   DARK MODE
   ========================================================= */

function toggleDark() {

    document.body.classList.toggle("dark");

    if (
        document.body.classList.contains("dark")
    ) {

        localStorage.setItem(
            "darkMode",
            "on"
        );

    } else {

        localStorage.setItem(
            "darkMode",
            "off"
        );

    }

}


/* =========================================================
   LOAD SAVED DARK MODE
   ========================================================= */

if (
    localStorage.getItem("darkMode") === "on"
) {

    document.body.classList.add("dark");

}


/* =========================================================
   SEARCH
   ========================================================= */

function searchContent() {

    const searchBox =
        document.getElementById("search");

    if (!searchBox) {
        return;
    }

    const input =
        searchBox.value
        .toLowerCase()
        .trim();

    const items =
        document.querySelectorAll(
            ".searchable"
        );


    items.forEach(function(item) {

        const text =
            item.innerText.toLowerCase();

        if (
            text.includes(input)
        ) {

            item.style.display = "";

        } else {

            item.style.display = "none";

        }

    });

}


/* =========================================================
   QUIZ QUESTIONS
   ========================================================= */

const questions = [

    {
        question:
            "If x² - 5x + 6 = 0, what are the roots?",

        options: [
            "1 and 6",
            "2 and 3",
            "3 and 4",
            "2 and 4"
        ],

        answer: 1
    },


    {
        question:
            "What is the SI unit of electric power?",

        options: [
            "Volt",
            "Ampere",
            "Watt",
            "Ohm"
        ],

        answer: 2
    },


    {
        question:
            "Which organelle controls the activities of a cell?",

        options: [
            "Mitochondria",
            "Nucleus",
            "Ribosome",
            "Vacuole"
        ],

        answer: 1
    },


    {
        question:
            "Who founded the Arya Samaj?",

        options: [
            "Raja Ram Mohan Roy",
            "Swami Vivekananda",
            "Swami Dayanand Saraswati",
            "Mahatma Gandhi"
        ],

        answer: 2
    },


    {
        question:
            "Which gas is a major greenhouse gas?",

        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon dioxide",
            "Hydrogen"
        ],

        answer: 2
    },


    {
        question:
            "What is the chemical formula of water?",

        options: [
            "CO₂",
            "H₂O",
            "O₂",
            "NaCl"
        ],

        answer: 1
    },


    {
        question:
            "Which part of the plant transports water?",

        options: [
            "Phloem",
            "Xylem",
            "Stomata",
            "Root hair"
        ],

        answer: 1
    },


    {
        question:
            "What is the value of √144?",

        options: [
            "10",
            "11",
            "12",
            "14"
        ],

        answer: 2
    },


    {
        question:
            "Which branch of government makes laws?",

        options: [
            "Executive",
            "Judiciary",
            "Legislature",
            "Police"
        ],

        answer: 2
    },


    {
        question:
            "Which instrument is used to measure electric current?",

        options: [
            "Voltmeter",
            "Ammeter",
            "Barometer",
            "Thermometer"
        ],

        answer: 1
    }

];


/* =========================================================
   QUIZ VARIABLES
   ========================================================= */

let currentQuestion = 0;

let score = 0;

let answered = false;


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    const questionElement =
        document.getElementById(
            "question"
        );

    const optionsElement =
        document.getElementById(
            "options"
        );

    const scoreElement =
        document.getElementById(
            "score"
        );


    if (
        !questionElement ||
        !optionsElement ||
        !scoreElement
    ) {

        return;

    }


    answered = false;


    const q =
        questions[currentQuestion];


    questionElement.innerText =
        (currentQuestion + 1) +
        ". " +
        q.question;


    optionsElement.innerHTML =
        "";


    q.options.forEach(
        function(option, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option";


            button.innerText =
                option;


            button.onclick =
                function() {

                    checkAnswer(
                        button,
                        index
                    );

                };


            optionsElement.appendChild(
                button
            );

        }
    );


    scoreElement.innerText =
        "Score: " +
        score +
        " / " +
        questions.length;

}


/* =========================================================
   CHECK ANSWER
   ========================================================= */

function checkAnswer(
    button,
    index
) {

    if (answered) {

        return;

    }


    answered = true;


    const correct =
        questions[
            currentQuestion
        ].answer;


    const all =
        document.querySelectorAll(
            ".option"
        );


    if (
        index === correct
    ) {

        button.classList.add(
            "correct"
        );

        score++;

    } else {

        button.classList.add(
            "wrong"
        );


        if (
            all[correct]
        ) {

            all[correct].classList.add(
                "correct"
            );

        }

    }


    const scoreElement =
        document.getElementById(
            "score"
        );


    if (scoreElement) {

        scoreElement.innerText =
            "Score: " +
            score +
            " / " +
            questions.length;

    }

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    if (!answered) {

        alert(
            "Please select an answer first!"
        );

        return;

    }


    currentQuestion++;


    if (
        currentQuestion >=
        questions.length
    ) {


        const questionElement =
            document.getElementById(
                "question"
            );

        const optionsElement =
            document.getElementById(
                "options"
            );

        const nextButton =
            document.getElementById(
                "nextBtn"
            );

        const restartButton =
            document.getElementById(
                "restartBtn"
            );

        const scoreElement =
            document.getElementById(
                "score"
            );


        if (questionElement) {

            questionElement.innerText =
                "🎉 Quiz Completed!";

        }


        if (optionsElement) {

            optionsElement.innerHTML =
                "<p>Great job! Keep studying and keep improving. 📚</p>";

        }


        if (nextButton) {

            nextButton.style.display =
                "none";

        }


        if (restartButton) {

            restartButton.style.display =
                "inline-block";

        }


        if (scoreElement) {

            scoreElement.innerText =
                "🏆 Final Score: " +
                score +
                " / " +
                questions.length;

        }


        return;

    }


    loadQuestion();

}


/* =========================================================
   RESTART QUIZ
   ========================================================= */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    answered = false;


    const nextButton =
        document.getElementById(
            "nextBtn"
        );

    const restartButton =
        document.getElementById(
            "restartBtn"
        );


    if (nextButton) {

        nextButton.style.display =
            "inline-block";

    }


    if (restartButton) {

        restartButton.style.display =
            "none";

    }


    loadQuestion();

}


/* =========================================================
   START QUIZ
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadQuestion();

    }
);
