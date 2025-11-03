// A LISTA DE VERBOS IRREGULARES EXPANDIDA 
const verbList = [
    { infinitive: "BE", past: "WAS" },
    { infinitive: "BECOME", past: "BECAME" },
    { infinitive: "BEGIN", past: "BEGAN" },
    { infinitive: "BEND", past: "BENT" },
    { infinitive: "BET", past: "BET" },
    { infinitive: "BID", past: "BID" },
    { infinitive: "BIND", past: "BOUND" },
    { infinitive: "BITE", past: "BIT" },
    { infinitive: "BLEED", past: "BLED" },
    { infinitive: "BLOW", past: "BLEW" },
    { infinitive: "BREAK", past: "BROKE" },
    { infinitive: "BRING", past: "BROUGHT" },
    { infinitive: "BUILD", past: "BUILT" },
    { infinitive: "BURN", past: "BURNED" },
    { infinitive: "BUY", past: "BOUGHT" },
    { infinitive: "CATCH", past: "CAUGHT" },
    { infinitive: "CHOOSE", past: "CHOSE" },
    { infinitive: "COME", past: "CAME" },
    { infinitive: "COST", past: "COST" },
    { infinitive: "CREEP", past: "CREPT" },
    { infinitive: "CUT", past: "CUT" },
    { infinitive: "DEAL", past: "DEALT" },
    { infinitive: "DIG", past: "DUG" },
    { infinitive: "DO", past: "DID" },
    { infinitive: "DRAW", past: "DREW" },
    { infinitive: "DREAM", past: "DREAMED" },
    { infinitive: "DRINK", past: "DRANK" },
    { infinitive: "DRIVE", past: "DROVE" },
    { infinitive: "EAT", past: "ATE" },
    { infinitive: "FALL", past: "FELL" },
    { infinitive: "FEED", past: "FED" },
    { infinitive: "FEEL", past: "FELT" },
    { infinitive: "FIGHT", past: "FOUGHT" },
    { infinitive: "FIND", past: "FOUND" },
    { infinitive: "FLEE", past: "FLED" },
    { infinitive: "FLY", past: "FLEW" },
    { infinitive: "FORBID", past: "FORBADE" },
    { infinitive: "FORGET", past: "FORGOT" },
    { infinitive: "FORGIVE", past: "FORGAVE" },
    { infinitive: "FREEZE", past: "FROZE" },
    { infinitive: "GET", past: "GOT" },
    { infinitive: "GIVE", past: "GAVE" },
    { infinitive: "GO", past: "WENT" },
    { infinitive: "GROW", past: "GREW" },
    { infinitive: "HANG", past: "HUNG" },
    { infinitive: "HAVE", past: "HAD" },
    { infinitive: "HEAR", past: "HEARD" },
    { infinitive: "HIDE", past: "HID" },
    { infinitive: "HIT", past: "HIT" },
    { infinitive: "HOLD", past: "HELD" },
    { infinitive: "HURT", past: "HURT" },
    { infinitive: "KEEP", past: "KEPT" },
    { infinitive: "KNEEL", past: "KNELT" },
    { infinitive: "KNOW", past: "KNEW" },
    { infinitive: "LAY", past: "LAID" },
    { infinitive: "LEAD", past: "LED" },
    { infinitive: "LEAN", past: "LEANED" },
    { infinitive: "LEAVE", past: "LEFT" },
    { infinitive: "LEND", past: "LENT" },
    { infinitive: "LET", past: "LET" },
    { infinitive: "LIE", past: "LAY" },
    { infinitive: "LIGHT", past: "LIT" },
    { infinitive: "LOSE", past: "LOST" },
    { infinitive: "MAKE", past: "MADE" },
    { infinitive: "MEAN", past: "MEANT" },
    { infinitive: "MEET", past: "MET" },
    { infinitive: "PAY", past: "PAID" },
    { infinitive: "PUT", past: "PUT" },
    { infinitive: "QUIT", past: "QUIT" },
    { infinitive: "READ", past: "READ" },
    { infinitive: "RIDE", past: "RODE" },
    { infinitive: "RING", past: "RANG" },
    { infinitive: "RISE", past: "ROSE" },
    { infinitive: "RUN", past: "RAN" },
    { infinitive: "SAY", past: "SAID" },
    { infinitive: "SEE", past: "SAW" },
    { infinitive: "SEEK", past: "SOUGHT" },
    { infinitive: "SELL", past: "SOLD" },
    { infinitive: "SEND", past: "SENT" },
    { infinitive: "SET", past: "SET" },
    { infinitive: "SHAKE", past: "SHOOK" },
    { infinitive: "SHINE", past: "SHONE" },
    { infinitive: "SHOOT", past: "SHOT" },
    { infinitive: "SHOW", past: "SHOWED" },
    { infinitive: "SHRINK", past: "SHRANK" },
    { infinitive: "SHUT", past: "SHUT" },
    { infinitive: "SING", past: "SANG" },
    { infinitive: "SINK", past: "SANK" },
    { infinitive: "SIT", past: "SAT" },
    { infinitive: "SLEEP", past: "SLEPT" },
    { infinitive: "SLIDE", past: "SLID" },
    { infinitive: "SPEAK", past: "SPOKE" },
    { infinitive: "SPEND", past: "SPENT" },
    { infinitive: "SPIN", past: "SPUN" },
    { infinitive: "SPREAD", past: "SPREAD" },
    { infinitive: "SPRING", past: "SPRANG" },
    { infinitive: "STAND", past: "STOOD" },
    { infinitive: "STEAL", past: "STOLE" },
    { infinitive: "STICK", past: "STUCK" },
    { infinitive: "STING", past: "STUNG" },
    { infinitive: "STRIKE", past: "STRUCK" },
    { infinitive: "SWEAR", past: "SWORE" },
    { infinitive: "SWEEP", past: "SWEPT" },
    { infinitive: "SWIM", past: "SWAM" },
    { infinitive: "TAKE", past: "TOOK" },
    { infinitive: "TEACH", past: "TAUGHT" },
    { infinitive: "TEAR", past: "TORE" },
    { infinitive: "TELL", past: "TOLD" },
    { infinitive: "THINK", past: "THOUGHT" },
    { infinitive: "THROW", past: "THREW" },
    { infinitive: "UNDERSTAND", past: "UNDERSTOOD" },
    { infinitive: "WAKE", past: "WOKE" },
    { infinitive: "WEAR", past: "WORE" },
    { infinitive: "WIN", past: "WON" },
    { infinitive: "WRITE", past: "WROTE" }
];

const maxErrors = 6; 

// Variáveis do Jogo
let secretWord = "";
let hiddenWord = [];
let incorrectGuesses = [];
let gameInProgress = true;

// Elementos do DOM
const wordDisplay = document.getElementById('palavra-display');
const incorrectLettersDisplay = document.getElementById('letras-erradas');
const inputLetter = document.getElementById('input-letra');
const guessButton = document.getElementById('btn-chutar');
const restartButton = document.getElementById('btn-reiniciar');
const messageElement = document.getElementById('mensagem');
const hintDisplay = document.querySelector('#hint-display span');
const hangmanImage = document.getElementById('imagem-forca'); 

// --- Funções do Jogo ---

// 1. Inicia o Jogo (Start Game)
function startGame() {
    // 1. Reset variables
    const verbObj = verbList[Math.floor(Math.random() * verbList.length)];
    secretWord = verbObj.past; 
    hiddenWord = Array(secretWord.length).fill('_');
    incorrectGuesses = [];
    gameInProgress = true;
    
    // 2. Reset DOM
    wordDisplay.textContent = hiddenWord.join(' ');
    incorrectLettersDisplay.textContent = '';
    messageElement.textContent = '';
    messageElement.className = 'message';
    inputLetter.value = '';
    inputLetter.disabled = false;
    guessButton.disabled = false;
    inputLetter.focus();
    // A dica é o infinitivo do verbo
    hintDisplay.textContent = verbObj.infinitive; 
    
    // 3. Resetar a imagem para o estado inicial (forca0.png - CORRIGIDO)
    hangmanImage.src = `img/forca0.png`; 
}

// 2. Processa o chute do usuário (Process the user's guess)
function guessLetter() {
    if (!gameInProgress) return;

    let guess = inputLetter.value.toUpperCase();
    inputLetter.value = '';
    inputLetter.focus();
    
    // Validation
    if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
        showMessage("Please enter only one valid letter (A-Z).", "alerta");
        return;
    }

    if (hiddenWord.includes(guess) || incorrectGuesses.includes(guess)) {
        showMessage(`The letter '${guess}' has already been guessed.`, "alerta");
        return;
    }

    // Logic
    if (secretWord.includes(guess)) {
        // Correct guess (Acertou)
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === guess) {
                hiddenWord[i] = guess;
            }
        }
        wordDisplay.textContent = hiddenWord.join(' ');
        showMessage(`Correct! The letter '${guess}' is in the Simple Past verb.`, "vitoria");
        
    } else {
        // Incorrect guess (Errou)
        incorrectGuesses.push(guess);
        incorrectLettersDisplay.textContent = incorrectGuesses.join(', ');
        showMessage(`Oops! The letter '${guess}' is not in the verb.`, "derrota");
        
        // ATUALIZAÇÃO DA IMAGEM: O nome do arquivo muda com o número de erros
        // CORRIGIDO: Usando a extensão .png normal
        if (incorrectGuesses.length <= maxErrors) {
            hangmanImage.src = `img/forca${incorrectGuesses.length}.png`;
        }
    }
    
    // Check game status
    checkGameStatus();
}

// 3. Verifica as condições de vitória ou derrota (Check win/loss conditions)
function checkGameStatus() {
    // Win
    if (!hiddenWord.includes('_')) {
        gameInProgress = false;
        showMessage(`CONGRATULATIONS! You WON! The Simple Past verb was: ${secretWord} (Infinitive: ${hintDisplay.textContent})`, "vitoria");
        disableControls();
        return;
    }
    
    // Lose
    if (incorrectGuesses.length >= maxErrors) {
        gameInProgress = false;
        showMessage(`GAME OVER! You LOST! The Simple Past verb was: ${secretWord} (Infinitive: ${hintDisplay.textContent})`, "derrota");
        disableControls();
        return;
    }
}

// 4. Função auxiliar para exibir mensagens
function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
    // Adicionar um pequeno timeout para mensagens de alerta
    if (type === 'alerta') {
         setTimeout(() => {
             messageElement.textContent = '';
             messageElement.className = 'message';
         }, 1500);
    }
}

// 5. Desabilita input e botão de chute
function disableControls() {
    inputLetter.disabled = true;
    guessButton.disabled = true;
}

// --- Event Listeners ---

guessButton.addEventListener('click', guessLetter);
restartButton.addEventListener('click', startGame);

// Allows guessing by pressing "Enter"
inputLetter.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && !guessButton.disabled) {
        guessLetter();
    }
});

// Start the game when the page loads
startGame();