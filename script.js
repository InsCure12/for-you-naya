const whatsappNumber = "6282145419561"; // Replace with your WhatsApp number
const pesan = "Lets Gooooo";

document.addEventListener('DOMContentLoaded', function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play(); // Automatically play the music when the page loads
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('responseMessage').innerHTML = "I hope you can receive it well";
    document.getElementById('responseMessage').classList.remove('hidden');
    
    bukaWhatsApp();
});

document.getElementById('noButton').addEventListener('click', function() {
    moveButton(this);
});

function moveButton(button) {
    const container = document.querySelector('.container');
    
    // Random position within the container
    const newX = Math.random() * (container.clientWidth - button.clientWidth);
    const newY = Math.random() * (container.clientHeight - button.clientHeight - 100); // Leave space for other elements

    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

function bukaWhatsApp() {
    const encodedMessage = encodeURIComponent(pesan);
    
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`, '_blank');
}
