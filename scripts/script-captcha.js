const captchaTextElement = document.getElementById("captcha-text");
const captchaInputElement = document.getElementById("captcha-input");
const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
let isMathCaptcha = false;
let answer = "";

function generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

function generateMathCaptcha() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    captchaTextElement.textContent = `Введите сумму ${num1} + ${num2}`;
    answer = String(num1 + num2);
    isMathCaptcha = true;
}

function generateRandomCaptcha() {
    const randomString = generateRandomString(6);
    captchaTextElement.textContent = `Введите "${randomString}"`;
    answer = randomString;
    isMathCaptcha = false;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const inputText = captchaInputElement.value;
    
    if (isEmpty(inputText)) {
        errorMessage.textContent = "Напиши хоть что-нибудь!";
    } else if (inputText === answer) {
        errorMessage.textContent = "";
        this.submit();
    } else {
        errorMessage.textContent = "Неправильное значение";
        if (!isMathCaptcha) {
            generateMathCaptcha();
        }
    }
  });

  generateRandomCaptcha();