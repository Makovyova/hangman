/* //define body tag
const body=document.querySelector('body')

//create elements for the gallows part
const container=document.createElement('div')
div.className="container"
body.append(container)

const gallow=document.createElement('img')
img.src="gallows.svg"
img.src="Gallow"
container.append(img)
*/
const words = ["javascript", "hangman", "programming", "developer", "coding"];
let selectedWord = "";
let guessedLetters = [];
let wrongLetters = [];
let attempts = 6;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongLetters = [];
    attempts = 6;
    document.getElementById("attemptCount").innerText = attempts;
    document.getElementById("letterInput").value = '';
    document.getElementById("message").innerText = '';
    document.getElementById("wrongLetters").innerText = '';
    document.getElementById("restartButton").style.display = "none";
    updateWordDisplay();
}

function updateWordDisplay() {
    const wordDisplay = selectedWord.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
    document.getElementById("wordDisplay").innerText = wordDisplay;

    if (wordDisplay.replace(/ /g, '') === selectedWord) {
        document.getElementById("message").innerText = "Congratulations! You've won!";
        document.getElementById("restartButton").style.display = "block";
    }
}

document.getElementById("guessButton").addEventListener("click", () => {
    const letterInput = document.getElementById("letterInput").value.toLowerCase();
    if (letterInput && !guessedLetters.includes(letterInput) && !wrongLetters.includes(letterInput)) {
        if (selectedWord.includes(letterInput)) {
            guessedLetters.push(letterInput);
        } else {
            wrongLetters.push(letterInput);
            attempts--;
        }
        document.getElementById("attemptCount").innerText = attempts;
        document.getElementById("wrongLetters").innerText = `Wrong Letters: ${wrongLetters.join(', ')}`;
        updateWordDisplay();

        if (attempts === 0) {
            document.getElementById("message").innerText = `Game Over! The word was "${selectedWord}".`;
            document.getElementById("restartButton").style.display = "block";
        }
    }
    document.getElementById("letterInput").value = '';
});

document.getElementById("restartButton").addEventListener("click", startGame);

// Start the game for the first time
startGame();
