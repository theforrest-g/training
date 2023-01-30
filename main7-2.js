document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById('input');
    let field = document.getElementById('h2');
    let timeout;
    

    function timeOutPrintField() {
    field.textContent = input.value;
    }
    function outputText() {
      timeout = clearTimeout(timeout);
      timeout = setTimeout(timeOutPrintField, 1000);
    };
  input.addEventListener('input', outputText);
});
