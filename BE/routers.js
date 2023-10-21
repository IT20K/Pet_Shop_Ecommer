
//su dung router
const HomeRouter = require('./routers/HomeRouter');
const DashRouter = require('./routers/DashRouter');
const UserRouter = require('./routers/UserRouter');

//su dung handlebar
const handlebar = require('express-handlebars')

//khai bao side can thiet
const path = require('path')
// dieu huong page
function routers(app) {
    uses(app)
    sethandlebars(app)
}

//su dung router 
function uses(app) {
    app.use('/users', UserRouter)
    app.use('/dashboard', DashRouter)
    app.use('/', HomeRouter)
}

//su dung view page
function sethandlebars(app) {
    app.engine("hbs", handlebar.engine({
        defaultLayout: "main",
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
        }
    }));
    app.set('view engine', "hbs")
    app.set('views', path.join(__dirname, 'views'))
}

module.exports = routers