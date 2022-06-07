const dbConnection = require('../../config/dbConnection');
/* 
--> redirect(poner ruta que coincida con alguna indicada con el app.get(...))
--> render(poner ruta de archivo ejs para renderizar)
*/
module.exports = app => {

    const connection = dbConnection();

    app.get('/', (req, res) => {
        
        res.render('barca/index');
        
    });

    app.get('/barca', (req, res) => {
        connection.query('SELECT * FROM reservas', (err, result) => {
            console.log(result);
            res.render('barca/barca', {
                news: result
            });
        });
    });

    app.post('/barca2', (req, res) => {
        const { nombre , apellido , correo , telefono , fecha , ruta} = req.body;
        connection.query('INSERT INTO reservas SET?', {
            nombreUsuario: nombre,
            apellidoUsuario: apellido,
            correoUsuario: correo,
            telefono: telefono,
            fechaReserva: fecha,
            RUTA: ruta
        }, (err, result) => {
            res.redirect('/barca')
        });
    });

    app.get('/covid', (req, res) => {

        res.render('barca/covid');

    });

    app.get('/cancel', (req, res) => {
        
        res.render('barca/cancel');

    });
}