const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let sumEdades;
let promEdades;

estudiantes.map((estudiante) => {
    sumEdades = estudiante.edad;
    promEdades = sumEdades / estudiantes.length;
})

console.log('Suma Edades: ', sumEdades);
console.log('Promedio Edades: ', promEdades);