const mongoose = require("mongoose");
const RoleSchema = new mongoose.Schema({
    rolename: {
        type: String
    },
    roledescription: {
        type: String
    },
    permissionLevel:{
        type:Number
    },
    users: { type: mongoose.Schema.Types.ObjectId, ref: "Users" }
});
const Roles = mongoose.model("Roles", RoleSchema);
module.exports = Roles;