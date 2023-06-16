const express = require('express');
const server = express();
server.use(express.json());
server.listen(3000);

const crud = [];

server.get('/crud', (req, res) => {
    return res.json({ message: 'Hello Wolrd' })
});

server.post('/crud', (req, res) => {
    const { name } = req.body;
    crud.push(name);

    return res.json(crud);
});

server.put('/crud/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    crud[index] = name;

    return res.json(crud)
});

server.delete('/crud/', (req, res) => {
    const { index } = req.params;

    crud.splice(index, 1);

    return res.send();
});
