// Step 1: Show Surprise
function startSurprise() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Please enter your name 😊");
    return;
  }

  // Hide welcome, show surprise
  document.getElementById("welcome-screen").style.display = "none";
  document.getElementById("surprise-screen").style.display = "block";

  // Update name in message
  document.getElementById("birthdayMessage").innerText = `🎉 Happy Birthday ${name}! 🎉`;

  // Launch confetti
  launchConfetti();
}

// Photo Upload Preview
document.getElementById("photoInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const frame = document.querySelector(".photo-frame");
      const img = document.getElementById("photoPreview");
      img.src = e.target.result;
      frame.style.display = "block";
    }
    reader.readAsDataURL(file);
  }
});

// Music Upload + Play (autoplay hidden)
document.getElementById("musicInput").addEventListener("change", function(event) {
  const file = event.target.files[0];
  if (file) {
    const musicPlayer = document.getElementById("musicPlayer");
    const stopBtn = document.getElementById("stopMusicBtn");

    const url = URL.createObjectURL(file);
    musicPlayer.src = url;
    musicPlayer.play();

    // Show stop button
    stopBtn.style.display = "inline-block";

    // Confetti again
    launchConfetti();
  }
});

// Stop Music Button
document.getElementById("stopMusicBtn").addEventListener("click", function() {
  const musicPlayer = document.getElementById("musicPlayer");
  musicPlayer.pause();
  musicPlayer.currentTime = 0; // reset
  this.style.display = "none"; // hide button again
});

// Confetti Animation
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    let conf = document.createElement("div");
    conf.classList.add("confetti");
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.backgroundColor = randomColor();
    conf.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(conf);
    setTimeout(() => conf.remove(), 5000);
  }
}

// Random Colors
function randomColor() {
  const colors = ["#ff4d6d", "#ffcc00", "#00ccff", "#33cc33", "#ff9966", "#cc66ff"];
  return colors[Math.floor(Math.random() * colors.length)];
}