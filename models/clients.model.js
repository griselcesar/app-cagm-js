import { Schema, model } from "mongoose";

const clientSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
  rif: { type: String, required: true, unique: true },
});

const clientModel = model("client", clientSchema);

export default clientModel;
