// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// function redirectToWhatsApp() {
//   var phoneNumber = "6282157513583"; // Ganti dengan nomor telepon Anda
//   var message = "Hallo. Saya ADI RENALDI, Dapatkah saya Membantu anda??"; // Pesan awal (opsional)
//   var whatsappURL =
//     "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
//   window.location.href = whatsappURL;
// }

// WhatssApp
document
  .getElementById("whatsapp-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var phoneNumber = "6285398131485";
    var message = "Hallo. Saya ADI RENALDI, Dapatkah saya Membantu anda ??";
    var whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank");
  });

// Email
document
  .getElementById("email-link")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah link langsung terbuka
    var emailAddress = "adyrenald.ar@gmail.com"; // Ganti dengan alamat email Anda
    var subject = "Subject Here"; // Ganti dengan subjek email yang diinginkan
    var body = "Hallo. Saya ADI RENALDI, Dapatkah saya Membantu anda ??"; // Ganti dengan isi email yang diinginkan
    var mailtoURL =
      "mailto:" +
      emailAddress +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    window.open(mailtoURL, "_blank");
  });
