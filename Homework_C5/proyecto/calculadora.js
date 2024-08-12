import OperacionesCalculadora from "./src/Operaciones.js";

const args = process.argv.slice(2);

let num1 = args[0];
let oper = args[1];
let num2 = args[2];

const resultado = await OperacionesCalculadora(parseInt(num1),oper,parseInt(num2));

console.log(resultado);

