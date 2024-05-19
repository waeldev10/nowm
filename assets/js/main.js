const openButton = document.getElementById('openPopup');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

popup.addEventListener('click', () => {
    popup.style.display = 'none';
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});