const express = require('express')
const router = express.Router()

//@desc Homepage
//@route GET /
router.get('/', (req, res) => {
    res.render('Index', {
        layout: 'index',
    })
})

module.exports = router