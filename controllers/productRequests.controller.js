import asyncHandler from "express-async-handler";
import ProductRequest from "../models/productRequest.model.js";

const getAllProductRequests = asyncHandler(async (req, res) => {
  const requests = await ProductRequest.find({});
  res.json(requests);
});

const addProductRequest = asyncHandler(async (req, res) => {
  try {
    const requ = new ProductRequest({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      status: req.body.status,
      user: req.user._id,
    });
    const created = await requ.save();
    res.status(201).json(created);
  } catch (e) {
    res.status(400).json({ msg: e });
  }
});

const deleteProductRequest = asyncHandler(async (req, res) => {
  const requ = await ProductRequest.findById(req.params.id);
  if (requ) {
    await requ.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404).json({ msg: "Product Request not Found" });
  }
});

const getOneProduct = asyncHandler(async (req, res) => {
  const requ = await ProductRequest.findById(req.params.id);
  if (requ) {
    res.json(requ);
  } else {
    res.status(404).json({ msg: "Product Request not Found" });
  }
});

const updateProductRequest = asyncHandler(async (req, res) => {
  const requ = await ProductRequest.findById(req.params.id);
  if (requ) {
    requ.title = req.body.title || requ.title;
    requ.description = req.body.description || requ.title;
    requ.category = req.body.category || requ.category;
    requ.status = req.body.status || requ.status;
    requ.upvotes = req.body.upvotes || requ.upvotes;
    requ.comments = req.body.comments || requ.comments;
    const updated = await requ.save();
    res.json(updated);
  } else {
    res.status(404).json({ msg: "Product Request not found" });
  }
});

export {
  getAllProductRequests,
  deleteProductRequest,
  addProductRequest,
  updateProductRequest,
  getOneProduct,
};
