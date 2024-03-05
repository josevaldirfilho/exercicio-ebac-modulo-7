const form = document.getElementById('formConteudo');
const number_a = document.getElementById('number-a');
const number_b = document.getElementById('number-b');

// Seletores para exibir mensagens de sucesso/erro
const containerMensagemSucesso = document.querySelector('.success-message');
const containerMensagemErro = document.querySelector('.error-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Convertendo os valores para números antes de comparar
  const valorA = parseFloat(number_a.value);
  const valorB = parseFloat(number_b.value);

  const mensagemSucesso = `Formulário Válido`;
  const mensagemErro = 'Formulário inválido';

  // A lógica de comparação para dentro do manipulador de eventos
  if (valorB > valorA) {
    containerMensagemSucesso.innerHTML = mensagemSucesso;
    containerMensagemSucesso.style.display = 'block';
    containerMensagemErro.style.display = 'none';

    // Limpar os campos após a validação
    number_a.value = '';
    number_b.value = '';

  } else {
    containerMensagemErro.innerHTML = mensagemErro;
    containerMensagemErro.style.display = 'block';
    containerMensagemSucesso.style.display = 'none';
  }
});