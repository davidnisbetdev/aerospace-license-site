module.exports = {
    ensureAuth: function (req, res, next){
        if(req.isAuthenticated()){
            return next()
        }else{
            res.redirect('/')
        }
    },
    ensureGuest: function (req, res, next){
        if(req.isAuthenticaed()){
            res.redirect('/about')
        }else{
            return next()
        }
    }
}

