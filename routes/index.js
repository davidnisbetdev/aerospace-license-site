const express = require('express')
const router = express.Router()

//@desc Homepage
//@route GET /
router.get('/', (req, res) => {
    res.render('Main', {
        layout: 'main',
    })
})

module.exports = router