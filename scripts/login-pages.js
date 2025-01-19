function createAccount() {
    window.location.href = "/login/create-account.html";
}

const createAccountButton = document.querySelector('.create-account');
if (createAccountButton) {
    createAccountButton.addEventListener('click', createAccount);
}

function signIn() {
    window.location.href = "/login/sign-in.html";
}

const signInButton = document.querySelector('.sign-in');
if (signInButton) {
    signInButton.addEventListener('click', signIn);
}

function goBack () {
    window.location.href = "/index.html";
}

const goBackButton = document.querySelector('.recent-page')
if (goBackButton) {
    goBackButton.addEventListener('click', goBack)
}

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});