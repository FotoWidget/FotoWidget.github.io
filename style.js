document.getElementById("year").textContent = new Date().getFullYear();

console.log("FotoWidget Landing Page Loaded");

// ANIMASI FADE SAAT SCROLL
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// SLIDER SCREENSHOT
let gambar = ["img/1.png", "img/2.png", "img/3.png"];
let index = 0;

function next() {
  index++;
  if (index >= gambar.length) index = 0;
  document.getElementById("slide").src = gambar[index];
}

function prev() {
  index--;
  if (index < 0) index = gambar.length - 1;
  document.getElementById("slide").src = gambar[index];
}

// === AUTO PLAY MUSIC AMAN BROWSER ===
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

// AUTOPLAY SETELAH USER KLIK DIMANAPUN
document.addEventListener("click", () => {
  if (!playing) {
    music.play().then(() => {
      btn.textContent = "⏸ Musik";
      playing = true;
    }).catch(err => {
      console.log("Autoplay diblokir:", err);
    });
  }
}, { once: true });

// TOMBOL PLAY / PAUSE MANUAL
btn.addEventListener("click", (e) => {
  e.stopPropagation(); // supaya tidak dobel trigger
  if (playing) {
    music.pause();
    btn.textContent = "▶ Musik";
    playing = false;
  } else {
    music.play();
    btn.textContent = "⏸ Musik";
    playing = true;
  }
});
