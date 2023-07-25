import { Injectable } from '@nestjs/common';
import { ProductsModel } from './products.model';

@Injectable()
export class ProductsService {
  products: ProductsModel[] = [];

  addProduct(title: String, desc: String, price: number) {
    const id = Math.random().toString();
    const newProduct = new ProductsModel(id, title, desc, price);
    this.products.push(newProduct);
    return {
      message: 'Product Added Sucessfully',
      Product: newProduct,
    };
  }

  getAllProducts() {
    return [...this.products];
  }
}
