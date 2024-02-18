const { Router } = require("express");

const router=  Router();

router.use("/api",require("./usersRoutes")) ;
router.use("/api",require("./productsRoutes")) ;

module.exports = router ;