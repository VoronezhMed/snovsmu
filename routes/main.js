const {Router} = require('express')
const News = require(`../models/news`)
const router = Router()
let newsPage = window.location.search

router.get('/', async (req, res) => {
    res.render(`index`, {
        title: 'VSMU SNO'
    })
})
router.get('/menu', async (req, res) => {
    res.render(`snomenu`, {
        title: 'Меню СНО'
    })
})
router.get('/menu/cigs', async (req, res) => {
    res.render(`snocigs`, {
        title: 'CIGS СНО (Conditional Image Generation System)'
    })
})

module.exports = router;

