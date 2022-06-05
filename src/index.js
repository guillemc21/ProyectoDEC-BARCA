const app = require('./config/server');

require('./app/routes/barca')(app);

/* Iniciar el server wacho */
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
})