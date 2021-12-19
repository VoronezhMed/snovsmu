const express = require(`express`);
const mongoose = require(`mongoose`);
const exp_hbs = require('express-handlebars')
const mainRoutes = require('./routes/main')
const PORT = 3000;
const app = express();
const hbs = exp_hbs.create({
    defaultLayout: "main",
    extname: "hbs"
})
app.engine(`hbs`, hbs.engine)
app.set(`view engine`, `hbs`)
app.set(`views`, `views`)
//Инициализация дополнительных систем
app.use(express.static(__dirname + '/public'));
//Инициализация основной системы
app.use(mainRoutes)

async function start() {
    try {
        app.listen(PORT, () => {
            console.log(`SYSTEM MESSAGE: VSMU server has been started.`);
        })
    } catch(e) {
        console.log('Error!');
        console.log(e)
    } 
}

start()
