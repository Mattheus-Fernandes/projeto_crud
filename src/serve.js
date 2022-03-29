const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')


const app = express()

//Conexao com o banco de dados
db.connect()


//Definindo as rotas
app.use('/', routes)

//Definindo o template engine
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilitar o server receber dados pia post (formulario)
app.set(express.urlencoded({extended: true}))



//404 error (not found)
app.use((req, res) => {
    res.send('Pagina nao encontrada')
})

//Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))