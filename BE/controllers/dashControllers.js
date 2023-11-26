class DashController {
    Index(req,res){
        res.render('Dashboard')
    }
}
module.exports = new DashController()