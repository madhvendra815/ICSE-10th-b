#<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ICSE Class 10 Hub | Madhav</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

:root {
    --bg: #f6f8fc;
    --card: #ffffff;
    --text: #172033;
    --muted: #697386;
    --primary: #315efb;
    --primary2: #6846ff;
    --border: #e6e9f0;
}

body.dark {
    --bg: #0d111c;
    --card: #151b29;
    --text: #f5f7ff;
    --muted: #aab2c3;
    --border: #293143;
}

body {
    background: var(--bg);
    color: var(--text);
    transition: .3s;
}

/* HEADER */

header {
    background: linear-gradient(135deg, #315efb, #6846ff);
    color: white;
    padding: 22px 7%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.logo {
    font-size: 24px;
    font-weight: 800;
}

.logo span {
    opacity: .8;
}

.header-buttons {
    display: flex;
    gap: 10px;
}

.header-buttons button {
    border: none;
    background: rgba(255,255,255,.18);
    color: white;
    padding: 10px 14px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
}

/* HERO */

.hero {
    padding: 70px 7% 50px;
    text-align: center;
}

.hero h1 {
    font-size: clamp(35px, 6vw, 64px);
    line-height: 1.05;
    margin-bottom: 18px;
}

.gradient-text {
    background: linear-gradient(90deg, #315efb, #8b45ff);
    -webkit-background-clip: text;
    color: transparent;
}

.hero p {
    max-width: 700px;
    margin: auto;
    color: var(--muted);
    font-size: 18px;
    line-height: 1.6;
}

/* SEARCH */

.search-box {
    max-width: 650px;
    margin: 30px auto;
    position: relative;
}

.search-box input {
    width: 100%;
    padding: 17px 20px;
    border: 1px solid var(--border);
    border-radius: 15px;
    background: var(--card);
    color: var(--text);
    outline: none;
    font-size: 16px;
    box-shadow: 0 8px 30px rgba(0,0,0,.05);
}

/* CONTAINER */

.container {
    width: 86%;
    max-width: 1200px;
    margin: auto;
}

.section {
    padding: 30px 0 60px;
}

.section-title {
    font-size: 30px;
    margin-bottom: 8px;
}

.section-subtitle {
    color: var(--muted);
    margin-bottom: 25px;
}

/* SUBJECTS */

.subject-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 18px;
}

.subject {
    background: var(--card);
    border: 1px solid var(--border);
    padding: 24px;
    border-radius: 18px;
    transition: .25s;
}

.subject:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(49,94,251,.12);
}

.icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eef2ff;
    border-radius: 14px;
    font-size: 25px;
    margin-bottom: 15px;
}

.subject h3 {
    margin-bottom: 8px;
}

.subject p {
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
}

.btn {
    display: inline-block;
    margin-top: 16px;
    background: var(--primary);
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 9px;
    font-size: 14px;
}

/* RESOURCE CARDS */

.resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 18px;
}

.resource {
    background: var(--card);
    border: 1px solid var(--border);
    padding: 25px;
    border-radius: 18px;
}

.resource h3 {
    margin-bottom: 10px;
}

.resource p {
    color: var(--muted);
    line-height: 1.5;
}

/* DRIVE */

.drive {
    background: linear-gradient(135deg, #315efb, #6846ff);
    color: white;
    padding: 35px;
    border-radius: 22px;
    text-align: center;
}

.drive h2 {
    margin-bottom: 10px;
}

.drive p {
    opacity: .9;
    margin-bottom: 18px;
}

.drive-btn {
    display: inline-block;
    background: white;
    color: #315efb;
    text-decoration: none;
    padding: 12px 20px;
    border-radius: 10px;
    font-weight: bold;
}

/* TIPS */

.tips {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 18px;
}

.tip {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 22px;
}

.tip strong {
    display: block;
    margin-bottom: 8px;
}

.tip p {
    color: var(--muted);
    line-height: 1.5;
}

/* FOOTER */

footer {
    margin-top: 50px;
    padding: 35px 20px;
    text-align: center;
    background: #101728;
    color: white;
}

footer p {
    margin: 7px;
    color: #b9c1d1;
}

footer .name {
    color: white;
    font-weight: bold;
}

/* MOBILE */

@media(max-width:600px) {

    header {
        padding: 18px 5%;
    }

    .logo {
        font-size: 19px;
    }

    .hero {
        padding: 50px 6% 35px;
    }

    .hero p {
        font-size: 16px;
    }

    .container {
        width: 90%;
    }

    .section-title {
        font-size: 25px;
    }
}
</style>
</head>

<body>

<!-- HEADER -->

<header>

    <div class="logo">
        📚 ICSE <span>Class 10 Hub</span>
    </div>

    <div class="header-buttons">
        <button onclick="toggleDark()">🌙</button>
    </div>

</header>


<!-- HERO -->

<section class="hero">

    <h1>
        Study Smarter.<br>
        <span class="gradient-text">Score Better.</span>
    </h1>

    <p>
        A complete study hub for ICSE Class 10 students —
        notes, important questions, PYQs, CFQs and specimen papers
        in one place.
    </p>

    <div class="search-box">
        <input
            type="text"
            id="search"
            placeholder="🔍 Search subjects and resources..."
            onkeyup="searchContent()"
        >
    </div>

</section>


<main class="container">

<!-- SUBJECTS -->

<section class="section">

    <h2 class="section-title">📚 Subjects</h2>

    <p class="section-subtitle">
        Choose a subject to start studying.
    </p>

    <div class="subject-grid" id="subjects">

        <div class="subject searchable">
            <div class="icon">📐</div>
            <h3>Mathematics</h3>
            <p>Formulas, concepts, examples and important questions.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">⚡</div>
            <h3>Physics</h3>
            <p>Concepts, formulas, numericals and revision material.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">🧪</div>
            <h3>Chemistry</h3>
            <p>Equations, reactions, concepts and important questions.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">🧬</div>
            <h3>Biology</h3>
            <p>Diagrams, definitions, processes and revision notes.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">🌍</div>
            <h3>Geography</h3>
            <p>Maps, resources, climate and important topics.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">📜</div>
            <h3>History & Civics</h3>
            <p>Important events, chapters and examination questions.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">📖</div>
            <h3>English</h3>
            <p>Language, Literature, grammar and writing practice.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

        <div class="subject searchable">
            <div class="icon">💻</div>
            <h3>Computer Applications</h3>
            <p>Java programs, theory, practice questions and revision.</p>
            <a href="#" class="btn">Explore →</a>
        </div>

    </div>

</section>


<!-- RESOURCES -->

<section class="section">

    <h2 class="section-title">📝 Exam Resources</h2>

    <p class="section-subtitle">
        Everything you need for ICSE examination preparation.
    </p>

    <div class="resource-grid">

        <div class="resource searchable">
            <h3>📄 Previous Year Questions</h3>
            <p>
                Practice previous year questions and understand
                the ICSE examination pattern.
            </p>

            <a href=https://drive.google.com/drive/folders/1at14131FhYvGWQiH975OWwXiVZWrhF1W
               target="_blank"
               class="btn">
               Open PYQs →
            </a>
        </div>


        <div class="resource searchable">
            <h3>🎯 CFQs</h3>
            <p>
                Practice competency-focused questions and
                strengthen your concepts.
            </p>

            <a href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank"
               class="btn">
               Open CFQs →
            </a>
        </div>


        <div class="resource searchable">
            <h3>📑 Specimen Papers</h3>
            <p>
                Practice specimen papers and prepare yourself
                for the latest examination format.
            </p>

            <a href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
               target="_blank"
               class="btn">
               Open Papers →
            </a>
        </div>

    </div>

</section>


<!-- GOOGLE DRIVE -->

<section class="section">

    <div class="drive">

        <h2>☁️ Complete Study Material</h2>

        <p>
            Access the complete collection of PYQs,
            CFQs and specimen papers.
        </p>

        <a
        href="https://drive.google.com/drive/folders/1oTAXyQ2NQtuhBYTLG-UOwJ4AXXLLtFpz"
        target="_blank"
        class="drive-btn">
        Open Google Drive →
        </a>

    </div>

</section>


<!-- STUDY TIPS -->

<section class="section">

    <h2 class="section-title">💡 Study Smart</h2>

    <p class="section-subtitle">
        Simple habits that can make your preparation better.
    </p>

    <div class="tips">

        <div class="tip">
            <strong>📅 Make a Plan</strong>
            <p>
                Divide your syllabus into small daily targets
                and revise regularly.
            </p>
        </div>

        <div class="tip">
            <strong>📝 Practice PYQs</strong>
            <p>
                Solve previous questions to understand
                common question patterns.
            </p>
        </div>

        <div class="tip">
            <strong>🔄 Revise</strong>
            <p>
                Keep revising formulas, definitions,
                diagrams and important concepts.
            </p>
        </div>

        <div class="tip">
            <strong>⏱️ Time Yourself</strong>
            <p>
                Practice sample papers with a timer
                to improve your exam speed.
            </p>
        </div>

    </div>

</section>

</main>


<!-- FOOTER -->

<footer>

    <p class="name">
        Made with ❤️ by Madhav
    </p>

    <p>
        ICSE Class 10-B Educational Hub
    </p>

    <p>
        © 2026–27 Madhav. All Rights Reserved.
    </p>

</footer>


<script>

/* DARK MODE */

function toggleDark() {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "on");
    } else {
        localStorage.setItem("darkMode", "off");
    }
}

if(localStorage.getItem("darkMode") === "on") {
    document.body.classList.add("dark");
}


/* SEARCH */

function searchContent() {

    let input = document
        .getElementById("search")
        .value
        .toLowerCase();

    let items = document.querySelectorAll(".searchable");

    items.forEach(function(item) {

        let text = item.innerText.toLowerCase();

        if(text.includes(input)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }

    });
}

</script>

</body>
</html> ICSE-10th-b
