const textArea = document.querySelector(".text-area");
const message = document.querySelector(".resultado");
const copyButton = document.querySelector(".btn-copiar");

function validateText() {
  let text = document.querySelector(".text-area").value;
  let validate = text.match(/^[a-z]*$/);

  if (!validate || validate === 0) {
    alert("Solo se permiten letras minusculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar() {
  if (!validateText()) {
    const encriptedText = encript(textArea.value);
    message.value = encriptedText;
    message.style.backgroundImage = "none";
    textArea.value = "";
    copyButton.style.display = "block";
  }
}

//encription keys
//the letter "e" is converted to "enter"
//the letter "i" is converted to "imes"
//the letter "a" is converted to "ai"
//the letter "o" is converted to "ober"
// the letter "u" is converted to "ufat"

function encript(encriptString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  encriptString = encriptString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (encriptString.includes(matrixCode[i][0])) {
      encriptString = encriptString.replaceAll(
        matrixCode[i][0],
        matrixCode[i][1]
      );
    }
  }
  return encriptString;
}

function decrypt(decryptString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  decryptString = decryptString.toLowerCase();

  for (let i = 0; i < matrixCode.length; i++) {
    if (decryptString.includes(matrixCode[i][1])) {
      decryptString = decryptString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }
  return decryptString;
}

function btnDesencriptar() {
    const decryptedText = decrypt(message.value);
    textArea.value = decryptedText; 
  }

function copyText() {
  message.select();
  navigator.clipboard.writeText(message.value);
  alert("Texto Copiado");
}
