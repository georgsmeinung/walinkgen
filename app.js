(() => {
  const form = document.getElementById('linkForm');
  const phoneInput = document.getElementById('phone');
  const messageInput = document.getElementById('message');
  const generatedLinkEl = document.getElementById('generatedLink');
  const qrContainer = document.getElementById('qrcode');
  const downloadBtn = document.getElementById('downloadQrBtn');

  if (!form || !phoneInput || !generatedLinkEl || !qrContainer || !downloadBtn) {
    console.error('Faltan elementos con IDs requeridos en index.html');
    return;
  }

  function sanitizePhone(phone) {
    return (phone || '').replace(/\D/g, '');
  }

  function buildWhatsAppLink(phone, message) {
    const cleanPhone = sanitizePhone(phone);
    if (!cleanPhone) return '';

    const base = `https://wa.me/${cleanPhone}`;
    const text = (message || '').trim();
    return text ? `${base}?text=${encodeURIComponent(text)}` : base;
  }

  async function renderQr(text) {
    qrContainer.innerHTML = '';
    if (!text) {
      qrContainer.textContent = 'Genera un enlace para ver el QR';
      downloadBtn.disabled = true;
      return;
    }

    const canvas = document.createElement('canvas');
    qrContainer.appendChild(canvas);

    try {
      await QRCode.toCanvas(canvas, text, {
        width: 256,
        margin: 1,
        errorCorrectionLevel: 'M'
      });
      downloadBtn.disabled = false;
    } catch (err) {
      console.error('Error generando QR:', err);
      qrContainer.textContent = 'No se pudo generar el QR';
      downloadBtn.disabled = true;
    }
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const link = buildWhatsAppLink(
      phoneInput.value,
      messageInput ? messageInput.value : ''
    );

    if (!link) {
      generatedLinkEl.textContent = '';
      generatedLinkEl.removeAttribute('href');
      await renderQr('');
      return;
    }

    generatedLinkEl.textContent = link;
    generatedLinkEl.href = link;

    await renderQr(link);
  });

  downloadBtn.addEventListener('click', () => {
    const canvas = qrContainer.querySelector('canvas');
    if (!canvas) return;

    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'walink-qr.png';
    a.click();
  });
})();
