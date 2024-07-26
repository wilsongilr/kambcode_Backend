let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];


// Punto1
for(let i = 0; i<= libros.length; i++)
{
    if(i === 1)
    {
        console.log('Titulo: ', libros[i].titulo , ' ' , 'Autor: ', libros[i].autor)
    }
}
console.log('--------------------------------------')

// Punto2
for(let i = 0; i<= libros.length; i++)
    {
        if(i === 0)
        {
            libros[i].paginas = 350;
        }
    }
    console.log(libros[0]);

// Punto3
console.log('--------------------------------------')
const newLibros = libros.map((libro) => {
    var objLibro = {};
    objLibro['titulo'] = libro.titulo;
    objLibro['Autor'] = libro.autor;
    return objLibro;
})

console.log(newLibros);

    
