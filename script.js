document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById('chatBox');
    const chatHeader = document.getElementById('chatHeader');
    const chatBody = document.getElementById('chatBody');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const images = document.querySelectorAll('#imageSlider img');
    const subscribeForm = document.getElementById('subscribeForm');

    let currentImageIndex = 0;

    const changeImage = () => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    };

    setInterval(changeImage, 3000);

    chatHeader.addEventListener('click', () => {
        chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
    });

    chatSend.addEventListener('click', () => {
        const userMessage = chatInput.value;
        if (userMessage.trim() !== '') {
            const userChat = document.createElement('div');
            userChat.textContent = `You: ${userMessage}`;
            chatBody.appendChild(userChat);

            // Simulate bot response
            const botResponse = document.createElement('div');
            botResponse.textContent = 'AFFCSL: Thanks for reaching out! welcome to Join hands with us in this  Journey to help empower youth and women through agriculture. Donate anything to support .You can be the power and change in yumbe community . .';
            setTimeout(() => chatBody.appendChild(botResponse), 1000);

            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(subscribeForm);
        const name = formData.get('name');
        const email = formData.get('email');

        alert(`Thank you for subscribing, ${name}! We have sent a confirmation email to ${email}.`);
    });
});
