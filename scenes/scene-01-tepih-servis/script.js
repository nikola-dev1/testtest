// =========================================================
// TEPIH SERVIS - script.js
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobilni meni (hamburger) ---
  var navToggle = document.getElementById('navToggle');
  var navList = document.getElementById('navList');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Zatvori meni kad se klikne na link (na mobilnom)
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Brojac poseta: jednostavna inkrementacija na ucitavanje ---
  var brojac = document.getElementById('brojac');
  if (brojac) {
    var trenutno = parseInt(brojac.textContent, 10) || 0;
    var novaVrednost = trenutno + 1;
    brojac.textContent = String(novaVrednost).padStart(7, '0');
  }

});
