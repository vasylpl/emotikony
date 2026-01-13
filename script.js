document.addEventListener('DOMContentLoaded', () => {
  const emojis = ['😀', '😂', '😍', '🤔', '😎', '😢', '🥳', '🤯', '😡', '👍'];
  const emojiContainer = document.getElementById('emoji-container');
  const emojiInput = document.getElementById('emoji-input');
  const clearButton = document.getElementById('clear-button');

  emojis.forEach(emoji => {
    const emojiSpan = document.createElement('span');
    emojiSpan.className = 'emoji';
    emojiSpan.textContent = emoji;
    emojiSpan.addEventListener('click', () => {
      emojiInput.textContent += emoji;
    });
    emojiContainer.appendChild(emojiSpan);
  });

  clearButton.addEventListener('click', () => {
    emojiInput.textContent = '';
  });
});
