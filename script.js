// script.js
document.addEventListener("DOMContentLoaded", function() {
    generateCaptcha();
});

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const sum = num1 + num2;

    const captchaEquation = document.getElementById("captchaEquation");
    captchaEquation.textContent = `${num1} + ${num2} = `;

    const captchaInput = document.getElementById("captchaInput");
    captchaInput.value = ""; // Clear previous input

    captchaInput.addEventListener("input", function() {
        const userInput = parseInt(captchaInput.value);
        if (userInput === sum) {
            captchaInput.style.backgroundColor = "lightgreen";
        } else {
            captchaInput.style.backgroundColor = "salmon";
        }
    });
}
