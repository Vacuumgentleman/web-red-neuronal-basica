const network = new brain.NeuralNetwork({ hiddenLayers: [12, 12] });

// Entrenamiento
const trainingData = [
  // Niñez
  { input: { edad: 0.05, genero: 0 }, output: { fondoR: 1.0, fondoG: 0.8, fondoB: 0.9, fuenteR: 0.9, fuenteG: 0.1, fuenteB: 0.4, tamano: 1.0, desc: 0 } },
  { input: { edad: 0.05, genero: 1 }, output: { fondoR: 0.7, fondoG: 0.8, fondoB: 1.0, fuenteR: 0.2, fuenteG: 0.3, fuenteB: 0.8, tamano: 1.0, desc: 1 } },
  { input: { edad: 0.05, genero: 0.5 }, output: { fondoR: 0.9, fondoG: 0.9, fondoB: 0.95, fuenteR: 0.4, fuenteG: 0.3, fuenteB: 0.5, tamano: 1.0, desc: 0.5 } },

  // Adultez
  { input: { edad: 0.45, genero: 0 }, output: { fondoR: 0.95, fondoG: 0.85, fondoB: 0.9, fuenteR: 0.6, fuenteG: 0.3, fuenteB: 0.4, tamano: 0.6, desc: 0 } },
  { input: { edad: 0.45, genero: 1 }, output: { fondoR: 0.75, fondoG: 0.8, fondoB: 0.95, fuenteR: 0.3, fuenteG: 0.3, fuenteB: 0.5, tamano: 0.6, desc: 1 } },
  { input: { edad: 0.45, genero: 0.5 }, output: { fondoR: 0.9, fondoG: 0.9, fondoB: 0.9, fuenteR: 0.4, fuenteG: 0.4, fuenteB: 0.4, tamano: 0.6, desc: 0.5 } },

  // Vejez
  { input: { edad: 0.8, genero: 0 }, output: { fondoR: 0.9, fondoG: 0.85, fondoB: 0.9, fuenteR: 0.4, fuenteG: 0.4, fuenteB: 0.4, tamano: 0.9, desc: 0 } },
  { input: { edad: 0.8, genero: 1 }, output: { fondoR: 0.7, fondoG: 0.75, fondoB: 0.9, fuenteR: 0.3, fuenteG: 0.3, fuenteB: 0.3, tamano: 0.9, desc: 1 } },
  { input: { edad: 0.8, genero: 0.5 }, output: { fondoR: 0.85, fondoG: 0.85, fondoB: 0.85, fuenteR: 0.35, fuenteG: 0.35, fuenteB: 0.35, tamano: 0.9, desc: 0.5 } },

  // Vejez avanzada
  { input: { edad: 0.98, genero: 0 }, output: { fondoR: 0.92, fondoG: 0.9, fondoB: 0.92, fuenteR: 0.3, fuenteG: 0.3, fuenteB: 0.3, tamano: 1.3, desc: 0 } },
  { input: { edad: 0.98, genero: 1 }, output: { fondoR: 0.75, fondoG: 0.78, fondoB: 0.9, fuenteR: 0.25, fuenteG: 0.25, fuenteB: 0.3, tamano: 1.3, desc: 1 } },
  { input: { edad: 0.98, genero: 0.5 }, output: { fondoR: 0.9, fondoG: 0.9, fondoB: 0.9, fuenteR: 0.3, fuenteG: 0.3, fuenteB: 0.3, tamano: 1.3, desc: 0.5 } },
];

network.train(trainingData, {
  iterations: 15000,
  errorThresh: 0.002,
  log: false
});

const edadInput = document.getElementById("edad");
const generoInput = document.getElementById("genero");
const edadValor = document.getElementById("edadValor");
const generoTexto = document.getElementById("generoTexto");
const salida = document.getElementById("salida");

function actualizar() {
  const edad = parseFloat(edadInput.value);
  const genero = parseFloat(generoInput.value);

  edadValor.textContent = edad.toFixed(0);

  const resultado = network.run({
    edad: edad / 100,
    genero: (genero + 1) / 2
  });

  const fondo = `rgb(${resultado.fondoR * 255}, ${resultado.fondoG * 255}, ${resultado.fondoB * 255})`;
  const fuente = `rgb(${resultado.fuenteR * 255}, ${resultado.fuenteG * 255}, ${resultado.fuenteB * 255})`;
  const tamano = 2 + resultado.tamano * 3;

  const etiquetas = ["Femenino", "Neutral", "Masculino"];
  const textoDesc = etiquetas[Math.round(resultado.desc * 2)];

  generoTexto.textContent = `${textoDesc} (${genero.toFixed(2)})`;

  document.body.style.backgroundColor = fondo;
  salida.style.color = fuente;
  salida.style.fontSize = tamano + "rem";
  salida.textContent = `Edad: ${edad.toFixed(0)} | Género: ${textoDesc}`;
}

edadInput.addEventListener("input", actualizar);
generoInput.addEventListener("input", actualizar);

actualizar();
