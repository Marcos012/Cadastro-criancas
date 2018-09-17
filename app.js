const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3000

const app = express();

app
    .set('view engine', 'ejs')
    .set('views', __dirname + '/views')
    .use(expressLayouts)    
    .use('/public', express.static(__dirname + '/public/'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({ extended: false }))
    .get('/', (req, res) => {
        res.render('pages/home')
    })
    .get('/cadastro', (req, res) => {
        res.render('pages/cadastro')
    })
    .listen(PORT, () => console.log('Servidor rodando em http://localhost:' + PORT));