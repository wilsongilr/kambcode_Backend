import express from 'express'
import { readFileSync } from 'fs';

const app = express();
const port = 3005;
const datos = JSON.parse( readFileSync('./students.json','utf8'));
console.log(datos);
app.use(express.json());

app.get('/students', (req, res) => {
    res.send({
        status: 200,
        message: 'Process success',
        data: datos,
    });
});

app.get('/students/:id', (req, res) => {
    
    const idstudent = req.params.id;
    const result =  datos.find((dato) => dato.id === parseInt(idstudent));
    res.json({
        status: 200,
        message: 'Process success',
        data: result,
    });
});

app.delete('/students/:id', (req, res) => {
    
    const idstudent = req.params.id;
    const index =  datos.findIndex((dato) => dato.id === parseInt(idstudent));
    datos.splice(index, 1)
    res.send({
        status: 200,
        message: `Student id:${idstudent} delete`,
    });
});



app.listen(port,() => {
    console.log(`Servidor escuchando en puerto ${port}`);
});
