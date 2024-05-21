const openButtons = document.querySelectorAll('.openPopup');
const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.closeButton');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        for (const popup of popups) {
            popup.style.display = 'block';
          }
    });
});

popups.forEach(button => {
    button.addEventListener('click', () => {
        for (const popup of popups) {
            popup.style.display = 'none';
          }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        for (const popup of popups) {
            popup.style.display = 'none';
          }
    });
});

// openButton.addEventListener('click', () => {
//     popup.style.display = 'block';
// });

// popup.addEventListener('click', () => {
//     popup.style.display = 'none';
// });

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none';
// });