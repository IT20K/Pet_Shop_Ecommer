class HomeControllers {
    index(req, res) {
        res.render('Home')
    }
   
}
module.exports = new HomeControllers()