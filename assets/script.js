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
const nameInput = document.getElementById('NOME');

if (nameInput) {
  nameInput.style.width = '100%';
  nameInput.style.minHeight = '48px';
  nameInput.style.border = '1px solid rgba(79, 125, 90, 0.22)';
  nameInput.style.borderRadius = '999px';
  nameInput.style.padding = '0 17px';
  nameInput.style.font = 'inherit';
  nameInput.style.outline = 'none';
  nameInput.style.marginBottom = '18px';
  nameInput.style.display = 'block';
}

if (brevoForm) {
  const hiddenFrame = document.createElement('iframe');
  hiddenFrame.name = 'brevo-submit-frame';
  hiddenFrame.style.display = 'none';
  document.body.appendChild(hiddenFrame);

  brevoForm.setAttribute('target', 'brevo-submit-frame');

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
