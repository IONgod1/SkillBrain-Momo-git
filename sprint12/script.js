const adviceIdElement = document.getElementById("advice-id");
const adviceTextElement = document.getElementById("advice-text");
const diceButton = document.getElementById("dice-button");

const updateAdviceText = (text) => adviceTextElement.textContent = text;
const updateAdviceId = (id) => adviceIdElement.textContent = "ADVICE #" + id;

async function fetchAdvice() {
    const apiEndpoint = "https://api.adviceslip.com/advice";
    let adviceText = '';
    let adviceId = '';

    try {
        const response = await fetch(apiEndpoint);
        const adviceData = await response.json();

        adviceText = `"${adviceData.slip.advice}"`;
        adviceId = adviceData.slip.id;
    } 
    catch (error) {
        console.error(error);
    }

    updateAdviceText(adviceText);
    updateAdviceId(adviceId);
}

diceButton.addEventListener('click', fetchAdvice);