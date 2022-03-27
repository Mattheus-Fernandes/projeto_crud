const mongoose = require('mongoose')

function connect() {
    //Conectando com o banco de dados
    mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
    const db = mongoose.connection

    db.once('open', ()=> {
        console.log('connected to database')
    })

    db.on('error', console.error.bind(console,'connection: error'))

}

module.exports = {
    connect
}