// Botones iniciales
const letter = document.getElementById('letter');
const popup = document.getElementById('popup');

// Audio de fondo
const backgroundMusic = document.getElementById('audio-fondo');
backgroundMusic.volume = 0.2;

// Elementos adicionales
const fireworks = document.getElementById('fireworks');
const finalMessage = document.getElementById('final-message');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

// Mostrar ventana emergente al hacer clic en la carta
letter.addEventListener('click', () => {
  letter.classList.add('hidden'); // Oculta la carta
  popup.classList.remove('hidden'); // Muestra la ventana emergente
});

// Acción al presionar "Sí"
yesBtn.addEventListener('click', () => {
    popup.classList.add('hidden'); // Oculta la ventana emergente
    fireworks.classList.remove('hidden'); // Muestra los fuegos artificiales
    setTimeout(() => {
      fireworks.classList.add('hidden'); // Oculta los fuegos artificiales
      finalMessage.classList.remove('hidden'); // Muestra el mensaje final
    }, 3000); // Espera 3 segundos antes de mostrar el mensaje final
  });

noBtn.addEventListener('mouseover', () => {
  const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth)/2;
  const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight)/2;
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});