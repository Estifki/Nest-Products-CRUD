import * as mongoose from 'mongoose';

export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  price: number;
}

export const productSchema = new mongoose.Schema({
  title: { type: String, require: true },
  discription: { type: String, require: true },
  price: { type: Number, require: true },
});
