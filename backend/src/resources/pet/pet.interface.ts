import {Document} from "mongoose";

export default interface Pet extends Document {
  img: string;
  type: string
  name: string;
  age: number;
  breed: string;
  location: string;
  spot: string;
}

// export default interface Pets extends Document {
//   pets: Pet[];
// }