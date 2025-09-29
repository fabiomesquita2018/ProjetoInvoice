document.addEventListener('DOMContentLoaded', function() {
  function formatDate(date) {
    return date.toLocaleDateString('pt-PT', {
      day: '2-digit', month: 'short', year: 'numeric'
    });
  }
  const today = new Date();
  document.getElementById('invoice-date').textContent = formatDate(today);
  document.getElementById('due-date').textContent = formatDate(today);
});