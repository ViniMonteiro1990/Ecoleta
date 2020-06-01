import express from 'express';

const app = express()

app.get('/users', (req,res) => {
    console.log('Listagem de usuarios')

    res.json([
        'Vinicius',
        'Monica',
        'Marilda',
        'Julio',
        'Gui',
        'Dana'
    ])
})

app.listen(3333);