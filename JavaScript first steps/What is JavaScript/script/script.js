const playerBox = document.querySelector('p');

playerBox.addEventListener('click', () => {
    const name = prompt('Enter a new name');
    playerBox.textContent = `Player 1: ${name}`;
});