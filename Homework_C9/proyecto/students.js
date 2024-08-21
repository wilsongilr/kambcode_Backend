import express from 'express';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';
import { verifyTokenMiddleware, validarDatosMiddleware } from './middlewares/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

if (!port) {
  console.error('El puerto no está definido en las variables de entorno');
  process.exit(1);
}

let datos;
try {
  datos = JSON.parse(readFileSync('./students.json', 'utf8'));
} catch (error) {
  console.error('Error al leer o parsear el archivo students.json:', error);
  process.exit(1);
}

app.use(express.json());

app.get('/students', [verifyTokenMiddleware], (req, res) => {
  res.json({
    status: 200,
    message: 'Process success',
    data: datos,
  });
});

app.get('/students/:id', [verifyTokenMiddleware], (req, res) => {
  const idstudent = parseInt(req.params.id);
  const result = datos.find((dato) => dato.id === idstudent);
  if (!result) {
    return res.status(404).json({
      status: 404,
      message: 'Student not found'
    });
  }
  res.json({
    status: 200,
    message: 'Process success',
    data: result,
  });
});

app.delete('/students/:id', [verifyTokenMiddleware], (req, res) => {
  const idstudent = parseInt(req.params.id);
  const newDatos = datos.filter(dato => dato.id !== idstudent);

  if (newDatos.length === datos.length) {
    return res.status(404).json({
      status: 404,
      message: `Student id:${idstudent} not found`
    });
  }

  datos = newDatos;
  res.json({
    status: 200,
    message: `Student id:${idstudent} deleted`,
  });
});

const getMax = (array, attr) => Math.max(...array.map(obj => obj[attr]), 0);

app.post('/students', [verifyTokenMiddleware, validarDatosMiddleware], (req, res) => {
  const { id, name, age, major } = req.body;
  let maxId = getMax(datos, 'id') + 1;

  const newId = {
    id: maxId,
    name,
    age,
    major
  };

  datos.push(newId);
  res.json({
    status: 200,
    message: "Query executed successfully",
    inserted: newId
  });
});

app.put('/students/:id', [verifyTokenMiddleware, validarDatosMiddleware], (req, res) => {
  try {
    const studentUpdate = req.body;
    const id = parseInt(req.params.id);
    const index = datos.findIndex(dato => dato.id === id);

    if (index === -1) {
      return res.status(404).json({
        status: 404,
        message: 'Student not found'
      });
    }

    datos[index] = { ...datos[index], ...studentUpdate };
    res.json({
      status: 200,
      message: 'Student updated successfully',
      data: datos[index]
    });

  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({
      status: 500,
      message: 'Internal Server Error'
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
