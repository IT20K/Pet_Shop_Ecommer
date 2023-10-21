class UserControllers {
    index(req, res) {
        res.render('Account')
    }
   
}
module.exports = new UserControllers()