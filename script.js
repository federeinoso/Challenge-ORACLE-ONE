// SELECTORS

let input = document.querySelector("textarea");
let encriptarBtn = document.getElementById("encriptarBtn");
let rectangle = document.getElementById("rectangle");
let muñeco = document.getElementById("muñeco");
let text2 = document.getElementById("text2");
let text1 = document.getElementById("text1");
let divEncriptado = document.getElementById("textoEncriptado");
let copiarBtn = document.getElementById("copiarBtn");
let containerResultado = document.getElementById("containerResultado");
let desencriptarBtn = document.getElementById("desencriptarBtn");
let imagen = document.getElementById("exclamation");

// RED WARNING

function displayNormal() {
  text1.classList.add("text1");
  text1.classList.remove("warning");
  imagen.src = "images/normal.svg";
}

function displayWarning() {
  text1.classList.remove("text1");
  text1.classList.add("warning");
  imagen.src = "images/warning.svg";
}

// PRINCIPALS FUNCTIONS

const regex = /[^a-z ]/;

encriptarBtn.addEventListener("click", function () {
  let mensaje = input.value;
  if (mensaje.length > 0 && !regex.test(mensaje)) {
    displayNormal();
    rectangle.classList.add("rectangle");
    containerResultado.classList.remove("containerResultado");
    copiarBtn.classList.remove("copiarBtn");
    resultado = encriptar(mensaje);
    divEncriptado.innerText = resultado;
  } else {
    displayWarning();
  }
});

function encriptar(mensaje) {
  let mensajeEncriptado;
  mensajeEncriptado = mensaje.replace(/e/g, "enter");
  mensajeEncriptado = mensajeEncriptado.replace(/i/g, "imes");
  mensajeEncriptado = mensajeEncriptado.replace(/a/g, "ai");
  mensajeEncriptado = mensajeEncriptado.replace(/o/g, "ober");
  mensajeEncriptado = mensajeEncriptado.replace(/u/g, "ufat");

  return mensajeEncriptado;
}

desencriptarBtn.addEventListener("click", function () {
  let mensaje = input.value;
  if (mensaje.length > 0 && !regex.test(mensaje)) {
    displayNormal();
    rectangle.classList.add("rectangle");
    containerResultado.classList.remove("containerResultado");
    copiarBtn.classList.remove("copiarBtn");
    resultado = desencriptar(mensaje);
    divEncriptado.innerText = resultado;
  } else {
    displayWarning();
  }
});

function desencriptar(mensaje) {
  let mensajeDesencriptado;

  mensajeDesencriptado = mensaje.replace(/enter/g, "e");
  mensajeDesencriptado = mensajeDesencriptado.replace(/imes/g, "i");
  mensajeDesencriptado = mensajeDesencriptado.replace(/ai/g, "a");
  mensajeDesencriptado = mensajeDesencriptado.replace(/ober/g, "o");
  mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/g, "u");
  return mensajeDesencriptado;
}

copiarBtn.addEventListener("click", copiar);

function copiar() {
  mensaje = divEncriptado.innerText;
  navigator.clipboard.writeText(mensaje);
}
