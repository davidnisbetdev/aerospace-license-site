const express = require('express');
const router = express.Router();

//@desc Homepage
// GET /
router.get('/', (req, res) => {
    res.render('home');
});

//@desc About page
//@route GET /about
router.get('/about', (req, res) => {
    res.render('about');
});

//@desc pricing page
//@route GET /pricing
router.get('/pricing', (req, res) => {
    res.render('pricing');
});

//@desc About page.
//@route GET /about
router.get('/modules', (req, res) => {
    res.render('modules');
});

//@desc Login Page
//@route GET /login
router.get('/login', (req, res) => {
    res.render('login');
});

//@desc Page with question selector
//@route GET /quiz
router.get('/quiz', (req, res) => {
    res.render('quiz');
});






module.exports = router