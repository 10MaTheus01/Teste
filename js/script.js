

// Selecionar o botão "CADASTRE-SE" e o input
const button = document.querySelector('.content button');
const input = document.querySelector('.content input[type="email"]');
const pesquisaInput = document.querySelector('.pesquisa input');

// Adicionar o evento de clique ao botão
button.addEventListener('click', function() {
  // Limpar o conteúdo do input
  input.value = '';
});

// Adicionar o evento de teclado ao input de cadastro
input.addEventListener('keydown', function(event) {
  // Verificar se a tecla pressionada é o Enter (código 13)
  if (event.keyCode === 13) {
    // Limpar o conteúdo do input
    input.value = '';
  }
});

// Adicionar o evento de teclado ao input de pesquisa
pesquisaInput.addEventListener('keydown', function(event) {
  // Verificar se a tecla pressionada é o Enter (código 13)
  if (event.keyCode === 13) {
    // Limpar o conteúdo do input de pesquisa
    pesquisaInput.value = '';
  }
});

function toggle(source) {
  const checkboxes = document.querySelectorAll('.produtos-favoritos input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = source.checked;
  });
}

