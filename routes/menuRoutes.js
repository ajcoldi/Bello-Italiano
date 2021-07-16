const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('pages/menu')
});
router.get('/pizza', (req, res) => {
    res.render('pages/menu-partials/menu-pizza')
});
router.get('/pasta', (req, res) => {
    res.render('pages/menu-partials/menu-pasta')
});
router.get('/desserts', (req, res) => {
    res.render('pages/menu-partials/menu-desserts')
});
router.get('/sides', (req, res) => {
    res.render('pages/menu-partials/menu-sides')
});
router.get('/flatbreads', (req, res) => {
    res.render('pages/menu-partials/menu-flatbreads')
});
router.get('/cicchetti', (req, res) => {
    res.render('pages/menu-partials/menu-cicchetti')
});
router.get('/aperitivo', (req, res) => {
    res.render('pages/menu-partials/menu-aperitivo')
});

       



module.exports = router