import {Document} from "mongoose";

export default interface User extends Document {
  username: string;
  password: string;
  role: string;
}

export default interface IUser {
  id: string;
  username: string;
  password: string;
  role: string;
}