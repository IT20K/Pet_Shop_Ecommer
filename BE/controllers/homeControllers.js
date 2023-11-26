class HomeControllers {
    Index(req, res) {
        res.render('Home')
    }

}
module.exports = new HomeControllers()