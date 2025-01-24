// Footer Button and Icon Hover Effects
const footerButtons = [
    { button: document.querySelector('#quotes'), icon: document.querySelector('#quotes-icon'), hoverSrc: '/assets/icons/quotes-icon.svg', defaultSrc: '/assets/icons/quotes-icon-not.svg' },
    { button: document.querySelector('#tasks'), icon: document.querySelector('#tasks-icon'), hoverSrc: '/assets/icons/tasks-icon.svg', defaultSrc: '/assets/icons/tasks-icon-not.svg' },
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