import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import productRequests from "./data/productRequests.js";
import User from "./models/user.model.js";
import ProductRequest from "./models/productRequest.model.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const importData = async () => {
  await User.deleteMany();
  await User.insertMany(users);
  await ProductRequest.deleteMany();
  const sampleRequests = productRequests.map((prodReq) => {
    if (prodReq.comments) {
      const sampleComments = prodReq.comments?.map(async (comment) => {
        let commentUser = await User.findOne({ username: comment.username });
        console.log(commentUser._id);
        if (comment.replies) {
          const sampleReplies = comment.replies?.map(async (reply) => {
            let replyUser = await User.findOne({ username: reply.username });
            let replyingToUser = await User.findOne({
              username: reply.replyingTo,
            });
            return {
              ...reply,
              user: replyUser._id,
              replyingTo: replyingToUser,
            };
          });
          return { ...comment, user: commentUser._id, replies: sampleReplies };
        }

        return { ...comment, user: commentUser._id };
      });
      return { ...prodReq, comments: sampleComments };
    }
  });
  await ProductRequest.insertMany(productRequests);
  console.log("data inserted");
};

importData();
