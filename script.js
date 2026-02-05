let noCount = 0;
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");
const questionText = document.getElementById("question");
const mainGif = document.getElementById("main-gif");

const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?"
];

function handleNo() {
    noCount++;
    
    // 1. Change the text on the No button
    const phraseIndex = Math.min(noCount, noPhrases.length - 1);
    noButton.innerText = noPhrases[phraseIndex];
    
    // 2. Make the Yes button bigger
    const currentSize = 1 + (noCount * 0.4); // Increases by 40% each time
    yesButton.style.transform = `scale(${currentSize})`;
    
    // 3. Move the No button slightly to make room (optional)
    const moveX = noCount * 10;
    noButton.style.transform = `translateX(${moveX}px)`;
}

function handleYes() {
    document.getElementById("question-section").classList.add("hidden");
    document.getElementById("success-section").classList.remove("hidden");
}