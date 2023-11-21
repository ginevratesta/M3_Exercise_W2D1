function setMusicPlayer() {
    // Selezioniamo tutti i pulsanti "Play"
    const playButtons = document.querySelectorAll(".play-button");
    // Variabile per tenere traccia dell'audio attualmente in riproduzione
    let currentAudio = null;
  
    // Per ogni pulsante "Play"
    for (let i = 0; i < playButtons.length; i++) {
      playButtons[i].addEventListener("click", function () {
        // Trova l'elemento card relativo al pulsante cliccato
        const card = this.closest(".card");
        // Trova l'elemento audio all'interno della card
        const audio = card.querySelector(".audio-player");
  
        // Se c'è un audio diverso da quello attualmente in riproduzione, mettilo in pausa e riavvolgi
        if (currentAudio && currentAudio !== audio) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
          // Cambiamo il testo del pulsante precedente in "Play" quando viene interrotto
          const previousButton = currentAudio.parentElement.querySelector(".play-button");
          if (previousButton) {
            previousButton.textContent = "Play";
          }
        }
  
        // Se l'audio è in pausa, avvialo e cambia il testo del pulsante in "Pause"
        if (audio.paused) {
          audio.play();
          this.textContent = "Pause";
          currentAudio = audio;
        } else { // Altrimenti, metti in pausa l'audio e cambia il testo del pulsante in "Play"
          audio.pause();
          audio.currentTime = 0;
          this.textContent = "Play";
          currentAudio = null;
        }
  
        // Gestione dell'evento onended quando la traccia audio termina
        audio.onended = function () {
          playButtons[i].textContent = "Play"; // Cambia il testo in "Play" quando la traccia audio termina
        };
      });
    }
  }
  
  // Richiamiamo la funzione per impostare il lettore musicale
  setMusicPlayer();
  