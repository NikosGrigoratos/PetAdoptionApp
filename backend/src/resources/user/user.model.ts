import {Schema, model} from "mongoose";
import User from "@/resources/user/user.interface";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
  },
  {timestamps: true}
);

export default model<User>('User', UserSchema);