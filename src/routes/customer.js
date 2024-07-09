const express = require('express');
const router = express.Router();
//metodo router de express devuelve un objeto de js para agregar rutas para reutilizarlas

// importando de customerController
const customerController = require('../controllers/customerController');

// router.get('/', (req, res) => {
//     res.send('hola'); //funcion responde algo
// })
// '/' = la raiz
router.get('/' , customerController.list);
router.post('/add', customerController.save); // escucha del del formulario de insertar usuario
router.get('/delete/:id_usuario', customerController.delete);
router.get('/update/:id_usuario', customerController.update);

module.exports = router;
