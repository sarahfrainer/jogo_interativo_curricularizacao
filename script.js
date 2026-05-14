const CUCA_IMG = 'img/cuca.jpg';
const CUSCUZ_IMG = 'img/cuscuz.jpg';
const MOQUECA_IMG = 'img/moqueca.jpg';
const FENARRECO_IMG = 'img/Fenarreco.jpg';
const OKTOBERFEST_IMG = 'img/oktoberfest.webp';
const CARNAVAL_IMG = 'img/Osterfest.webp';
const GALINHA_IMG = 'img/Galinha.jpg';
const MARRECO_IMG = 'img/Marreco.jpg';
const TUCANO_IMG = 'img/Tucano.webp';
const RIOAMAZONAS_IMG = 'img/Rio-amazonas-1920x1080.jpg';
const RIONILO_IMG = 'img/rio-nilo.jpg';
const RIOBRUSQUE_IMG = 'img/rio.webp';
const PARQUE_IMG = 'img/Parque-Esculturas.jpg';
const PRAIA_IMG = 'img/praia.jpg';
const PAVILHÃO_IMG = 'img/pavilhãoFenarreco.jpg';
const CONSUL_IMG = 'img/consul.jpeg';
const LUISXIV_IMG = 'img/luis_xiv.jpg';
const NAPOLEAO_IMG = 'img/napoleao.webp';
const BASILICA_IMG = 'img/basilica.jpg'; 
const MATRIZ_IMG = 'img/matriz.jpg';
const NOTREDAME_IMG = 'img/notredame.jpg';
const BRUSQUE_IMG = 'img/brusque.png';
const CORINTHIANS_IMG = 'img/corinthians.png';
const FLAMENGO_IMG = 'img/logoflamengo.png';
const FAZENDA_IMG = 'img/fazenda.png';
const REFINARIA_IMG = 'img/refinaria.png';
const ROUPA_IMG = 'img/roupa.png';

const questions = [

  //1
  {
    text: "Qual é a festa alemã que acontece em Brusque?",
    options: [
      { label: "FENARRECO", img: FENARRECO_IMG, correct: true },
      { label: "OKTOBERFEST", img: OKTOBERFEST_IMG, correct: false },
      { label: "CARNAVAL", img: CARNAVAL_IMG, correct: false },
    ]
  },
  //2
  {
    text: "Qual animal aparece no nome da festa Fenarreco?",
    options: [
      { label: "GALINHA", img: GALINHA_IMG, correct: false },
      { label: "MARRECO", img: MARRECO_IMG, correct: true },
      { label: "TUCANO", img: TUCANO_IMG, correct: false },
    ]
  },

  //6
  {
    text: "Qual é o rio que corta a cidade de Brusque?",
    options: [
      { label: "RIO AMAZONAS", img: RIOAMAZONAS_IMG, correct: false },
      { label: "RIO NILO", img: RIONILO_IMG, correct: false },
      { label: "RIO ITAJAÍ-MIRIM", img: RIOBRUSQUE_IMG, correct: true },
    ]
  },

  //7
  {
    text: "Marque a imagem que representa uma comida típica de Brusque",
    options: [
      { label: "CUCA", img: CUCA_IMG, correct: true },
      { label: "CUSCUZ", img: CUSCUZ_IMG, correct: false },
      { label: "MOQUECA", img: MOQUECA_IMG, correct: false },
    ]
  },

  //8
  {
    text: "Qual imagem abaixo é o parque das esculturas de Brusque?",
    options: [
      { label: "PARQUE", img: PARQUE_IMG, correct: true },
      { label: "PRAIA", img: PRAIA_IMG, correct: false },
      { label: "PAVILHÃO", img: PAVILHÃO_IMG, correct: false },
    ]
  },

  //9
  {
    text: "Qual desses era o Cônsul Carlos Renaux?",
    options: [
      { label: "CONSUL", img: CONSUL_IMG, correct: true },
      { label: "LUIS XIV", img: LUISXIV_IMG, correct: false },
      { label: "NAPOLEÃO", img: NAPOLEAO_IMG, correct: false },
    ]
  },

  //10
{
    text: "Qual dessas é a Igreja Matriz de Brusque?",
    options: [
      { label: "MATRIZ", img: MATRIZ_IMG, correct: true },
      { label: "BASILICA", img: BASILICA_IMG, correct: false },
      { label: "NOTREDAME", img: NOTREDAME_IMG, correct: false },
    ]
  },


  // {
  //   text: "Qual é a cor da bandeira de Brusque?",
  //   options: [
  //     { label:"VERDE E BRANCO", emoji:"🟢", correct:true  },
  //     { label:"AZUL E AMARELO", emoji:"🟡", correct:false },
  //     { label:"VERMELHO",       emoji:"🔴", correct:false },
  //   ]
  // },
  // {
  //   text: "Brusque fica em qual estado brasileiro?",
  //   options: [
  //     { label:"SÃO PAULO",      emoji:"🏙️", correct:false },
  //     { label:"SANTA CATARINA", emoji:"🏔️", correct:true  },
  //     { label:"PARANÁ",         emoji:"🌲", correct:false },
  //   ]
  // }
  
  //13
  {
    text: " Brusque é conhecida principalmente por qual atividade?",
    options: [
     { label:"Refinaria", img: REFINARIA_IMG, correct:false  },
      { label:"Fazenda", img: FAZENDA_IMG, correct:false },
      { label:"Roupa", img: ROUPA_IMG, correct:true },
    ]
  }

  //15
  {
    text: "Qual é a imagem do time de futebol da cidade de Brusque?",
    options: [
     { label:"Flamengo", img: FLAMENGO_IMG, correct:false  },
      { label:"Brusque", img: BRUSQUE_IMG, correct:true },
      { label:"Corinthians", img: CORINTHIANS_IMG, correct:false },
    ]
  }
];

let curQ = 0, score = 0, lastCorrect = false, answered = false;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function doLogin() {
  const nome = document.getElementById('nome').value.trim();
  if (!nome) {
    document.getElementById('nome').style.border = '2.5px solid #e74c3c';
    document.getElementById('nome').placeholder = '⚠️ Informe seu nome!';
    document.getElementById('nome').focus();
    return;
  }
  document.getElementById('nome').style.border = '';
  startGame();
}
function startGame() {
  curQ = 0; score = 0;
  loadQuestion();
  showScreen('sQuestion');
}

function restartGame() {
  curQ = 0; score = 0;
  loadQuestion();
  showScreen('sQuestion');
}

function loadQuestion() {
  answered = false;
  const q = questions[curQ];
  document.getElementById('qNum').textContent = curQ + 1;
  document.getElementById('qText').textContent = q.text;
  const pct = Math.round((curQ / questions.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';

  const grid = document.getElementById('optGrid');
  grid.innerHTML = '';
  const opts = [...q.options].sort(() => Math.random() - .5);
  opts.forEach(opt => {
    const card = document.createElement('div');
    card.className = 'opt';
    card.innerHTML = opt.img
      ? `<img class="opt-img" src="${opt.img}" alt="${opt.label}"><div class="opt-label">${opt.label}</div>`
      : `<div style="font-size:3.5rem;margin:18px 0">${opt.emoji}</div><div class="opt-label">${opt.label}</div>`;
    card.onclick = () => pick(card, opt.correct, opt.label, q.text);
    grid.appendChild(card);
  });
  setTimeout(() => speak(q.text), 400);
}

function pick(card, correct, label, question) {
  if (answered) return;
  answered = true; lastCorrect = correct;
  const toast = document.getElementById('toast');

  if (correct) {
    score++;
    card.classList.add('correct');
    toast.textContent = '✅  MUITO BEM!';
    toast.className = 'toast ok show';
    speak('Muito bem!');
    setTimeout(() => {
      toast.className = 'toast';
      showResultScreen();
    }, 1200);
  } else {
    card.classList.add('wrong');
    toast.textContent = '❌  Ops!';
    toast.className = 'toast err show';
    speak('Ops! Tente de novo!');
    setTimeout(() => {
      toast.className = 'toast';
      showErrorScreen(label, question);
    }, 1200);
  }
}

function showResultScreen() {
  const total = questions.length;
  const pct = score / (curQ + 1);
  document.getElementById('rTitle').textContent = pct === 1 ? 'PERFEITO! 🏆' : 'MUITO BEM!';
  document.getElementById('rScore').textContent = `VOCÊ ACERTOU ${score} DE ${curQ + 1}!`;
  ['st1', 'st2', 'st3'].forEach((id, i) => {
    const el = document.getElementById(id);
    el.classList.remove('lit');
    const lit = Math.ceil(pct * 3);
    if (i < lit) setTimeout(() => el.classList.add('lit'), 300 + i * 250);
  });
  showScreen('sResult');
  if (pct === 1) setTimeout(confetti, 500);
}

function showErrorScreen(wrongLabel, question) {
  document.getElementById('errorMsg').innerHTML =
    `VOCÊ ESCOLHEU <b>${wrongLabel}</b>, MAS ESSA NÃO É A RESPOSTA CERTA.<br><br>CONTINUE, VOCÊ CONSEGUE! 💪`;
  showScreen('sError');
}

function nextAfterError() {
  curQ++;
  if (curQ < questions.length) { loadQuestion(); showScreen('sQuestion'); }
  else showEndScreen();
}

function nextQuestion() {
  curQ++;
  if (curQ < questions.length) { loadQuestion(); showScreen('sQuestion'); }
  else showEndScreen();
}

function showEndScreen() {
  const total = questions.length;
  const pct = score / total;
  document.getElementById('endTotal').textContent = `VOCÊ ACERTOU ${score} DE ${total} PERGUNTAS!`;

  let title = 'JOGO CONCLUÍDO! 🏁';
  let medals = '';
  if (pct === 1) { title = 'INCRÍVEL! PERFEITO! 🏆'; medals = '🥇🥇🥇'; }
  else if (pct >= .67) { title = 'MUITO BEM! 🎉'; medals = '🥈⭐🥈'; }
  else if (pct >= .34) { title = 'BOM ESFORÇO! 💪'; medals = '🥉'; }
  else { title = 'CONTINUE PRATICANDO! 📚'; medals = '📚'; }

  document.getElementById('endTitle').textContent = title;
  document.getElementById('endMedals').textContent = medals;

  const starsEl = document.getElementById('endStars');
  starsEl.innerHTML = '';
  const lit = Math.round(pct * 5);
  for (let i = 0; i < 5; i++) {
    const s = document.createElement('div');
    s.className = 'star' + (i < lit ? ' lit' : '');
    s.textContent = '⭐';
    if (i < lit) s.style.animationDelay = (i * .18) + 's';
    starsEl.appendChild(s);
  }
  showScreen('sEnd');
  if (pct === 1) setTimeout(confetti, 500);
  speak(pct === 1 ? 'Parabéns! Você acertou tudo!' : 'Fim de jogo! Você acertou ' + score + ' de ' + total + ' perguntas!');
}

function readQ() { speak(questions[curQ].text); }

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'pt-BR'; u.rate = .9;
  speechSynthesis.speak(u);
}

function confetti() {
  const colors = ['#f5a623', '#3d9e3d', '#e74c3c', '#3498db', '#9b59b6', '#1abc9c', '#f39c12'];
  for (let i = 0; i < 70; i++) {
    const el = document.createElement('div');
    el.className = 'cfp';
    el.style.cssText = `left:${Math.random() * 100}vw;background:${colors[Math.floor(Math.random() * colors.length)]};animation-duration:${1.4 + Math.random() * 2}s;animation-delay:${Math.random() * .8}s;--d:${(Math.random() - .5) * 180}px;transform:rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}
