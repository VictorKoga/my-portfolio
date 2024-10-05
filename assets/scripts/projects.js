document.querySelectorAll('.trigger').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.nextElementSibling;

      // Toggle a classe 'open' no acordeão
      button.parentElement.classList.toggle('open');

      // Controla a exibição do conteúdo
      if (content.style.display === "block") {
          content.style.display = "none"; // Fecha o conteúdo
      } else {
          content.style.display = "block"; // Abre o conteúdo
      }
  });
});
