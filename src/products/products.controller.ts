import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private readonly productProvider: ProductsService) {}
  @Post()
  async addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {
    const response = await this.productProvider.addProduct(
      title,
      description,
      price,
    );
    return response;
  }

  @Get()
  async getAllProducts() {
    const response = await this.productProvider.getAllProducts();
    return {
      products: response,
    };
  }
}
