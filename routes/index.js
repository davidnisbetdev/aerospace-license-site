const express = require('express')
const router = express.Router()

//@desc Homepage
// GET /
router.get('/', (req, res) => {
    res.render('home')
})

//@desc About page
//@route GET /about
router.get('/about', (req, res) => {
    res.render('about')
})

//@desc pricing page
//@route GET /about
router.get('/pricing', (req, res) => {
    res.render('pricing')
})

//@desc About page
//@route GET /about
router.get('/modules', (req, res) => {
    res.render('modules')
})







module.exports = router