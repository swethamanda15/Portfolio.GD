// Filter Functionality
document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    const cards = document.querySelectorAll('.project-card');

    // Toggle active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide cards
    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Contact form submit handler
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simulate form submission
  document.getElementById("form-message").textContent = "Thank you! Your message has been sent.";
  this.reset();

  // Remove message after 5 seconds
  setTimeout(() => {
    document.getElementById("form-message").textContent = "";
  }, 5000);
});
