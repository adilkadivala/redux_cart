const express = require("express");
const router = express.Router();
const productData = require("../controller/product");
const Middleware = require("../middleware/imageHandler");

router.route("/getproduct").get(productData.getProduct);
router
  .route("/postproduct")
  .post(Middleware.location.single("image"), productData.insertProduct);

router
  .route("/updateproduct")
  .put(Middleware.location.single("image"), productData.updateProduct);

router.route("/deleteproduct").delete(productData.deleteProdcut);

module.exports = router;
