window.document.addEventListener("DOMContentLoaded", function () {
  // Botão MAIÚSCULA
  document
    .querySelector("#btnMaiuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").value = inputText.toUpperCase();
    });

  // Botão minúscula
  document
    .querySelector("#btnMinuscula")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value;
      document.querySelector("#result").value = inputText.toLowerCase();
    });

  // Botão Primeira Maiúscula
  document
    .querySelector("#btnCapitalizar")
    .addEventListener("click", function () {
      let inputText = document.querySelector("#input-text").value.trim();
      if (inputText.length === 0) {
        document.querySelector("#result").value = "";
        return;
      }
      let capitalizado =
        inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
      document.querySelector("#result").value = capitalizado;
    });
  // Botão Limpar
  document.querySelector("#btnLimpar").addEventListener("click", function () {
    document.querySelector("#input-text").value = "";
    document.querySelector("#result").value = "";
  });
});
