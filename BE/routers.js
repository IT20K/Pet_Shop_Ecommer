const express = require('express')
var bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors")
//su dung handlebar
const handlebar = require('express-handlebars')

//su dung router
const HomeRouter = require('./routers/HomeRouter');
const DashRouter = require('./routers/DashRouter');
const UserRouter = require('./routers/UserRouter');
const RoleRouter = require('./routers/RoleRouter');
const ProductRouter = require('./routers/ProductRouter');
const CartRouter = require('./routers/CartRouter');


//khai bao side can thiet
// dieu huong page
function routers(app) {
    uses(app)
    sethandlebars(app)
}

//su dung router 
function uses(app) {
    //size file json nhận
    //gửi dữ liệu dạng json
    app.use(express.json());
    //gửi dữ liệu dạng json, giới hạn dữ liẹu json
    app.use(bodyParser.json({ limit: '50mb' })); 
    //phân tích url gửi dữ liệu json dạng endcode
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
    // nhận dữ liệu phức tạp
    app.use(express.urlencoded({ extended: true }));
    //phục vụ các tệp file tĩnh 
    app.use(express.static(path.join(__dirname, "public")));
    //xử lí vấn đề các nguồn web truy cập vào và chấp nhận
    app.use(cors({ origin: "*" }));

    
    app.use("/carts", CartRouter)
    app.use("/products", ProductRouter)
    app.use("/roles", RoleRouter)
    app.use("/users", UserRouter)
    app.use("/dashboard", DashRouter)
    app.use("/", HomeRouter)
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