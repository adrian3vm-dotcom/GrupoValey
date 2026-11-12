(() => {
  'use strict';
  const url = 'https://www.grupovaley.com/contacto/adan-valenzuela/';
  const shareButton = document.getElementById('share');
  const toast = document.getElementById('toast');
  let timeout;

  function notify(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(timeout);
    timeout = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      notify('Enlace copiado');
    } catch (_) {
      const textarea = document.createElement('textarea');
      textarea.value = url;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const succeeded = document.execCommand('copy');
      textarea.remove();
      notify(succeeded ? 'Enlace copiado' : 'No se pudo copiar el enlace');
    }
  }

  shareButton.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({title: 'Adán Valenzuela | Grupo Valey', url});
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }
    await copyLink();
  });
})();
