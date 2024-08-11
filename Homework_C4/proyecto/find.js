import fs from 'fs';

fs.readFile("numeros.txt", (err, data) => {
    const data2 = data.toString('utf8');
    const result = data2.split(',').filter((number) => parseInt(number) % 2 === 0);
    console.log(result);
});


// fs.readFile('numeros.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error("Ocurrió un error al leer el archivo:", err);
//         return;
//     } 
    
//     const readNumbers = data.toString('utf8');
//     console.log(readNumbers);

    
//     // const lineas = data.split('\n');
//     // const numerosPares = lineas
//     //     .map(linea => parseInt(linea.trim(), 10))
//     //     .filter(numero => !isNaN(numero) && numero % 2 === 0);
    
//     //   numbersPair(data);

//     // const numbersPair = () => {
//     //     readNumbers.map.filter((readNumber) => parseInt(readNumber) % 2 === 0 )
    
//     // }

//     // // Mostrar los números pares en la consola
//     //  console.log("Números pares:", numbersPair());
// })

