// script.js

// Banco de perguntas
const questions = [
    { question: "Qual é a capital da França?", options: ["Londres", "Paris", "Roma", "Berlim"], answer: 1 },
    { question: "Qual é o maior planeta do Sistema Solar?", options: ["Terra", "Júpiter", "Marte", "Vênus"], answer: 1 },
    { question: "Quem pintou a Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: 2 },
    { question: "Qual é o metal mais abundante na Terra?", options: ["Ferro", "Alumínio", "Cobre", "Zinco"], answer: 1 },
    { question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"], answer: 1 },
    { question: "Quantos continentes existem no mundo?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Quem escreveu 'Romeu e Julieta'?", options: ["Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], answer: 0 },
    { question: "Qual é a fórmula química da água?", options: ["H2O", "CO2", "O2", "H2"], answer: 0 },
    { question: "Quem descobriu o Brasil?", options: ["Pedro Álvares Cabral", "Cristóvão Colombo", "Vasco da Gama", "Américo Vespúcio"], answer: 0 },
    { question: "Qual animal é conhecido como 'Rei da Selva'?", options: ["Tigre", "Leão", "Elefante", "Guepardo"], answer: 1 },
    { question: "Quantos segundos há em um minuto?", options: ["30", "60", "90", "120"], answer: 1 },
    { question: "Qual é o menor país do mundo?", options: ["Mônaco", "Vaticano", "Malta", "Andorra"], answer: 1 },
    { question: "Qual é o idioma mais falado no mundo?", options: ["Inglês", "Chinês", "Espanhol", "Hindi"], answer: 1 },
    { question: "Qual é o principal gás que respiramos?", options: ["Nitrogênio", "Oxigênio", "Hélio", "Dióxido de Carbono"], answer: 1 },
    { question: "Quem é conhecido como o 'pai da física'?", options: ["Newton", "Einstein", "Galileu", "Maxwell"], answer: 0 },
    { question: "Qual é o maior oceano do mundo?", options: ["Atlântico", "Pacífico", "Índico", "Ártico"], answer: 1 },
    { question: "Qual é o símbolo químico do ouro?", options: ["Au", "Ag", "Fe", "Cu"], answer: 0 },
    { question: "Qual é o planeta mais próximo do Sol?", options: ["Mercúrio", "Vênus", "Terra", "Marte"], answer: 0 },
    { question: "Quantos ossos há no corpo humano adulto?", options: ["206", "208", "210", "212"], answer: 0 },
    { question: "Quem é o autor de 'Dom Quixote'?", options: ["Miguel de Cervantes", "Gabriel García Márquez", "Pablo Neruda", "Federico García Lorca"], answer: 0 },
  ];
  
  // Seleciona 5 perguntas aleatórias
  let selectedQuestions = [];
  function selectRandomQuestions() {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    selectedQuestions = shuffled.slice(0, 5);
  }
  
  // Exibe respostas no console ao abrir DevTools
  window.addEventListener("keydown", (event) => {
    if (event.key === "F12") {
      console.clear();
      console.log("Respostas do Quiz:");
      selectedQuestions.forEach((q, index) => {
        console.log(`${index + 1}: ${q.question} - Resposta: ${q.options[q.answer]}`);
      });
    }
  });
  
  let currentQuestion = 0;
  let score = 0;
  
  // Elementos do DOM
  const quiz = document.getElementById("quiz");
  const questionEl = document.querySelector(".question");
  const optionsEl = document.querySelector(".options");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const totalEl = document.getElementById("total");
  const restartBtn = document.getElementById("restart-btn");
  
  // Carrega a pergunta atual
  function loadQuestion() {
    const current = selectedQuestions[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = "";
  
    current.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(index));
      optionsEl.appendChild(button);
    });
  
    nextBtn.classList.add("hidden");
  }
  
  // Verifica a resposta
  function checkAnswer(selected) {
    const correct = selectedQuestions[currentQuestion].answer;
    if (selected === correct) {
      score++;
    }
    document.querySelectorAll(".option").forEach((button, index) => {
      button.disabled = true;
      button.style.background = index === correct ? "#28a745" : "#dc3545";
    });
    nextBtn.classList.remove("hidden");
  }
  
  // Mostra o resultado final
  function showResult() {
    quiz.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = score;
    totalEl.textContent = selectedQuestions.length;
  }
  
  // Reinicia o quiz
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    quiz.classList.remove("hidden");
    resultEl.classList.add("hidden");
    selectRandomQuestions();
    loadQuestion();
  }
  
  // Configura os botões
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  restartBtn.addEventListener("click", restartQuiz);
  
  // Inicia o quiz com perguntas aleatórias
  selectRandomQuestions();
  loadQuestion();
  