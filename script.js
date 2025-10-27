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

      // Coloca tudo em minúsculas primeiro
      let texto = inputText.toLowerCase();

      // Divide por ponto e trata cada parte
      let frases = texto.split(".").map((frase) => {
        frase = frase.trim();
        if (frase.length === 0) return "";
        return frase.charAt(0).toUpperCase() + frase.slice(1);
      });

      // Junta novamente com ponto e espaço
      let capitalizado = frases.join(". ");

      document.querySelector("#result").value = capitalizado;
    });
  // Botão Copiar
  document.querySelector("#btnCopiar").addEventListener("click", function () {
    let resultado = document.querySelector("#result").value;
    if (resultado.trim() !== "") {
      navigator.clipboard
        .writeText(resultado)
        .then(() => {
          alert("Texto copiado para a área de transferência!");
        })
        .catch((err) => {
          alert("Erro ao copiar texto: " + err);
        });
    } else {
      alert("Nada para copiar!");
    }
  });
  // Botão Limpar
  document.querySelector("#btnLimpar").addEventListener("click", function () {
    document.querySelector("#input-text").value = "";
    document.querySelector("#result").value = "";
  });
});
