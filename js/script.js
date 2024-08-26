document.getElementById('encrypt-btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  const encryptedText = btoa(inputText); // Encriptar usando Base64
  document.getElementById('output-text').value = encryptedText;
});

document.getElementById('decrypt-btn').addEventListener('click', function() {
  const inputText = document.getElementById('input-text').value;
  try {
      const decryptedText = atob(inputText); // Desencriptar usando Base64
      document.getElementById('output-text').value = decryptedText;
  } catch (e) {
      alert('Invalid input for decryption');
  }
});

document.getElementById('copy-btn').addEventListener('click', function() {
  const outputText = document.getElementById('output-text');
  outputText.select();
  document.execCommand('copy');
  alert('Text copied to clipboard');
});
