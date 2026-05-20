// ========================================
// TOKO SAYUR BU ANI - MODERN INTERACTIVE JS
// ========================================


// ===============================
// SMOOTH NAVBAR ACTIVE
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "#1f2937";

    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#16a34a";
    }
  });
});


// ===============================
// HERO IMAGE FLOATING EFFECT
// ===============================
const heroImage = document.querySelector(".hero-img");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform =
    `translate(${x}px, ${y}px)`;
});


// ===============================
// REVEAL ANIMATION
// ===============================
const revealElements = document.querySelectorAll(
  ".section-produk, .section-cara-pesan, .section-kontak"
);

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
}

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ===============================
// TOAST NOTIFICATION
// ===============================
const toast = document.createElement("div");

toast.style.position = "fixed";
toast.style.bottom = "30px";
toast.style.right = "30px";
toast.style.background = "#16a34a";
toast.style.color = "white";
toast.style.padding = "14px 22px";
toast.style.borderRadius = "14px";
toast.style.fontWeight = "600";
toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
toast.style.zIndex = "9999";
toast.style.opacity = "0";
toast.style.transform = "translateY(20px)";
toast.style.transition = "all 0.3s ease";

document.body.appendChild(toast);

function showToast(message) {
  toast.textContent = message;

  toast.style.opacity = "1";
  toast.style.transform = "translateY(0)";

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
  }, 2200);
}


// ===============================
// CART SYSTEM
// ===============================
const buttons = document.querySelectorAll(".btn-tambah");
const logo = document.querySelector(".logo");

let totalCart = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    const row = button.closest("tr");
    const productName =
      row.children[0].textContent;

    totalCart++;

    logo.innerHTML =
      `🥬 Toko Sayur Bu Ani (${totalCart})`;

    // button animation
    button.innerHTML = "✓ Ditambahkan";
    button.style.background = "#14532d";
    button.style.transform = "scale(1.08)";

    setTimeout(() => {
      button.innerHTML = "+ Tambah";
      button.style.background = "#16a34a";
      button.style.transform = "scale(1)";
    }, 1000);

    showToast(`${productName} masuk keranjang 🛒`);
  });
});


// ===============================
// PARALLAX HERO
// ===============================
window.addEventListener("scroll", () => {
  const scroll = window.pageYOffset;

  document.querySelector(".hero").style.backgroundPositionY =
    scroll * 0.4 + "px";
});


// ===============================
// FORM VALIDATION
// ===============================
const form = document.getElementById("form-kontak");
const approve = document.getElementById("pesan-aprove");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama =
    document.getElementById("nama").value.trim();

  const telepon =
    document.getElementById("telepon").value.trim();

  const pesan =
    document.getElementById("pesan").value.trim();

  if (
    nama === "" ||
    telepon === "" ||
    pesan === ""
  ) {
    showToast("Isi semua form terlebih dahulu!");
    return;
  }

  if (telepon.length < 10) {
    showToast("Nomor WhatsApp tidak valid!");
    return;
  }

  approve.style.display = "block";

  approve.style.animation =
    "fadeIn 0.5s ease";

  form.reset();

  showToast("Pesan berhasil dikirim ✨");

  setTimeout(() => {
    approve.style.display = "none";
  }, 4000);
});


// ===============================
// BUTTON HOVER GLOW EFFECT
// ===============================
const allButtons = document.querySelectorAll(
  ".tombol, .btn-tambah"
);

allButtons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.boxShadow =
      "0 10px 20px rgba(22,163,74,0.25)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.boxShadow = "none";
  });
});


// ===============================
// TYPEWRITER EFFECT
// ===============================
const heroText =
  document.querySelector(".hero-teks p");

const text =
  "Langsung dari petani lokal. Diantar ke pintu rumah Anda setiap pagi!";

heroText.textContent = "";

let i = 0;

function typingEffect() {
  if (i < text.length) {
    heroText.textContent += text.charAt(i);
    i++;
    setTimeout(typingEffect, 30);
  }
}

typingEffect();


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow =
      "0 10px 30px rgba(0,0,0,0.08)";
  } else {
    navbar.style.boxShadow =
      "0 1px 4px rgba(0,0,0,0.07)";
  }
});