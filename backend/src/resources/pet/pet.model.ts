import {Schema, model} from "mongoose";
import Pet from "@/resources/pet/pet.interface";

const PetSchema = new Schema(
  {
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    breed: {
      type: String,
      required: false
    },
    location: {
      type: String,
      required: true
    },
    spot: {
      type: String,
      required: true
    }
  },
  {timestamps: true}
);

export default model<Pet>('Pet', PetSchema);