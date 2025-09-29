document.addEventListener('DOMContentLoaded', function() {
  function formatCurrency(value) {
    return value.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
  }
  function updateSummary() {
    var amount = parseFloat(document.getElementById('amount1').value) || 0;
    var taxRate = 0; // 0% conforme solicitado
    var subtotal = amount;
    var tax = subtotal * (taxRate / 100);
    var total = subtotal + tax;
    document.getElementById('subtotal').textContent = formatCurrency(subtotal).replace('€', '').trim();
    document.getElementById('tax').textContent = formatCurrency(tax).replace('€', '').trim();
    document.getElementById('total').textContent = formatCurrency(total).replace('€', '').trim();
    document.getElementById('balance-due').textContent = formatCurrency(total).replace('€', '').trim();
  }
  updateSummary();
  document.getElementById('amount1').addEventListener('input', updateSummary);
});