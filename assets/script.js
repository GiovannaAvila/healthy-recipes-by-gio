const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('[data-nav-links]');
const year = document.querySelector('[data-year]');
const signupForm = document.querySelector('[data-signup-form]');
const formNote = document.querySelector('[data-form-note]');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (signupForm && formNote) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signupForm);
    const name = formData.get('name');
    const email = formData.get('email');

    if (!name || !email) return;

    formNote.textContent = `Obrigada, ${name}! Seu nome e email foram registrados visualmente. Em breve vamos conectar esse formulário a uma lista real.`;
    signupForm.reset();
  });
}
