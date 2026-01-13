
window.onload = function() {
  const emojis = ['😀', '😂', '😍', '🤔', '😎', '😢', '🥳', '🤯', '😡', '👍'];
  const emojiContainer = document.getElementById('emoji-container');
  const emojiInput = document.getElementById('emoji-input');
  const clearButton = document.getElementById('clear-button');

  emojis.forEach(emoji => {
    let emojiSpan = document.createElement('span');
    emojiSpan.classList.add('emoji');
    emojiSpan.textContent = emoji;
    emojiSpan.addEventListener('click', () => {
      emojiInput.textContent += emoji;
    });
    emojiContainer.appendChild(emojiSpan);
  });

  clearButton.addEventListener('click', () => {
    emojiInput.textContent = '';
  });
}
