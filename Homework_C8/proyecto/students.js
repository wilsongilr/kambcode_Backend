import express from 'express'
import { readFileSync } from 'fs';

const app = express();
const port = 3005;
const datos = JSON.parse(readFileSync('./students.json', 'utf8'));
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
    const result = datos.find((dato) => dato.id === parseInt(idstudent));
    res.json({
        status: 200,
        message: 'Process success',
        data: result,
    });
});

app.delete('/students/:id', (req, res) => {

    const idstudent = req.params.id;
    const index = datos.findIndex((dato) => dato.id === parseInt(idstudent));
    datos.splice(index, 1)
    res.send({
        status: 200,
        message: `Student id:${idstudent} delete`,
    });
});

const getMax = (array, attr) => {
    let max = -Infinity;
    array.forEach(obj => {
        if (obj[attr] > max) {
            max = obj[attr];
        }
    });
    return max;
};

app.post('/students', (req, res) => {
    const { id, name, age, major } = req.body;
    let maxId = getMax(datos, 'id')
    console.log(maxId);
    maxId++;
    const newId = {
        id: maxId,
        name,
        age,
        major
    };

    let ageStudent = req.body.age;
    let nameStudent = req.body.name;

    if (ageStudent < 0) {
        return res.json({
            message: 'value age not valid'
        })
    }

    if (nameStudent === '' || nameStudent === null) {
        return res.json({
            message: 'value name not valid'
        })
    }


    datos.push(newId);
    res.json({
        status: 200,
        message: "Query executed successfully",
        inserted: newId
    })
})





app.put('/students/:id', (req, res) => {
    try {
        const studentupdate = req.body;
        let id = req.params.id;
        const index = datos.findIndex(dato => dato.id === parseInt(id));

        if (index === -1) {
            return res.json({
                status: 404,
                message: 'Not found id student'
            })
        }

        const datostUpdate = datos[index];

        let ageStudent = req.body.age;
        let nameStudent = req.body.name;

        if (ageStudent < 0) {
            return res.json({
                message: 'value age not valid'
            })
        }

        if (nameStudent === '' || nameStudent === null) {
            return res.json({
                message: 'value name not valid'
            })
        }




        datos[index] = studentupdate;
        res.send({
            status: 200,
            message: 'student updated successfully',
            data: req.body
        })

    } catch (error) {
        return res.send('Se presentor un error');
    }
})


app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});
