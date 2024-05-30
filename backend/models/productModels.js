import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    images: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    prize: {
      type: String,
    },
    sizes: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    category: {
      type: Schema.Types.ObjectId,
      ref: "Collection",
      required: true,
    },
    newArrival: {
      type: Boolean,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
