function openLogin() {
    window.location.href = "login/index.html";
}

const getStartedButton = document.querySelector('.get-started');

getStartedButton.addEventListener('click', openLogin);


window.addEventListener('load', function() {
    document.body.style.opacity = '1'; // Trigger fade-in effect after the page has loaded
});