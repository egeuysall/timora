let strengthPoint = 0;
const mediumPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
const strongPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/;

function checkStrength(password) {
    if (password.length < 6) {
        strengthPoint++;
    } else if (password.length < 8 && mediumPattern.test(password)) {
        strengthPoint += 2;
    } else if (password.length < 10 && strongPattern.test(password)) {
        strengthPoint += 3;
    }
}

const passwordInput = document.querySelector('.password');

passwordInput.addEventListener('input', () => {
    strengthPoint = 0;
    checkStrength(password.value);
    if (strengthPoint === 1) {

    } else if (strengthPoint === 2) {

    } else if (strengthPoint === 3) {

    }
});

