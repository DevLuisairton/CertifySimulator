document.addEventListener('DOMContentLoaded', () => {
 
  // Tab Navigation
  const tabButtons = document.querySelectorAll('.tab-navigation a');
  const tabContents = document.querySelectorAll('.tab-content');
  tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = button.getAttribute('href').substring(1);
      tabButtons.forEach(btn => btn.parentElement.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      button.parentElement.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      button.setAttribute('aria-selected', 'true');
      tabButtons.forEach(btn => btn !== button && btn.setAttribute('aria-selected', 'false'));
    });
  });

  // Service Filter
  const categoryFilter = document.getElementById('category-filter');
  const levelFilter = document.getElementById('level-filter');
  const searchInput = document.getElementById('search-services');
  const serviceCards = document.querySelectorAll('.service-card');

  function filterServices() {
    const category = categoryFilter.value;
    const level = levelFilter.value;
    const search = searchInput.value.toLowerCase();
    serviceCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const cardLevel = card.getAttribute('data-level');
      const cardTitle = card.querySelector('h3').textContent.toLowerCase();
      const cardDescription = card.querySelector('.service-description').textContent.toLowerCase();
      const categoryMatch = !category || cardCategory === category;
      const levelMatch = !level || cardLevel === level;
      const searchMatch = !search || cardTitle.includes(search) || cardDescription.includes(search);
      card.style.display = categoryMatch && levelMatch && searchMatch ? '' : 'none';
    });
  }

  categoryFilter.addEventListener('change', filterServices);
  levelFilter.addEventListener('change', filterServices);
  searchInput.addEventListener('input', filterServices);

  // Favorite Buttons
  document.querySelectorAll('.btn.icon').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const icon = button.querySelector('i');
      icon.classList.toggle('far');
      icon.classList.toggle('fas');
    });
  });
});