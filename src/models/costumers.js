const mongoose = require('mongoose')

//Criando uma tabela/colection
const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

const Model = mongoose.model('costumers', schema)

module.exports = Model