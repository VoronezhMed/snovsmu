const express = require(`express`);
const mongoose = require(`mongoose`);
const exp_hbs = require('express-handlebars')
const mainRoutes = require('./routes/main')
const PORT = process.env.PORT || 80;
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
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
