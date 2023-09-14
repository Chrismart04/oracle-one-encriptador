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
    message.value = encriptedText
    message.style.backgroundImage = "none"
    textArea.value = ""
    copy.style.display = "block"
}
}

//encription keys 
//the letter "e" is converted to "enter"
//the letter "i" is converted to "imes"
//the letter "a" is converted to "ai"
//the letter "o" is converted to "ober"
// the letter "u" is converted to "ufat"

function encript(encriptString){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    encriptString = encriptString.toLowerCase()

    for (let i = 0; i < matrixCode.length; i++){
        if(encriptString.includes(matrixCode[i][0])){
            encriptString = encriptString.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return encriptString
}

function btnDecrypt(){
    const encriptedText = decrypt(textArea.value)
    message.value = encriptedText
    textArea.value = ""

}

function decrypt(){
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    decryptString = decryptString.toLowerCase()

    for (let i = 0; i < matrixCode.length; i++){
        if(decryptString.includes(matrixCode[i][1])){
            decryptString = decryptString.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return decryptString
}

function copy(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Texto Copiado")
}