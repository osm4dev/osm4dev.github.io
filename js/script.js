// Example JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Message sent!');
    form.reset();
  });
});
