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
const LUISXIV_IMG = 'img/luis_XIV.jpg';
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
const TORREEIFFEL_IMG = 'img/eiffel-tower003.jpg';
const LENCOISMARANHENSES_IMG = 'img/lencois-maranhenses.png';
const STOPSHOP_IMG = 'img/stop-shop.jpg';
const BandeiraBQ_IMG = 'img/BandeiradeBrusque.png';
const BandeiraBL_IMG = 'img/BandeiradeBlumenau.png';
const BandeiraIT_IMG = 'img/BandeiradeItajai.png';
const Archer_img = 'img/Supermercado.jpg';
const Zoobotanico_img = 'img/parquezoobotanico.jpeg';
const ALEMANHA_IMG = 'img/Bandeira-Alemanha.png';
const PAISES_IMG = 'img/Bandeira-EUA-Inglaterra-Franca.png';
const ESPANHA_IMG = 'img/Espanha-Japão-Canadá.png';
const CARRO_IMG = 'img/carro.jpeg';
const CAMERA_IMG = 'img/camera.jpg';
const GELADEIRA_IMG = 'img/geladeira.jpg';
const Havan_IMG = 'img/FotoHavan.png';
const Ponteestaiada_IMG = 'img/Ponteestaiada.webp';
const Unifebe_IMG = 'img/unifebe-1.jpg';


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
//3
{
text: "Qual é a bandeira da nossa cidade?",
options: [
    { label: "bandeira brusque", img:BandeiraBQ_IMG ,correct: true },
    { label:"bandeira blumenau",img: BandeiraBL_IMG , correct: false },
   { label: "Bandeira itajai", img: BandeiraIT_IMG , correct: false },
]
},
//4
{
text :"Onde podemos ver animais e natureza em Brusque?",
options: [
{ label: "Parque das esculturas", img:PARQUE_IMG , correct: false},
{label: "Zoobotanico", img:Zoobotanico_img, correct:true},
{label: "Supermercados Archer", img:Archer_img , correct:false},
]
},
//5
{
text: " Em qual lugar existia um famoso relógio antigamente?:",
options:[
    {label: "Havan", img:Havan_IMG, correct:false},
    {label: "Ponte Estaida Irineu Bornhausen", img:Ponteestaiada_IMG, correct:true},
    {label: "Unifebe", img:Unifebe_IMG, correct:false},
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

  //11

  {
    text: " O que foi criado em Brusque?",
    options: [
      { label: "Carro", img: CARRO_IMG, correct: false },
    { label: "Câmera", img: CAMERA_IMG, correct: false },
    { label: "Geladeira", img: GELADEIRA_IMG, correct: true },
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

   //12
  {
    text: "  Qual desses é um ponto turístico da cidade?",
    options: [
     { label:"Torre Eiffel", img: TORREEIFFEL_IMG, correct:false  },
      { label:"Stop-Shop", img: STOPSHOP_IMG, correct:true },
      { label:"Leancois Maranhenses", img: LENCOISMARANHENSES_IMG, correct:false },
    ]
  },
  
  //13
  {
   text: " Brusque é conhecida principalmente por qual atividade?",
    options: [
     { label:"Refinaria", img: REFINARIA_IMG, correct:false },
      { label:"Fazenda", img: FAZENDA_IMG, correct:false },
     { label:"Roupa", img: ROUPA_IMG, correct:true },
    ]
  },

  //14 
  {
   text: " As tradições de Brusque vieram principalmente de pessoas que vieram de onde?",
    options: [
     { label:"Alemanha", img: ALEMANHA_IMG, correct:true },
      { label:"EUA, Inglaterra e França", img: PAISES_IMG, correct:false },
     { label:"Espanha, Japão e Canadá", img: ESPANHA_IMG, correct:false },
    ]
  },

  //15
  {
    text: "Qual é a imagem do time de futebol da cidade de Brusque?",
    options: [
     { label:"Flamengo", img: FLAMENGO_IMG, correct:false  },
      { label:"Brusque", img: BRUSQUE_IMG, correct:true },
      { label:"Corinthians", img: CORINTHIANS_IMG, correct:false },
    ]
  },
];

let curQ = 0, score = 0, lastCorrect = false, answered = false;
let activeQuestions = [];
let currentReadLabels = []; // rótulos das opções na ordem em que aparecem na tela

/* ── NÍVEIS DE DIFICULDADE ──
   Fácil: perguntas 0-4  (índices do array questions)
   Médio: perguntas 5-9
   Difícil: perguntas 10-14  (todas)
*/
const LEVELS = {
  facil:  [0, 1, 2, 3, 4],
  medio:  [5, 6, 7, 8, 9],
  dificil:[10, 11, 12, 13, 14]
};

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function doLogin() {
  const nome = document.getElementById('nome').value.trim();
  if (!nome) {
    document.getElementById('nome').style.border = '2.5px solid #e74c3c';
    document.getElementById('nome').placeholder = '⚠️ Escreva o seu nome!';
    document.getElementById('nome').focus();
    return;
  }
  document.getElementById('nome').style.border = '';
  goToDifficulty();
}

function goToDifficulty() {
  showScreen('sDifficulty');
  // Trava os botões enquanto a narração inicial toca, para evitar sobreposição
  setDifficultyEnabled(false);
  setTimeout(async () => {
    // await: só segue depois que o áudio terminar de tocar
    await speak('Qual nível você quer? Fácil, médio ou difícil?');
    setDifficultyEnabled(true);
  }, 400);
}

// Habilita/desabilita os 3 botões de nível ao mesmo tempo
function setDifficultyEnabled(enabled) {
  document.querySelectorAll('#sDifficulty .btn-diff').forEach(btn => {
    btn.disabled = !enabled;                       // bloqueia o clique de fato
    btn.style.opacity = enabled ? '' : '0.45';     // feedback visual de "travado"
    btn.style.cursor = enabled ? 'pointer' : 'not-allowed';
    btn.style.pointerEvents = enabled ? '' : 'none';
  });
}

function chooseDifficulty(level) {
  const indices = LEVELS[level] || LEVELS['facil'];
  activeQuestions = indices.map(i => questions[i]);
  startGame();
}

function startGame() {
  curQ = 0; score = 0;
  if (!activeQuestions.length) activeQuestions = questions;
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
  const q = activeQuestions[curQ];
  document.getElementById('qNum').textContent = curQ + 1;
  document.getElementById('qText').textContent = q.text;
  const pct = Math.round((curQ / activeQuestions.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';

  const grid = document.getElementById('optGrid');
  grid.innerHTML = '';
  const opts = [...q.options].sort(() => Math.random() - .5);
  currentReadLabels = opts.map(o => o.label); // guarda a ordem mostrada na tela
  opts.forEach(opt => {
    const card = document.createElement('div');
    card.className = 'opt';
    card.innerHTML = opt.img
      ? `<img class="opt-img" src="${opt.img}" alt="${opt.label}"><div class="opt-label">${opt.label}</div>`
      : `<div style="font-size:3.5rem;margin:18px 0">${opt.emoji}</div><div class="opt-label">${opt.label}</div>`;
    card.onclick = () => pick(card, opt.correct, opt.label, q.text);
    grid.appendChild(card);
  });
  // Lê a pergunta e, em seguida, cada opção em voz alta (na ordem da tela)
  setTimeout(() => readQuestionAndOptions(q.text, currentReadLabels), 400);
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
  if (curQ < activeQuestions.length) { loadQuestion(); showScreen('sQuestion'); }
  else showEndScreen();
}

function nextQuestion() {
  curQ++;
  if (curQ < activeQuestions.length) { loadQuestion(); showScreen('sQuestion'); }
  else showEndScreen();
}

function showEndScreen() {
  const total = activeQuestions.length;
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

function readQ() { readQuestionAndOptions(activeQuestions[curQ].text, currentReadLabels); }

class GerenciadorDeVoz {
  constructor() {
    this.sintetizador = window.speechSynthesis;
    this.vozes = [];
    this.vozAtual = null;

    this.carregarVozes();

    if (this.sintetizador.onvoiceschanged !== undefined) {
      this.sintetizador.onvoiceschanged = () => this.carregarVozes();
    }
  }

  carregarVozes() {
    this.vozes = this.sintetizador.getVoices();

    // Prioriza vozes mais naturais (Google / Microsoft / Neural)
    this.vozAtual =
      this.vozes.find(v => v.lang === 'pt-BR' && /google|microsoft|neural/i.test(v.name)) ||
      this.vozes.find(v => v.lang === 'pt-BR') ||
      this.vozes.find(v => v.lang.startsWith('pt'));
  }

  normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .replace(/!/g, '... ')
      .replace(/\?/g, '? ')
      .replace(/  +/g, ' ')
      .trim();
  }

  falar(texto) {
    if (!texto || !texto.trim()) return;

    const textoTratado = this.normalizarTexto(texto);

    const fala = new SpeechSynthesisUtterance(textoTratado);

    fala.lang = 'pt-BR';

    // Variação leve (humanização)
    fala.rate = 0.9 + Math.random() * 0.1;   // 0.9 - 1.0
    fala.pitch = 0.95 + Math.random() * 0.1; // 0.95 - 1.05
    fala.volume = 1;

    if (this.vozAtual) {
      fala.voice = this.vozAtual;
    }

    // Pequena pausa antes de falar (mais natural)
    setTimeout(() => {
      this.sintetizador.speak(fala);
    }, 100);
  }
}

const vozDoJogo = new GerenciadorDeVoz();

// ──────────────────────────────────────────────────────────────
//  SISTEMA DE ÁUDIO (ElevenLabs) — sem sobreposição e mais devagar
// ──────────────────────────────────────────────────────────────
// IMPORTANTE: a chave abaixo fica VISÍVEL para qualquer pessoa que abrir
// o código no navegador. Como o repositório é público, ela já está exposta.
// Recomendação: gerar uma nova chave e movê-la para um pequeno backend/proxy.
const ELEVEN_API_KEY = "sk_6bf4184f94245d3ee96fced191c31619e790278dc29f7307";
const ELEVEN_VOICE_ID = "EXAVITQu4vr4xnSDxMaL";

let _currentAudio = null;     // o <audio> que está tocando agora
let _currentResolve = null;   // resolve da Promise do áudio atual (para liberar quem aguarda)
let _readToken = 0;           // identifica a "sessão" de leitura; muda quando algo interrompe

// Para o áudio que estiver tocando e libera qualquer espera pendente
function stopAudio() {
  if (_currentAudio) {
    try { _currentAudio.pause(); } catch (e) {}
    try { URL.revokeObjectURL(_currentAudio.src); } catch (e) {}
    _currentAudio = null;
  }
  if (_currentResolve) {
    const r = _currentResolve;
    _currentResolve = null;
    r(); // resolve a Promise pendente, evitando travamentos
  }
}

// Toca UM texto e devolve uma Promise que só resolve quando o áudio termina.
// Se a rede/áudio falhar, resolve mesmo assim (o jogo nunca trava por causa do som).
function playOne(text) {
  return new Promise(async (resolve) => {
    stopAudio();                       // garante que nada esteja tocando junto
    if (!text || !text.trim()) return resolve();
    _currentResolve = resolve;
    try {
      const response = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/" + ELEVEN_VOICE_ID,
        {
          method: "POST",
          headers: {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": ELEVEN_API_KEY
          },
          body: JSON.stringify({
            text: text,
            model_id: "eleven_multilingual_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.8,
              speed: 0.85            // < 1.0 = fala mais devagar (faixa válida: 0.7 a 1.2)
            }
          })
        }
      );

      // Se outro áudio já assumiu enquanto buscávamos, abandona este
      if (_currentResolve !== resolve) return;
      if (!response.ok) { _currentResolve = null; return resolve(); }

      const blob = await response.blob();
      if (_currentResolve !== resolve) return;

      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      _currentAudio = audio;

      const done = () => {
        try { URL.revokeObjectURL(url); } catch (e) {}
        if (_currentAudio === audio) _currentAudio = null;
        if (_currentResolve === resolve) { _currentResolve = null; resolve(); }
      };
      audio.onended = done;
      audio.onerror = done;
      audio.play().catch(done); // navegador pode bloquear autoplay; resolve sem travar
    } catch (e) {
      console.error("Falha no áudio:", e);
      if (_currentResolve === resolve) { _currentResolve = null; resolve(); }
    }
  });
}

// Fala única (uso geral). Cancela qualquer leitura em sequência que esteja rolando.
function speak(text) {
  _readToken++;            // invalida a leitura de pergunta+opções, se houver
  return playOne(text);
}

// Lê a pergunta e DEPOIS cada opção, uma de cada vez (sem sobrepor).
// Se o aluno clicar numa resposta no meio, a sequência é cancelada.
async function readQuestionAndOptions(questionText, labels) {
  const myToken = ++_readToken;     // abre uma nova sessão de leitura
  await playOne(questionText);
  if (myToken !== _readToken) return;            // foi interrompida
  for (const label of (labels || [])) {
    await playOne(label);
    if (myToken !== _readToken) return;          // foi interrompida
  }
}
