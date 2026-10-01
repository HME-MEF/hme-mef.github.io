// Menú de navegación móvil: alterna el menú colapsable y lo cierra al elegir un enlace.
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var navWrap = document.getElementById('site-nav');
  if (!toggle || !navWrap) return;

  function setOpen(open) {
    navWrap.classList.toggle('is-open', open);
    toggle.classList.toggle('is-active', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  toggle.addEventListener('click', function () {
    setOpen(!navWrap.classList.contains('is-open'));
  });

  navWrap.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
