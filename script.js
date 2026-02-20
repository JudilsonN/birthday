const correctPassword = "birthdayqueen";

function unlock() {
  const input = document.getElementById("passwordInput").value;
  if (input === correctPassword) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    const music = document.getElementById("bgMusic");
    if (music) {
      music.volume = 0.4;
      music.play().catch(() => {});
    }
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

/* Scroll arrow */
document.getElementById("scrollArrow").addEventListener("click", () => {
  document.querySelector(".message").scrollIntoView({ behavior: "smooth" });
});

/* Treat reveal */
document.querySelectorAll(".treat").forEach(treat => {
  treat.addEventListener("click", () => {
    treat.classList.toggle("open");
  });
});

/* Compliment cards */
document.querySelectorAll(".compliment-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("revealed");
  });
});

/* Mini Game */
let score = 0;
const gameArea = document.getElementById("gameArea");

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💜";
  heart.style.left = Math.random() * 90 + "%";

  heart.onclick = () => {
  score++;
  document.getElementById("score").innerText = score;
  heart.remove();

  if (score === 19) {
    showBirthdayMessage();
  }
};

  gameArea.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

setInterval(spawnHeart, 800);

/* Surprise */
function showSurprise() {
  document.getElementById("surpriseText").classList.toggle("hidden");
}

/* Sparkles */
const sparkleContainer = document.getElementById("sparkleContainer");

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = Math.random() * 100 + "%";
  sparkleContainer.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 2000);
}

setInterval(createSparkle, 350);

function showBirthdayMessage() {
  const msg = document.createElement("div");
  msg.className = "birthday-popup";
  msg.innerText = "🎉 Happy Birthday Beautiful 🎉";

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 4000);
}
