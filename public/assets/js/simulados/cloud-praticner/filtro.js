// Função para alternar as categorias
function toggleCategory(categoryHeader) {
  const categoryContainer = categoryHeader.closest('.category-container');
  const categoryContent = categoryContainer.querySelector('.category-content');
  const toggleBtn = categoryContainer.querySelector('.toggle-btn');

  categoryContent.classList.toggle('active');
  toggleBtn.innerHTML = categoryContent.classList.contains('active') ? '&#x2212;' : '&#x2b;'; // Usando ícones Unicode
}

// Função para abrir uma categoria específica
function openCategory(categoryContainer) {
  const categoryContent = categoryContainer.querySelector('.category-content');
  const toggleBtn = categoryContainer.querySelector('.toggle-btn');

  categoryContent.classList.add('active');
  toggleBtn.innerHTML = '&#x2212;'; // Ícone de menos
}

// Função para fechar uma categoria específica
function closeCategory(categoryContainer) {
  const categoryContent = categoryContainer.querySelector('.category-content');
  const toggleBtn = categoryContainer.querySelector('.toggle-btn');

  categoryContent.classList.remove('active');
  toggleBtn.innerHTML = '&#x2b;'; // Ícone de mais
}

// Função para fechar todas as categorias
function closeAllCategories() {
  document.querySelectorAll('.category-container').forEach(category => {
      closeCategory(category);
  });
}

// Event listeners para os cabeçalhos das categorias
document.querySelectorAll('.category-header').forEach(header => {
  header.addEventListener('click', () => toggleCategory(header));
});

// Event listeners para os botões de toggle
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleCategory(btn.closest('.category-header'));
  });
});

// Função de busca
document.getElementById('simuladosSearch').addEventListener('input', function(e) {
  const searchTerm = e.target.value.toLowerCase().trim();

  // Fecha todas as categorias antes de aplicar o filtro
  closeAllCategories();

  // Se o campo de pesquisa estiver vazio, abre a primeira categoria
  if (searchTerm === '') {
      const firstCategory = document.querySelector('.category-container');
      if (firstCategory) {
          openCategory(firstCategory);
      }
      return;
  }

  // Filtra os cards com base no termo de pesquisa
  document.querySelectorAll('.simulado-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const match = title.includes(searchTerm) || description.includes(searchTerm);

      card.style.display = match ? 'block' : 'none';
  });

  // Abre apenas as categorias que têm cards visíveis
  document.querySelectorAll('.category-container').forEach(category => {
      const hasVisibleCards = Array.from(category.querySelectorAll('.simulado-card'))
          .some(card => card.style.display !== 'none');

      if (hasVisibleCards) {
          openCategory(category);
      }
  });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Fecha todas as categorias inicialmente
  closeAllCategories();

  // Abre a primeira categoria por padrão
  const firstCategory = document.querySelector('.category-container');
  if (firstCategory) {
      openCategory(firstCategory);
  }
});