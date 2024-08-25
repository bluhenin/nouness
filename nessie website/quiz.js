const quizData = [
    {
      question: "what is my favourite physical trait of yours?",
      options: ["eyes", "lips", "nose", "hair"],
      answer: "nose"
    },
    {
      question: "what is my favourite non-physical trait of yours?",
      options: ["patience", "genuinity", "intelligence", "humour"],
      answer: "genuinity"
    },
    {
    question: "why are you the best?",
      options: ["i'm smart", "i'm funny", "i'm hot", "bel said so"],
      answer: "bel said so"
    },
    {
    question: "fo9ach tsa7bna?",
      options: ["15 december 2023", "13 december 2023", "20 december 2023", "18 december 2023"],
      answer: "15 december 2023"
  },
  {
    question: "what's your rising sign?",
      options: ["capricorn", "sagittarius", "cancer", "virgo"],
      answer: "sagittarius"
  },
  {
    question: "what's my next favourite physical trait of yours?",
      options: ["nose", "eyes", "smile", "hair"],
      answer: "smile"
  },
  {
    question: "what animal do you remind me of?",
      options: ["puppy", "bumblebee", "deer", "kitten"],
      answer: "kitten"
  },
  
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  
  function showResult() {
    if (score < quizData.length) {
      quiz.innerHTML = `
      <h2>quiz completed :3</h2>
      <p>your score: ${score}/${quizData.length}</p>
      <p>try again loser</p>
      <img id = 'catlaughing' src = 'images/cat_laughing.png'>
    `;
    }
    
    else {
      quiz.innerHTML = `
      <h2>quiz completed :3</h2>
      <p>your score: ${score}/${quizData.length}</p>
      <p>yayyy good job my love</p>
      <img id = 'bananacat' src = 'images/banana_cat.jpg'>
    `;
    }
  }
  
  showQuestion();