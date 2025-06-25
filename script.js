// Countdown
const targetDate = new Date("2025-12-01T00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Selamat Menikah!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}, 1000);

// Pesan
const form = document.getElementById("messageForm");
const list = document.getElementById("messageList");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !message) return;

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<strong>${name}</strong><br>${message}`;
  list.prepend(card);

  form.reset();
});
