const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('[data-nav-links]');
const year = document.querySelector('[data-year]');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const brevoForm = document.getElementById('sib-form');

if (brevoForm) {
  const endpointA = 'https://4e05528e.sibforms.com/serve/';
  const endpointB = 'MUIFACmkabIE1FWgoQQLH3p8jfthYd1BMXnOubK0Oz_ZdlBEXWqfcEosgFXDEucwp4urzvv7zugQoghZgKBADEuWbiiBpFISmOShMrpK_6wOWiDlh8JKhB76GQf3iGcyf48cH2K5wSFTEzoXtbBesXfZKBhpnAXsKNpzm0Knp_y8auD-4IbuxuPAQmTU7CbbsHEc4IRnWA8egPghKA==';
  brevoForm.action = endpointA + endpointB;
  brevoForm.target = 'brevo-submit-frame';

  brevoForm.addEventListener('submit', () => {
    setTimeout(() => {
      brevoForm.reset();
      const note = brevoForm.querySelector('.form-note');
      if (note) {
        note.textContent = 'Cadastro enviado! Confira seu email se houver confirmação.';
      }
    }, 900);
  });
}
