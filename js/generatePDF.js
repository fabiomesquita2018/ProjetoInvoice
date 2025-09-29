// Adiciona funcionalidade para gerar PDF da invoice
// Requer jsPDF e html2canvas

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generate-pdf-btn').addEventListener('click', function() {
    // Oculta os botões antes de gerar o PDF
    var btns = [document.getElementById('generate-pdf-btn'), document.getElementById('new-invoice-btn')];
    btns.forEach(function(btn) { if (btn) btn.style.display = 'none'; });

    // Troca o input pelo valor recebido
    var amountInput = document.getElementById('amount1');
    var amountValue = amountInput.value;
    var amountParent = amountInput.parentNode;
    var amountLabel = document.createElement('span');
    amountLabel.id = 'amount1-label';
    amountLabel.textContent = '€ ' + parseFloat(amountValue).toLocaleString('pt-PT', {minimumFractionDigits:2, maximumFractionDigits:2});
    amountParent.replaceChild(amountLabel, amountInput);

    const invoice = document.querySelector('.invoice-container');
    html2canvas(invoice, { scale: 2 }).then(function(canvas) {
      const imgData = canvas.toDataURL('image/png');
      const jsPDF = window.jspdf.jsPDF;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pageWidth;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      // Recupera o número da invoice
      var invoiceNum = document.getElementById('invoice-number').textContent.trim();
      var filename = 'invoice_' + invoiceNum + '.pdf';
      pdf.save(filename);
      // Restaura os botões após gerar o PDF
      btns.forEach(function(btn) { if (btn) btn.style.display = ''; });
      // Restaura o input Amount
      amountParent.replaceChild(amountInput, amountLabel);
    });
  });
});
