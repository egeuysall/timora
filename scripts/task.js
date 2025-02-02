const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write a task!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();

// Footer Button and Icon Hover Effects
const footerButtons = [
    { button: document.querySelector('#quotes'), icon: document.querySelector('#quotes-icon'), hoverSrc: '/assets/icons/quotes-icon.svg', defaultSrc: '/assets/icons/quotes-icon-not.svg' },
    { button: document.querySelector('#home'), icon: document.querySelector('#home-icon'), hoverSrc: '/assets/icons/home-icon.svg', defaultSrc: '/assets/icons/home-icon-not.svg' }, // Replaced tasks with home
    { button: document.querySelector('#settings'), icon: document.querySelector('#settings-icon'), hoverSrc: '/assets/icons/settings-icon.svg', defaultSrc: '/assets/icons/settings-icon-not.svg' }
];

// Add hover effects for each button
footerButtons.forEach(({ button, icon, hoverSrc, defaultSrc }) => {
    button.addEventListener('mouseover', () => {
        button.style.color = '#ebebeb'; // Change text color
        icon.src = hoverSrc; // Change icon source
    });

    button.addEventListener('mouseout', () => {
        button.style.color = '#ababab'; // Revert text color
        icon.src = defaultSrc; // Revert icon source
    });
});