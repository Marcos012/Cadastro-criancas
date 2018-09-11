const express = require('express')

const app = express();

const port = process.env.PORT || 3000


app
    .set('views', __dirname + '/views')
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
        res.render('index')
    })
    .get('/cadastro', (req, res) => {
        res.render('cadastro')
    })



app.listen(port, () => console.log('Servidor rodando em http://localhost:'+port));