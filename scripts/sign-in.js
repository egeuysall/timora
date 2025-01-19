const passwordInput = document.querySelector('.password');
const continueButton = document.querySelector('.continue')
const condition = document.querySelector('.condition')

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
    window.location.href = '/login/index.html';
});