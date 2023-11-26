const mongoose =require("mongoose")
async function connect(){
    try{
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.CONNECTDB, {
            // useNewUrlParse:true,
            //, --> đã có mặc định từ phiên bản 3.1 nên không cần khai báo
            useUnifiedTopology:true
        });
        console.log("connect successfully")
    }
    catch(err){
        console.log(err + ", connect failed ")
    }
}
module.exports = { connect }