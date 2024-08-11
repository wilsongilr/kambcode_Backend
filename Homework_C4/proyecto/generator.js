import fs from 'fs';


const numeros = () => {
    let resultado = '';
    for(let i = 1; i <=100; i ++)
        {
            resultado += i + ',';
        }
        return resultado;

}


const setNumbers = numeros();

fs.appendFile('numeros.txt', setNumbers, function (err) {
    if (err) {
        console.error("Ocurrió un error al guardar el archivo:", err);
        return;
    }
    console.log("¡Guardado!");
  });
    
