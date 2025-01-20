let strengthPoint = 0;
let mailPoint = 0;

const mediumPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const strongPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;
const correctMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/i;

function checkStrength(password) {
    strengthPoint = 0;

    if (password.length < 6) {
        strengthPoint = 1; // Low strength
    } else if (mediumPattern.test(password) && password.length >= 6 && password.length <= 8) {
        strengthPoint = 2; // Medium strength
    } else if (strongPattern.test(password) && password.length > 8) {
        strengthPoint = 3; // Strong password
    } else {
        strengthPoint = 1; // Default to low if no other conditions met
    }
}

function checkMail(mail) {
    mailPoint = correctMail.test(mail) ? 1 : 0; // 1 if valid, 0 if not
}

const passwordInput = document.querySelector('.password');
const mailInput = document.querySelector('.mail');
const continueButton = document.querySelector('.continue');
const condition = document.querySelector('.condition');

if (passwordInput && mailInput) {
    passwordInput.addEventListener('input', () => {
        checkStrength(passwordInput.value);
        updateUI();
    });

    mailInput.addEventListener('input', () => {
        checkMail(mailInput.value);
        updateUI();
    });
}

function updateUI() {
    if (strengthPoint === 1 && mailPoint === 0) {
        passwordInput.style.color = "#8c8c8c";
        continueButton.disabled = true;
        condition.innerHTML = "Low";
    } else if (strengthPoint === 2 && mailPoint === 0) {
        passwordInput.style.color = "#575757";
        continueButton.disabled = true;
        condition.innerHTML = "Medium";
    } else if (strengthPoint === 3 && mailPoint === 1) {
        passwordInput.style.color = "#2e2e2e";
        continueButton.disabled = false;
        condition.innerHTML = "Strong";
    } else {
        continueButton.disabled = true;
        condition.innerHTML = "Low";
    }
}

if (continueButton) {
    continueButton.addEventListener('click', () => {
        window.location.href = "/home.html";
    });
}

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

const googleLogo = document.querySelector('.google-logo');
if (googleLogo) {
    googleLogo.addEventListener('click', () => {
        window.location.href = 'https://accounts.google.com/';
    });
}

const appleLogo = document.querySelector('.apple-logo');
if (appleLogo) {
    appleLogo.addEventListener('click', () => {
        window.location.href = 'https://www.icloud.com/';
    });
}

const goBack = document.querySelector('.go-back');
if (goBack) {
    goBack.addEventListener('click', () => {
        window.location.href = '/login/index.html';
    });
}