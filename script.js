/* Interações da landing page ASSUMA: menu, navegação, acessibilidade e contato. */
'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#site-nav');
const menuIcon = menuButton?.querySelector('use');

function closeMenu() {
  if (!menuButton || !mainNavigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
  mainNavigation.classList.remove('is-open');
  menuIcon?.setAttribute('href', '#i-menu');
}

menuButton?.addEventListener('click', () => {
  const isOpening = menuButton.getAttribute('aria-expanded') !== 'true';
  mainNavigation.classList.toggle('is-open', isOpening);
  menuButton.setAttribute('aria-expanded', String(isOpening));
  menuButton.setAttribute('aria-label', isOpening ? 'Fechar menu' : 'Abrir menu');
  menuIcon?.setAttribute('href', isOpening ? '#i-x' : '#i-menu');
});

mainNavigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (mainNavigation?.classList.contains('is-open') && !event.target.closest('.site-header')) closeMenu();
});
window.addEventListener('resize', () => { if (window.innerWidth > 850) closeMenu(); });

/* Realce da seção ativa e transição discreta dos cartões. */
const navLinks = [...document.querySelectorAll('.site-nav .nav-link')];
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const spy = new IntersectionObserver(entries => {
    const item = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!item) return;
    navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === '#' + item.target.id));
  }, { rootMargin: '-20% 0px -62% 0px', threshold: [0, 0.05, 0.15] });
  sections.forEach(section => spy.observe(section));
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px 50px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(element => reveal.observe(element));
} else {
  document.querySelectorAll('[data-reveal]').forEach(element => element.classList.add('is-visible'));
}

/* Botão de retorno ao início. */
const returnTop = document.querySelector('.back-to-top');
function updateBackToTop() { returnTop?.classList.toggle('is-visible', window.scrollY > 650); }
window.addEventListener('scroll', updateBackToTop, { passive: true });
updateBackToTop();

/* Botões "Como ajudar" pré-selecionam a área de interesse no contato. */
document.querySelectorAll('[data-subject]').forEach(link => {
  link.addEventListener('click', () => {
    const subject = document.querySelector('#assunto');
    if (subject) subject.value = link.dataset.subject;
  });
});

/* Envio transparente: abre o WhatsApp com a mensagem, sem banco de dados nem confirmação falsa. */
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  const name = form.querySelector('#nome').value.trim();
  const email = form.querySelector('#email').value.trim();
  const phone = form.querySelector('#telefone').value.trim();
  const subject = form.querySelector('#assunto').value;
  const message = form.querySelector('#mensagem').value.trim();
  const agreed = form.querySelector('#concordo').checked;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  status.classList.remove('is-error');
  if (!name || !validEmail || !subject || !message || !agreed) {
    status.textContent = 'Confira os campos obrigatórios, seu e-mail e o aceite antes de continuar.';
    status.classList.add('is-error');
    form.querySelector(!name ? '#nome' : !validEmail ? '#email' : !subject ? '#assunto' : !message ? '#mensagem' : '#concordo').focus();
    return;
  }
  const contents = [`Olá, ASSUMA! Vim pelo site e gostaria de entrar em contato.`, ``, `*Nome:* ${name}`, `*E-mail:* ${email}`, phone ? `*Telefone:* ${phone}` : '', `*Assunto:* ${subject}`, ``, `*Mensagem:*`, message].filter(line => line !== '').join('\n');
  const url = 'https://wa.me/5519991653038?text=' + encodeURIComponent(contents);
  status.textContent = 'Abrindo o WhatsApp. Revise e envie a mensagem no aplicativo para concluir.';
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Se não abrir automaticamente, clique aqui para continuar no WhatsApp.';
  link.click();
  status.append(' ');
  status.append(link);
});

/* Ano automático no rodapé. */
const year = document.querySelector('#copyright-year');
if (year) year.textContent = String(new Date().getFullYear());

/* Abrir créditos mesmo quando o destino for um elemento details fechado. */
document.querySelectorAll('a[href="#creditos"]').forEach(link => link.addEventListener('click', () => {
  const credits = document.querySelector('#creditos');
  if (credits) credits.open = true;
}));
