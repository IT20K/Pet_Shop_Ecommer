class DashController {
    index(req,res){
        res.render('Dashboard')
    }
}
module.exports = new DashController()