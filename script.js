// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://i.pinimg.com/474x/bd/70/69/bd706916de1c3f2d4ff811e175f6b648.jpg",
  "https://yt3.googleusercontent.com/l24_1_or7YiEuBAznvc0nSjZebvFTeAmalimwB2p9VN8VKCfYS9UMnRh65gYbUHjQgl5G1VNgw=s900-c-k-c0x00ffffff-no-rj",
  "https://play-lh.googleusercontent.com/GBqJYuXhXsATNMAXUNoRyqkLziaH13iJTCRTyRy4d5OH_EWnJMZePXULJLc9f27ZW4M",
  "https://upload.wikimedia.org/wikipedia/commons/a/a4/Deportivo-cali-escudo.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Escudo_de_Atl%C3%A9tico_Junior.svg/897px-Escudo_de_Atl%C3%A9tico_Junior.svg.png",
];

const titulos = [
  "Santa fé",
  "Millonarios",
  "Atletico Nacional",
  "Deportivo Cali", 
  "Junior",
];

const frases = [
  "Representas orgullo, tradición, y una identidad ligada a la perseverancia y al renacer constante.",
  "Representas fidelidad, mantienes la fe en las buenas y en las malas. Significa nostalgia y apego a generaciones pasadas.",
  "Representas la esperanza. Significa creer y soñar en grande, en historia y en que el éxito no es casualidad.",
  "Representas el desarrollo y la juventud que sueña. Construyes algo que dura y eres futurista.",
  "Representas el orgullo. No escondes tu alegría y tienes una actitud que nunca da por vencida",
];

const colores = [
  "red",
  "blue",
  "light green",
  "green",
  "red",
]

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");
const titulo = document.getElementById("titulo1");
const prediccion = document.getElementById("prediccion1");
const boton = document.getElementById("boton");

// Función para generar un número aleatorio entre un valor mínimo y un máximo
function numeroRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min - 1);
}

function generarPrediccion() {
  // Para elegir la misma posición en todas las listas, generar un solo número aleatorio
  const indice = numeroRandom(0, frases.length); // 0, 1, 2, 3

  // Reemplaza el texto del elemento 'titulo' por un título de la lista de títulos elegido aleatoriamente
  titulo.innerText = titulos[indice]; // Entre los [] se pasa el número aleatorio generado arriba

  // Reemplaza la imagen del elemento 'imagen' por una elegida aleatoriamente
  imagen.src = imagenes[indice];
  imagen.style.borderColor = colores[indice];

  // Reemplaza el texto del elemento 'predicción' por las frases elegidas aleatoriamente
  prediccion.innerHTML = `<p>${frases[indice]}</p>`;
}

// Ejecuta la función generarPoema() cada vez que hago click en el botón
boton.addEventListener("click", function () {
  generarPrediccion();
});

generarPrediccion();