const heartButton = document.getElementById('heartButton');
const messageContainer = document.getElementById('messageContainer');

heartButton.addEventListener('click', () => {
    for (let i = 0; i < 5; i++) { // Change 5 to however many times you want to spam the message
        const message = document.createElement('p');
        message.textContent = "I love you Kiyomi";
        messageContainer.appendChild(message);
    }
});