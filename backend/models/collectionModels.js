import mongoose, { Schema } from "mongoose";

const collectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String, //CloudinaryUrl
      required: true,
      trim: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Collection = mongoose.model("Collection", collectionSchema);
