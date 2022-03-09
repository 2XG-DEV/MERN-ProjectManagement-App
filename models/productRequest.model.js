import mongoose from "mongoose";

const replySchema = mongoose.Schema({
  content: { type: String },
  username: { type: String },
  user: {
    type: String,

    ref: "User",
  },
  replyingTo: {
    type: String,

    ref: "User",
  },
});

const commentSchema = mongoose.Schema({
  content: { type: String },
  username: { type: String },
  user: {
    type: String,

    ref: "User",
  },
  replies: [replySchema],
});

const productRequestSchema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  category: { type: String },
  status: { type: String },
  upvotes: { type: String, default: 0 },
  user: {
    type: String,

    ref: "User",
  },
  comments: [commentSchema],
});
const ProductRequest = mongoose.model("productRequest", productRequestSchema);

export default ProductRequest;
