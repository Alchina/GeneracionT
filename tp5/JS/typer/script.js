const words = [
    'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane', 
    'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium', 
    'quixoticelixer', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili'
  ];
  
  const wordEl = document.getElementById('word');
  const textEl = document.getElementById('text');
  const scoreEl = document.getElementById('score');
  const timeEl = document.getElementById('time');
  const endgameEl = document.getElementById('end-game-container');
  const settingsBtn = document.getElementById('settings-btn');
  const settings = document.querySelector('.settings');
  const difficultySelect = document.getElementById('difficulty');
  
  let randomWord;
  let score = 0;
  let time = 10;
  let difficulty = localStorage.getItem('difficulty') !== null 
    ? localStorage.getItem('difficulty') 
    : 'medium';
  
  difficultySelect.value = difficulty;
  
  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }
  
  function addWordToDOM() {
    randomWord = getRandomWord();
    wordEl.innerHTML = randomWord;
  }
  
  function updateScore() {
    score++;
    scoreEl.innerHTML = score;
  }
  
  function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
  
    if (time === 0) {
      clearInterval(timeInterval);
      gameOver();
    }
  }
  
  function gameOver() {
    endgameEl.innerHTML = `
      <h1>Se acabó el tiempo</h1>
      <p>Tu puntaje final es: ${score}</p>
      <button onclick="location.reload()">Volver a jugar</button>
    `;
  
    endgameEl.style.display = 'flex';
  }
  
  textEl.addEventListener('input', e => {
    const insertedText = e.target.value;
  
    if (insertedText === randomWord) {
      addWordToDOM();
      updateScore();
  
      e.target.value = '';
  
      if (difficulty === 'hard') {
        time += 2;
      } else if (difficulty === 'medium') {
        time += 3;
      } else {
        time += 5;
      }
  
      updateTime();
    }
  });
  
  settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));
  difficultySelect.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
  });
  
  addWordToDOM();
  textEl.focus();
  
  const timeInterval = setInterval(updateTime, 1000);
  