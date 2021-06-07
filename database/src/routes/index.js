const Router = require('express').Router;

const notepadRoutes = require('./notepad');


const router = Router();

router.use('/notepad', notepadRoutes);


module.exports = router;
