
var options = {
  strings: ['<span class="descripcion">NOVIA.</span>', '<span class="descripcion">NIÑA.</span>', '<span class="descripcion">PRINCESA.</span>', '<span class="descripcion">BEBÉ.</span>', '<span class="descripcion"> AMOR.</span>',
    '<span class="descripcion"> MUÑEQUITA.</span>'],
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: false, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
};

const typed = new Typed('.typed', options);

var options2 = {
  strings: ['<span class="descripcion">RAPUNZEL.</span>', '<span class="descripcion">MY LITTLE PONY.</span>', '<span class="descripcion">KPOP (¡TWICE!).</span>', '<span class="descripcion">BARBIE.</span>', '<span class="descripcion"> SANRIO.</span>',
    '<span class="descripcion">VIDEOJUEGOS DE TERROR.</span>', '<span class="descripcion">ATUN.</span>', '<span class="descripcion">MENTA GRANIZADA.</span>', '<span class="descripcion">CONEJITOS.</span>', '<span class="descripcion">HACERME ENOJAR.</span>', '<span class="descripcion">HABLAR (SI, ASI ME DICE QUE ES INTROVERTIDA).</span>', '<span class="descripcion">DISNEY.</span>'],
  stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: true, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: false, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
};

const typedo = new Typed('.typedo', options2);





