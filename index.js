const express = require('express')
const app = express();
const PORT = 8080;

app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/', (req, res) => {
    res.status(200).send({
        "green-apple": '🍏',
        "red-apple": '🍎',
        banana: '🍌',
    })
})

app.get('/green-apple', (req, res) => {
    res.status(200).send({
        fruit: '🍏',
        size: 'large',
        id: '01',
    })
})

app.get('/banana', (req, res) => {
    res.status(200).send({
        fruit: '🍌',
        size: 'large',
        id: '02',
    })
})

app.get('/red-apple', (req, res) => {
    res.status(200).send({
        fruit: '🍎',
        size: 'large',
        id: '03',
    })
})

// work out how to get specific fruit from id

// app.post('/fruits/:id', (req, res) => {
//     const { fruit } = req.body;
//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send( {message: 'We need a logo!'} )
//     }

//     res.send({
//         fruit: ` ${fruit} + ${logo} and ID: ${id}`,
//     })
// })