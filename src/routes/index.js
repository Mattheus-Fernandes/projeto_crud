const router = require('express').Router()

const CustomersControllers = require('../controllers/costumers')

//Rotas
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Titulo Teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro'
    })
})

router.post('/register-add', CustomersControllers.add)


module.exports = router