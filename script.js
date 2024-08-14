const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

noButton.addEventListener('mouseover', () => {
    const offsetX = Math.random() * (window.innerWidth - noButton.clientWidth);
    const offsetY = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = "absolute";
    noButton.style.left = `${offsetX}px`;
    noButton.style.top = `${offsetY}px`;
});

yesButton.addEventListener('click', () => {
    window.location.href = "yes.html";
});
