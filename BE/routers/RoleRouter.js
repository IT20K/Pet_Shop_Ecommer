const express = require("express");
const router = express.Router();
const RoleControllers = require("../controllers/roleControllers")

router.post("/v1/api/create", RoleControllers.CreateRole)
router.get("/v1/api/get", RoleControllers.GetRole)
router.get("/v1/api/getallrole", RoleControllers.GetAllRole)
router.use("/", RoleControllers.Index)

module.exports = router