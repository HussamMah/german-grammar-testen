<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deutsch Grammatik Test</title>
    <style>
        :root {
            --primary: #2c3e50;
            --secondary: #e74c3c;
            --accent: #3498db;
            --light: #ecf0f1;
            --success: #2ecc71;
            --danger: #e74c3c;
            --warning: #f39c12;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            color: #333;
            min-height: 100vh;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .container {
            width: 100%;
            max-width: 800px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            margin: 20px 0;
        }
        
        header {
            background: var(--primary);
            color: white;
            padding: 25px;
            text-align: center;
        }
        
        h1 {
            font-size: 2.2rem;
            margin-bottom: 10px;
        }
        
        .instructions {
            padding: 20px;
            background: var(--light);
            line-height: 1.6;
        }
        
        .quiz-container {
            padding: 20px;
        }
        
        .question {
            margin-bottom: 25px;
            padding: 15px;
            border-radius: 8px;
            background: #f8f9fa;
            border-left: 5px solid var(--accent);
        }
        
        .question-text {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        .options {
            display: grid;
            gap: 10px;
        }
        
        .option {
            padding: 12px 15px;
            background: white;
            border: 2px solid #ddd;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .option:hover {
            background: #e8f4fc;
            border-color: var(--accent);
        }
        
        .option.selected {
            background: var(--accent);
            color: white;
            border-color: var(--accent);
        }
        
        .navigation {
            display: flex;
            justify-content: space-between;
            padding: 20px;
            background: #f8f9fa;
            border-top: 1px solid #ddd;
        }
        
        button {
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
        }
        
        #prev-btn {
            background: #95a5a6;
            color: white;
        }
        
        #next-btn, #submit-btn {
            background: var(--primary);
            color: white;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }
        
        .results {
            text-align: center;
            padding: 30px;
            display: none;
        }
        
        .score {
            font-size: 2.5rem;
            color: var(--primary);
            margin: 20px 0;
        }
        
        .progress-container {
            height: 12px;
            background: #ddd;
            border-radius: 10px;
            margin: 20px 0;
            overflow: hidden;
        }
        
        .progress-bar {
            height: 100%;
            background: var(--success);
            width: 0%;
            transition: width 0.5s;
        }
        
        footer {
            text-align: center;
            margin-top: 20px;
            color: white;
            font-size: 0.9rem;
        }
        
        @media (max-width: 600px) {
            .container {
                margin: 10px;
                border-radius: 10px;
            }
            
            h1 {
                font-size: 1.8rem;
            }
            
            .navigation {
                flex-direction: column;
                gap: 10px;
            }
            
            button {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Deutsch Grammatik Test</h1>
            <p>Testen und verbessern Sie Ihre Deutschkenntnisse</p>
        </header>
        
        <div class="instructions">
            <h2>Willkommen zum Grammatiktest!</h2>
            <p>Dieser Test enthält Fragen zur deutschen Grammatik. Wählen Sie für jede Frage die richtige Antwort aus.</p>
            <p>Am Ende erhalten Sie eine Auswertung Ihrer Leistung.</p>
        </div>
        
        <div class="quiz-container">
            <div id="question-container">
                <!-- Questions will be inserted here by JavaScript -->
            </div>
            
            <div class="navigation">
                <button id="prev-btn" onclick="prevQuestion()" disabled>Zurück</button>
                <button id="next-btn" onclick="nextQuestion()">Weiter</button>
                <button id="submit-btn" onclick="submitQuiz()" style="display: none;">Test beenden</button>
            </div>
        </div>
        
        <div class="results" id="results">
            <h2>Ihr Testergebnis</h2>
            <div class="score" id="score">0/10</div>
            <div class="progress-container">
                <div class="progress-bar" id="progress-bar"></div>
            </div>
            <p id="result-message"></p>
            <button onclick="restartQuiz()" style="background: var(--accent); color: white; margin-top: 20px;">Test wiederholen</button>
        </div>
    </div>
    
    <footer>
        <p>© 2023 Deutsch Grammatik Test | Entwickelt für German Learners</p>
    </footer>

    <script>
        // Quiz data
        const questions = [
            {
                question: "Welcher Artikel ist richtig? _____ Mann liest ein Buch.",
                options: ["Der", "Die", "Das", "Den"],
                correct: 0,
                explanation: "Mann ist maskulin, daher wird der bestimmte Artikel 'der' verwendet."
            },
            {
                question: "Ergänzen Sie: Ich _____ nach Hause gegangen.",
                options: ["bin", "habe", "bist", "sind"],
                correct: 0,
                explanation: "Das Verb 'gehen' verwendet 'sein' als Hilfsverb im Perfekt. Für 'ich' ist die Form 'bin' korrekt."
            },
            {
                question: "Welcher Kasus folgt auf 'wegen'?",
                options: ["Nominativ", "Akkusativ", "Genitiv", "Dativ"],
                correct: 2,
                explanation: "Die Präposition 'wegen' verlangt den Genitiv (z.B. Wegen des Wetters bleiben wir zu Hause)."
            },
            {
                question: "Wie lautet die Pluralform von 'das Kind'?",
                options: ["die Kinde", "die Kinder", "die Kinds", "die Kinden"],
                correct: 1,
                explanation: "Die Pluralform von 'das Kind' ist 'die Kinder'."
            },
            {
                question: "Welches Verb ist richtig? Er _____ jeden Tag Tennis.",
                options: ["spielt", "spielen", "spielst", "spiele"],
                correct: 0,
                explanation: "Die korrekte Konjugation für 'er/sie/es' im Präsens ist 'spielt'."
            }
        ];

        let currentQuestionIndex = 0;
        let userAnswers = new Array(questions.length).fill(null);
        let quizSubmitted = false;

        // Initialize the quiz
        function initQuiz() {
            displayQuestion(currentQuestionIndex);
            updateNavigation();
        }

        // Display current question
        function displayQuestion(index) {
            const questionContainer = document.getElementById('question-container');
            const question = questions[index];
            
            questionContainer.innerHTML = `
                <div class="question">
                    <div class="question-text">${index + 1}. ${question.question}</div>
                    <div class="options">
                        ${question.options.map((option, i) => `
                            <div class="option ${userAnswers[index] === i ? 'selected' : ''}" 
                                 onclick="selectOption(${i})">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            updateNavigation();
        }

        // Select an option
        function selectOption(optionIndex) {
            if (quizSubmitted) return;
            
            userAnswers[currentQuestionIndex] = optionIndex;
            displayQuestion(currentQuestionIndex);
        }

        // Navigate to next question
        function nextQuestion() {
            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            }
        }

        // Navigate to previous question
        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion(currentQuestionIndex);
            }
        }

        // Update navigation buttons
        function updateNavigation() {
            document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
            
            if (currentQuestionIndex === questions.length - 1) {
                document.getElementById('next-btn').style.display = 'none';
                document.getElementById('submit-btn').style.display = 'block';
            } else {
                document.getElementById('next-btn').style.display = 'block';
                document.getElementById('submit-btn').style.display = 'none';
            }
        }

        // Submit the quiz
        function submitQuiz() {
            quizSubmitted = true;
            
            // Calculate score
            let score = 0;
            userAnswers.forEach((answer, index) => {
                if (answer === questions[index].correct) {
                    score++;
                }
            });
            
            // Display results
            document.getElementById('score').textContent = `${score}/${questions.length}`;
            document.getElementById('progress-bar').style.width = `${(score/questions.length) * 100}%`;
            
            // Set result message
            const percentage = (score / questions.length) * 100;
            let message = "";
            
            if (percentage >= 80) {
                message = "Herzlichen Glückwunsch! Exzellente Kenntnisse!";
            } else if (percentage >= 60) {
                message = "Gut gemacht! Solide Kenntnisse.";
            } else if (percentage >= 40) {
                message = "Nicht schlecht! Mit mehr Übung werden Sie besser.";
            } else {
                message = "Übung macht den Meister! Bleiben Sie dran.";
            }
            
            document.getElementById('result-message').textContent = message;
            
            // Show results, hide quiz
            document.querySelector('.quiz-container').style.display = 'none';
            document.getElementById('results').style.display = 'block';
        }

        // Restart the quiz
        function restartQuiz() {
            currentQuestionIndex = 0;
            userAnswers = new Array(questions.length).fill(null);
            quizSubmitted = false;
            
            document.querySelector('.quiz-container').style.display = 'block';
            document.getElementById('results').style.display = 'none';
            
            displayQuestion(currentQuestionIndex);
        }

        // Initialize the quiz when the page loads
        window.onload = initQuiz;
    </script>
</body>
</html>
