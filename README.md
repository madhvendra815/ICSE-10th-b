<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ICSE Class 10 Hub | Madhav</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial,Helvetica,sans-serif;
}

:root{
    --bg:#f5f7fb;
    --card:#fff;
    --text:#172033;
    --muted:#697386;
    --primary:#315efb;
    --secondary:#6846ff;
    --border:#e4e8f0;
}

body.dark{
    --bg:#0d111c;
    --card:#151b29;
    --text:#fff;
    --muted:#aab2c3;
    --border:#293143;
}

body{
    background:var(--bg);
    color:var(--text);
    transition:.3s;
}

/* HEADER */
header{
    background:linear-gradient(135deg,#315efb,#6846ff);
    color:white;
    padding:20px 7%;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:24px;
    font-weight:bold;
}

.logo span{
    opacity:.8;
}

#darkBtn{
    border:0;
    background:rgba(255,255,255,.2);
    color:white;
    padding:10px 14px;
    border-radius:10px;
    cursor:pointer;
    font-size:18px;
}

/* HERO */
.hero{
    text-align:center;
    padding:65px 20px 45px;
}

.hero h1{
    font-size:clamp(36px,6vw,62px);
    margin-bottom:18px;
}

.gradient{
    background:linear-gradient(90deg,#315efb,#8b45ff);
    -webkit-background-clip:text;
    color:transparent;
}

.hero p{
    max-width:720px;
    margin:auto;
    color:var(--muted);
    font-size:18px;
    line-height:1.6;
}

/* SEARCH */
.search{
    max-width:650px;
    margin:30px auto 0;
}

.search input{
    width:100%;
    padding:17px 20px;
    border:1px solid var(--border);
    border-radius:15px;
    background:var(--card);
    color:var(--text);
    font-size:16px;
    outline:none;
}

/* MAIN */
.container{
    width:86%;
    max-width:1200px;
    margin:auto;
}

.section{
    padding:30px 0 55px;
}

.title{
    font-size:30px;
    margin-bottom:8px;
}

.subtitle{
    color:var(--muted);
    margin-bottom:25px;
}

/* SUBJECTS */
.subject-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:18px;
}

.subject{
    background:var(--card);
    border:1px solid var(--border);
    padding:23px;
    border-radius:18px;
    transition:.25s;
}

.subject:hover{
    transform:translateY(-5px);
    box-shadow:0 15px 35px rgba(49,94,251,.13);
}

.icon{
    width:52px;
    height:52px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:#eef2ff;
    border-radius:14px;
    font-size:26px;
    margin-bottom:15px;
}

.subject h3{
    margin-bottom:9px;
}

.subject p{
    color:var(--muted);
    line-height:1.5;
    font-size:14px;
}

.drive-btn{
    display:inline-block;
    margin-top:16px;
    background:var(--primary);
    color:white;
    text-decoration:none;
    padding:10px 15px;
    border-radius:9px;
    font-size:14px;
    font-weight:bold;
}

.drive-btn:hover{
    background:var(--secondary);
}

/* BIG DRIVE */
.drive{
    background:linear-gradient(135deg,#315efb,#6846ff);
    color:white;
    padding:38px;
    border-radius:22px;
    text-align:center;
}

.drive h2{
    margin-bottom:10px;
}

.drive p{
    margin-bottom:20px;
    opacity:.9;
}

.drive a{
    display:inline-block;
    background:white;
    color:#315efb;
    padding:12px 20px;
    border-radius:10px;
    text-decoration:none;
    font-weight:bold;
}

/* TIPS */
.tips{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:18px;
}

.tip{
    background:var(--card);
    border:1px solid var(--border);
    padding:22px;
    border-radius:18px;
}

.tip h3{
    margin-bottom:8px;
}

.tip p{
    color:var(--muted);
    line-height:1.5;
}

/* FOOTER */
footer{
    background:#101728;
    color:white;
    text-align:center;
    padding:32px 20px;
    margin-top:30px;
}

footer p{
    margin:7px;
    color:#b9c1d1;
}

footer .name{
    color:white;
    font-weight:bold;
}

/* MOBILE */
@media(max-width:600px){
    header{
        padding:18px 5%;
    }

    .logo{
        font-size:19px;
    }

    .hero{
        padding:50px 6% 35px;
    }

    .hero p{
        font-size:16px;
    }

    .container{
        width:90%;
    }

    .title{
        font-size:25px;
    }
}
</style>
</head>

<body>

<header>
    <div class="logo">
        📚 ICSE <span>Class 10 Hub</span>
    </div>

    <button id="darkBtn" onclick="toggleDark()">🌙</button>
</header>


<section class="hero">

    <h1>
        Study Smarter.<br>
        <span class="gradient">Score Better.</span>
    </h1>

    <p>
        Complete study hub for ICSE Class 10 students.
        Access notes, PYQs, CFQs and specimen papers
        from one place.
    </p>

    <div class="search">
        <input
            id="search"
            type="text"
            placeholder="🔍 Search subject..."
            onkeyup="searchSubjects()"
        >
    </div>

</section>


<main class="container">

<section class="section">

    <h2 class="title">📚 Class 10 Subjects</h2>

    <p class="subtitle">
        Select your subject and open the study material.
    </p>


    <div class="subject-grid" id="subjectGrid">

        <!-- MATHEMATICS -->
        <div class="subject searchable">
            <div class="icon">📐</div>
            <h3>Mathematics</h3>
            <p>
                Mathematics notes, PYQs, CFQs and specimen papers.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- PHYSICS -->
        <div class="subject searchable">
            <div class="icon">⚡</div>
            <h3>Physics</h3>
            <p>
                Physics concepts, numericals, PYQs and practice material.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- CHEMISTRY -->
        <div class="subject searchable">
            <div class="icon">🧪</div>
            <h3>Chemistry</h3>
            <p>
                Chemistry reactions, equations, notes and questions.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- BIOLOGY -->
        <div class="subject searchable">
            <div class="icon">🧬</div>
            <h3>Biology</h3>
            <p>
                Biology diagrams, definitions, notes and PYQs.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- HISTORY -->
        <div class="subject searchable">
            <div class="icon">📜</div>
            <h3>History & Civics</h3>
            <p>
                History and Civics notes, questions and revision material.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- GEOGRAPHY -->
        <div class="subject searchable">
            <div class="icon">🌍</div>
            <h3>Geography</h3>
            <p>
                Geography notes, maps, PYQs and specimen papers.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- ENGLISH -->
        <div class="subject searchable">
            <div class="icon">📖</div>
            <h3>English</h3>
            <p>
                English Language and Literature study material.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>


        <!-- COMPUTER -->
        <div class="subject searchable">
            <div class="icon">💻</div>
            <h3>Computer Applications</h3>
            <p>
                Java programs, theory, questions and practice material.
            </p>

            <a class="drive-btn"
               href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank">
               Open Drive →
            </a>
        </div>

    </div>

</section>


<!-- COMPLETE DRIVE -->

<section class="section">

    <div class="drive">

        <h2>☁️ Complete Study Material</h2>

        <p>
            PYQs • CFQs • Specimen Papers • Study Resources
        </p>

        <a href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
           target="_blank">
           Open Complete Google Drive →
        </a>

    </div>

</section>


<!-- STUDY TIPS -->

<section class="section">

    <h2 class="title">💡 Study Tips</h2>

    <p class="subtitle">
        Prepare smarter for your ICSE examinations.
    </p>

    <div class="tips">

        <div class="tip">
            <h3>📅 Make a Plan</h3>
            <p>
                Divide your syllabus into daily targets.
            </p>
        </div>

        <div class="tip">
            <h3>📝 Practice PYQs</h3>
            <p>
                Solve previous year questions regularly.
            </p>
        </div>

        <div class="tip">
            <h3>🔄 Revise</h3>
            <p>
                Revise formulas, definitions and important concepts.
            </p>
        </div>

        <div class="tip">
            <h3>⏱️ Time Yourself</h3>
            <p>
                Practice papers with a timer.
            </p>
        </div>

    </div>

</section>

</main>


<footer>

    <p class="name">
        Made with ❤️ by Madhav
    </p>

    <p>
        ICSE Class 10-B Educational Hub
    </p>

    <p>
        © 2026–27 | All Rights Reserved
    </p>

</footer>


<script>

function toggleDark(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("darkMode","on");
    }else{
        localStorage.setItem("darkMode","off");
    }
}

if(localStorage.getItem("darkMode")==="on"){
    document.body.classList.add("dark");
}


function searchSubjects(){

    let search =
        document.getElementById("search")
        .value
        .toLowerCase();

    let subjects =
        document.querySelectorAll(".searchable");

    subjects.forEach(function(subject){

        let text =
            subject.innerText.toLowerCase();

        if(text.includes(search)){
            subject.style.display="";
        }else{
            subject.style.display="none";
        }

    });
}

</script>

</body>
</html>
<!-- CLASS 10 ICSE BRAIN PUZZLE -->

<section class="section">

    <div class="puzzle">

        <div class="puzzle-icon">🧠</div>

        <h2>🎮 Class 10 ICSE Brain Puzzle</h2>

        <p class="puzzle-subtitle">
            Test your Class 10 knowledge!
            Choose the correct answer and see your score.
        </p>

        <div id="quiz">

            <h3 id="question">
                Question will appear here
            </h3>

            <div id="options"></div>

            <button class="next-btn"
                    onclick="nextQuestion()">
                Next Question →
            </button>

            <p id="score"></p>

        </div>

    </div>

</section>


<style>

.puzzle{
    background:var(--card);
    border:1px solid var(--border);
    border-radius:24px;
    padding:35px 25px;
    text-align:center;
    box-shadow:0 10px 35px rgba(0,0,0,.06);
}

.puzzle-icon{
    font-size:50px;
    margin-bottom:10px;
}

.puzzle h2{
    font-size:30px;
    margin-bottom:10px;
}

.puzzle-subtitle{
    color:var(--muted);
    margin-bottom:25px;
}

#question{
    margin-bottom:20px;
    line-height:1.5;
}

#options{
    max-width:600px;
    margin:auto;
    display:grid;
    gap:12px;
}

.option{
    padding:14px;
    border:1px solid var(--border);
    background:var(--bg);
    color:var(--text);
    border-radius:12px;
    cursor:pointer;
    font-size:16px;
    transition:.2s;
}

.option:hover{
    border-color:var(--primary);
    transform:scale(1.01);
}

.option.correct{
    background:#d9fbe5;
    border-color:#22a35a;
}

.option.wrong{
    background:#ffe0e0;
    border-color:#e53935;
}

.next-btn{
    margin-top:22px;
    padding:12px 20px;
    border:0;
    border-radius:10px;
    background:var(--primary);
    color:white;
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
}

.next-btn:hover{
    background:var(--secondary);
}

#score{
    margin-top:18px;
    font-weight:bold;
    font-size:18px;
}

</style>


<script>

const questions = [

{
    question:"Which law states that pressure is inversely proportional to volume at constant temperature?",
    options:[
        "Boyle's Law",
        "Charles' Law",
        "Ohm's Law",
        "Newton's Law"
    ],
    answer:0
},

{
    question:"What is the SI unit of electric power?",
    options:[
        "Volt",
        "Ampere",
        "Watt",
        "Ohm"
    ],
    answer:2
},

{
    question:"Which part of the cell controls its activities?",
    options:[
        "Mitochondria",
        "Nucleus",
        "Ribosome",
        "Vacuole"
    ],
    answer:1
},

{
    question:"If x² - 5x + 6 = 0, what are the roots?",
    options:[
        "1 and 6",
        "2 and 3",
        "3 and 4",
        "2 and 4"
    ],
    answer:1
},

{
    question:"Who founded the Arya Samaj?",
    options:[
        "Raja Ram Mohan Roy",
        "Swami Vivekananda",
        "Swami Dayanand Saraswati",
        "Mahatma Gandhi"
    ],
    answer:2
},

{
    question:"Which gas is mainly responsible for global warming?",
    options:[
        "Oxygen",
        "Nitrogen",
        "Carbon dioxide",
        "Hydrogen"
    ],
    answer:2
}

];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion(){

    answered = false;

    const q = questions[currentQuestion];

    document.getElementById("question").innerText =
        (currentQuestion + 1) + ". " + q.question;

    const options =
        document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach((option,index)=>{

        const button =
            document.createElement("button");

        button.className = "option";

        button.innerText = option;

        button.onclick = function(){
            checkAnswer(button,index);
        };

        options.appendChild(button);

    });

    document.getElementById("score").innerText =
        "Score: " + score + " / " + questions.length;
}


function checkAnswer(button,index){

    if(answered) return;

    answered = true;

    const correct =
        questions[currentQuestion].answer;

    const all =
        document.querySelectorAll(".option");

    if(index === correct){

        button.classList.add("correct");
        score++;

    }else{

        button.classList.add("wrong");
        all[correct].classList.add("correct");

    }

    document.getElementById("score").innerText =
        "Score: " + score + " / " + questions.length;
}


function nextQuestion(){

    if(!answered) return;

    currentQuestion++;

    if(currentQuestion >= questions.length){

        document.getElementById("question").innerText =
            "🎉 Quiz Completed!";

        document.getElementById("options").innerHTML = "";

        document.querySelector(".next-btn").style.display =
            "none";

        document.getElementById("score").innerText =
            "Your Final Score: " +
            score + " / " +
            questions.length;

        return;
    }

    loadQuestion();
}


loadQuestion();

</script>
