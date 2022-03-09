import express from "express";
import {
  addProductRequest,
  deleteProductRequest,
  getAllProductRequests,
  getOneProduct,
  updateProductRequest,
} from "../controllers/productRequests.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getAllProductRequests);
router.get("/:id", auth, getOneProduct);
router.post("/", auth, addProductRequest);
router.delete("/:id", auth, deleteProductRequest);
router.put("/:id", auth, updateProductRequest);

export default router;
