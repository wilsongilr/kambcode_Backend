import { readFileSync } from 'fs';
import http from 'http';
import url from 'url';

const port = 3002;
const datos = JSON.parse(readFileSync('./products.json', 'utf8'));

const server = http.createServer((req, res) => {
const urlApi = url.parse(req.url, true); 
const path = urlApi.pathname;
const id =  urlApi.query.id; 

    res.writeHead(200, { "Content-Type": "application/json" });

    if (path === "/products") {
        res.end(JSON.stringify({
            status: 200,
            message: 'Process success',
            data: datos
        }))
    } else if (path.startsWith("/products/")) {
        const productId = path.split('/')[2]; 
        const result = datos.find((dato) => dato.id === parseInt(productId, 10));

        if (result) {
            res.end(JSON.stringify({
                status: 200,
                message: 'Process success ok',
                data: result
            }))
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Product not found" }));
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});

