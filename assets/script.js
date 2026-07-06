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
  const brevoEndpoint = endpointA + endpointB;

  brevoForm.removeAttribute('target');
  brevoForm.action = brevoEndpoint;

  brevoForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const note = brevoForm.querySelector('.form-note');
    const submitButton = brevoForm.querySelector('button[type="submit"]');
    const formData = new FormData(brevoForm);
    const payload = new URLSearchParams();

    for (const [key, value] of formData.entries()) {
      payload.append(key, value);
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
    }

    try {
      await fetch(brevoEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: payload.toString()
      });

      brevoForm.reset();
      if (note) {
        note.textContent = 'Cadastro enviado! Confira seu email se houver confirmação.';
      }
    } catch (error) {
      if (note) {
        note.textContent = 'Não foi possível enviar agora. Tente novamente em alguns segundos.';
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Quero entrar';
      }
    }
  });
}
