// Chatbot Toggle
const chatbotIcon = document.getElementById('chatbot-icon');
const chatbotBox = document.getElementById('chatbot-box');
const messagesContainer = document.getElementById('chatbot-messages');
const inputField = document.getElementById('chatbot-input');
const sendBtn = document.getElementById('chatbot-send');

// Show / hide chatbot
chatbotIcon.addEventListener('click', () => {
  chatbotBox.style.display = chatbotBox.style.display === 'flex' ? 'none' : 'flex';
});

// Function to add messages
function addMessage(message, sender) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
  msgDiv.textContent = message;
  messagesContainer.appendChild(msgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Bot response logic
function botReply(userMsg) {
  const msg = userMsg.toLowerCase();
  let reply = "I'm not sure I understand. Could you rephrase that? 😊";

  if (msg.includes('hello') || msg.includes('hi')) reply = "Hi there! 👋 Welcome to Amoura Restaurant.";
  else if (msg.includes('menu')) reply = "You can explore our delicious menu here: 🍽️ <a href='menu.html'>View Menu</a>";
  else if (msg.includes('book') || msg.includes('table')) reply = "You can book a table directly from our site or call us at 📞 +91-9876543210.";
  else if (msg.includes('time') || msg.includes('hours')) reply = "We’re open every day from 10 AM to 11 PM! ⏰";
  else if (msg.includes('thanks') || msg.includes('thank')) reply = "You’re very welcome! 😊";
  else if (msg.includes('location') || msg.includes('address')) reply = "We’re located at 123 Amoura Street, Food City 🍴.";

  setTimeout(() => addMessage(reply, 'bot'), 600);
}

// Send message
sendBtn.addEventListener('click', () => {
  const userMsg = inputField.value.trim();
  if (userMsg) {
    addMessage(userMsg, 'user');
    inputField.value = '';
    botReply(userMsg);
  }
});

inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
