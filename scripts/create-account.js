let strengthPoint = 0;
const mediumPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const strongPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

function checkStrength(password) {
    strengthPoint = 0;

    if (password.length < 6) {
        strengthPoint = 1;
    } else if (mediumPattern.test(password) && password.length >= 6 && password.length <= 8) {
        strengthPoint = 2;
    } else if (strongPattern.test(password) && password.length > 8) {
        strengthPoint = 3;
    } else {
        strengthPoint = 1;
    }
}

const passwordInput = document.querySelector('.password');
const continueButton = document.querySelector('.continue')
const condition = document.querySelector('.condition')

passwordInput.addEventListener('input', () => {
    checkStrength(passwordInput.value);

    if (strengthPoint === 1) {
        passwordInput.style.color = "#8c8c8c";
        continueButton.disabled = true;
        condition.innerHTML = "Low"
    } else if (strengthPoint === 2) {
        passwordInput.style.color = "#575757";
        continueButton.disabled = true;
        condition.innerHTML = "Medium"
    } else if (strengthPoint === 3) {
        passwordInput.style.color = "#2e2e2e";
        continueButton.disabled = false;
        condition.innerHTML = "Strong"
    } else {
        continueButton.disabled = true;
        condition.innerHTML = "Low"
    }
});


function openLogin() {
    window.location.href = "/home.html";
}

continueButton.addEventListener('click', openLogin);


window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.querySelector('.google-logo').addEventListener('click', () => {
    window.location.href = 'https://accounts.google.com/v3/signin/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en&authuser=0&ddm=1&flowName=GlifWebSignIn&flowEntry=AddSession';
});

document.querySelector('.apple-logo').addEventListener('click', () => {
    window.location.href = 'https://www.icloud.com/';
});

document.querySelector('.go-back').addEventListener('click', () => {
    window.location.href = '/login/email-verification.html';
});