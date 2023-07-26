import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInterface } from './products.model';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async addProduct(title: string, description: string, price: number) {
    const newProduct = new this.productModel({
      title,
      description,
      price,
    });
    const response = await newProduct.save();
    return {
      message: 'Product Added Sucessfully',
      product: response,
    };
  }

  async getAllProducts() {
    const products = await this.productModel.find();
    return products;
  }
}
