document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const card = this.closest('.card');
        const audio = card.querySelector('.audio-player');
  
        if (audio.paused) {
          audio.play();
          this.textContent = 'Pause'; // Cambia il testo del pulsante in "Pause" quando l'audio è in riproduzione
        } else {
          audio.pause();
          audio.currentTime = 0; // Riavvolgi l'audio alla posizione iniziale quando viene messo in pausa
          this.textContent = 'Play'; // Cambia il testo del pulsante in "Play" quando l'audio è in pausa
        }
      });
    });
  });
  