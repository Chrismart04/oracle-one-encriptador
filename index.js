const textArea = documen.querySelector(".text-area");
const message = document.querySelector(".resultado");
const copy = document.querySelector(".btn-copiar");

function validateText() {
  let text = document.querySelector(".text-area").value;
  let validate = text.match(/ˆ[a-z]*$/);

  if (!validate || validate === 0) {
    alert("Solo se permiten letras minusculas y sin acentos");
    location.reload();
    return true;
  }
}

function btnEncriptar(){
if(!validateText()){
    const encriptedText = encript(textArea.value)
}
}