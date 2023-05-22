console.log("hola");

const flour = "250 g de arina de fuerza";
const yeast = "7 g de levadura fresca";
const salt = "1/2 cucharadita de sal";
const oil = "25 ml de aceite de oliva virgen extra";
const water = "125 ml de agua templada";

const ingredients = [
  "Salsa de tomate",
  "Mozzarella",
  "carne picada de pollo",
  "pimiento rojo",
  "Salsa barbacoa",
  "Queso mozzarella",
  "bacon",
];
let quantities = [
  "abundante ",
  "mucha ",
  "500 gramos ",
  "uno de tamaño medio ",
  "abundante ",
  "abundante ",
  "500 trozos",
];
let bakeTime = "25 minutos";
let reposeTime = "dos horas";
start();
function start() {
  console.log("-- !!comenzamos!!");
  prepararLaMasa();
}
function prepararLaMasa() {
  cojerBol();
  añadirIngredientesMasa();
  amasar();
  esperar(reposeTime);
  añadirIngredientes();
  meterEnHorno();
  esperar(bakeTime);
}
function cojerBol() {
  console.log("cojiendo un Bol para añadir los ingredientes para la masa");
  console.log("-- !!Bol cogido!!");
}
function añadirIngredientesMasa() {
  console.log("añadiendo al bol " + flour);
  console.log("añadiendo al bol " + yeast);
  console.log("añadiendo al bol " + salt);
  console.log("añadiendo al bol " + oil);
  console.log("añadiendo al bol " + water);
  console.log("-- !!Masa lista para amasar!!");
}
function amasar() {
  console.log(
    "amasando hasta que queda una consistencia que no sea pagajosa en forma de bola"
  );
  console.log("-- !!masa preparada!!");
}

function añadirIngredientes() {
  for (let i = 0; i < ingredients.length; i++) {
    console.log("añadiendo " + quantities[i] + ingredients[i]);
  }
  console.log("-- !!Ingredientes añadidos!!");
}
function esperar(actionTime) {
  console.log("lo dejamos " + actionTime);
  console.log("-- !!Tiempo!!");
}
function meterEnHorno() {
  console.log("-- !!Piza metida en el horno!!");
}
