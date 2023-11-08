const fs = require('node:fs');

/* Sincrona  */
const path = "./public"

const data = fs.readFileSync(path+'index.html');
//Lectura de contenido
console.log("\nBuffer: \n", html);
console.log("\nContenido: \n", html.toString());


/* Asincrona */