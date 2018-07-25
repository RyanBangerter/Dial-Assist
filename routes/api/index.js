const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

// Book routes
router.use("/api", apiRoutes);

module.exports = router;