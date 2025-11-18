// Adiciona funcionalidade para imprimir a invoice

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('print-btn').addEventListener('click', function() {
    // Oculta os botões antes de imprimir
    var btns = [document.getElementById('print-btn'), document.getElementById('new-invoice-btn')];
    btns.forEach(function(btn) { if (btn) btn.style.display = 'none'; });

    // Oculta a seção de notas
    var notesSection = document.querySelector('.notes');
    if (notesSection) notesSection.style.display = 'none';

    // Troca o input pelo valor recebido
    var amountInput = document.getElementById('amount1');
    var amountValue = amountInput.value;
    var amountParent = amountInput.parentNode;
    var amountLabel = document.createElement('span');
    amountLabel.id = 'amount1-label';
    amountLabel.textContent = '€ ' + parseFloat(amountValue).toLocaleString('pt-PT', {minimumFractionDigits:2, maximumFractionDigits:2});
    amountParent.replaceChild(amountLabel, amountInput);

    // Imprime a página
    window.print();

    // Restaura os botões após imprimir
    btns.forEach(function(btn) { if (btn) btn.style.display = ''; });
    // Restaura a seção de notas
    if (notesSection) notesSection.style.display = '';
    // Restaura o input Amount
    amountParent.replaceChild(amountInput, amountLabel);
  });
});
