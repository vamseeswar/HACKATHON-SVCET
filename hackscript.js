// script.js
function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    displayMessage(userInput, 'user');
    
    // Send the user input to your chatbot backend (you'll need to implement this part)
    // Here, I'm assuming you have a function called 'sendToChatbot' that sends the message and receives a response
    sendToChatbot(userInput);
}

function displayMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.classList.add(sender);
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Example function to receive a response from the chatbot backend
function receiveResponse(response) {
    displayMessage(response, 'bot');
}
// Example JavaScript code to interact with the chatbot iframe
const chatbotIframe = document.querySelector('iframe');

// Example: Dynamically resize the iframe based on its content
function resizeIframe() {
    chatbotIframe.style.height = chatbotIframe.contentWindow.document.body.scrollHeight + 'px';
}

// Example: Listen for messages from the iframe
window.addEventListener('message', event => {
    // Handle messages from the iframe
    console.log('Message from chatbot:', event.data);
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if username and password are correct (you can implement your own logic here)
    // For this example, let's assume the login is successful if both fields are filled
    if (username && password) {
        // Redirect to the chatbot link
        window.location.href = 'https://AGRI-AVENGER-CHATBOT-FOR-FARMERS-FRIEND-f06e45.zapier.app';
    } else {
        alert('Please enter a username and password.');
    }
});


