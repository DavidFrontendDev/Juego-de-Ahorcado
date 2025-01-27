const palabraAdivinar = document.querySelector("#palabra");
const textoIntentos = document.querySelector("#intentos");
const inputUsuario = document.querySelector("#letra");
const textoInformacionUser = document.querySelector("#informacion");
const imagen = document.querySelector("#imagen_ahorcado");
const boton = document.querySelector("#probar");
let intentos = 5;

const palabras = [
  "html",
  "frontend",
  "backend",
  "css",
  "javascript",
  "java",
  "python",
  "mysql",
];
let palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
let ocultarPalabra = Array(palabraRandom.length).fill("_"); // metodo del constructor array para cambiar la palabra a _
palabraAdivinar.textContent = ocultarPalabra.join(" "); // separamos la palabra y la asignamos el valor al <h2>

function juego() {
  const usuario = inputUsuario.value.toLowerCase();
  inputUsuario.value = "";
  let letraEncontrada = false;
  // remplazar letra usuario
  for (let i = 0; i < palabraRandom.length; i++) {
    if (usuario === palabraRandom[i]) {
      ocultarPalabra[i] = usuario;
      letraEncontrada = true;
    }
  }
  if (letraEncontrada) {
    palabraAdivinar.textContent = ocultarPalabra.join(" ");
    textoInformacionUser.textContent = "Informacion: Has acertado!";
    if (!ocultarPalabra.includes("_")) {
      textoIntentos.textContent = "Has GANADO!!! :) ";
      inputUsuario.classList.add("disabled");
      inputUsuario.disabled = true;
      boton.disabled = true;
      imagen.src =
        "https://static.vecteezy.com/system/resources/thumbnails/013/743/815/small_2x/colorful-bright-confetti-png.png";
    }
  } else {
    textoInformacionUser.textContent =
      "Informacion: Has fallado, pierdes un intento";
    actualizarIntentos();
  }
}

function actualizarIntentos() {
  intentos--;
  textoIntentos.textContent = `Te quedan: ${intentos} Intentos`;
  if (intentos === 0) {
    textoIntentos.textContent = `Has PERDIDO! y la palabra era ${palabraRandom} `;
    inputUsuario.disabled = true;
    boton.disabled = true;
    imagen.src =
      "https://studio.code.org/v3/assets/9btxDyORqvr_esbR8sJUUCZKI3P7tvsZ4eYpfVcK8ug/3534747-200.png";
  }
}

inputUsuario.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    juego();
  }
});
boton.addEventListener("click", juego);
