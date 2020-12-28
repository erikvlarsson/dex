import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: String,
  type: String,
  content: String,
  date: Object,
});

const PostModel = mongoose.model("posts", PostSchema);

export default PostModel;
