let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];



const result = productos.filter((products) => products.categoria === 'Ropa');
console.log(result);
console.log('---------------------------------------------------------------')
const preciosMayores = productos.filter((products) => products.precio > 30);
console.log(preciosMayores);