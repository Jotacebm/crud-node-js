// funcionalidad

const controller = {};

// controller.list = (req, res) => {
//     res.send('hola mundo');
// };

// conn = conexion
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, customers) => {
            if(err){
                res.json(err);
            }
            //console.log(customers);
            res.render('customers', {
                data: customers
            }); //vista 
        });
    });
};

controller.save = (req, res) => {
    const data = req.body; // todos los datos del formulario
    req.getConnection((err, conn) =>{
        conn.query('INSERT INTO usuario SET ?', [data], (err,usuario) =>{
            console.log(usuario);
            //res.send('works user');
            res.redirect('/');
        });
    })
    
};

controller.delete = (req, res) => {
    //console.log(req.params); //parametro por url params
    //res.send('wrosks');
    //const id_usuario = req.params.id
    const {id_usuario} = req.params;
    req.getConnection( (err, conn) =>{
        conn.query('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario], (err,rows) =>{
            res.redirect('/')
        });
    });
};

controller.update = (req, res) => {
    
};

module.exports = controller;