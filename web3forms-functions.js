async function enviarLeadWhatsApp(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonHTML = submitButton.innerHTML;

  submitButton.disabled = true;
  submitButton.textContent = 'Enviando...';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      window.location.href = 'obrigado.html';
    } else {
      throw new Error('Erro ao enviar formulário');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao enviar formulário. Por favor, tente novamente.');
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonHTML;
  }
  return false;
}

async function enviarCotacaoWhatsApp(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('input[type="submit"]');

  submitButton.disabled = true;
  submitButton.value = 'Enviando...';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    if (result.success) {
      window.location.href = 'obrigado.html';
    } else {
      throw new Error('Erro ao enviar formulário');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao enviar formulário. Por favor, tente novamente.');
    submitButton.disabled = false;
    submitButton.value = 'COTAÇÃO';
  }
  return false;
}
