const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Setting up schema for the collection-
const blogSchema = {
  blogTitle: String,
  blogContent: String,
  comments: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    content: String,
    timestamps:Number
  }],
  category: String,
  photo:{
    type: String
  },
  timestamps: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
};

//Making a MongoDB model for the schema-
module.exports = mongoose.model("Blog", blogSchema);
