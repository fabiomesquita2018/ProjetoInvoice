document.addEventListener('DOMContentLoaded', function() {
  // Recupera o número salvo ou inicia em 29
  let invoiceNumber = localStorage.getItem('invoiceNumber');
  if (!invoiceNumber || parseInt(invoiceNumber, 10) < 29) {
    invoiceNumber = 29;
    localStorage.setItem('invoiceNumber', invoiceNumber);
  }
  document.getElementById('invoice-number').textContent = invoiceNumber;

  document.getElementById('new-invoice-btn').addEventListener('click', function() {
    invoiceNumber = parseInt(localStorage.getItem('invoiceNumber'), 10) + 1;
    localStorage.setItem('invoiceNumber', invoiceNumber);
    document.getElementById('invoice-number').textContent = invoiceNumber;
  });
});