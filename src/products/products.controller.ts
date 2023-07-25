import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('Products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}
  @Post()
  addProducts(
    @Body('title') title: String,
    @Body('description') description: String,
    @Body('price') price: number,
  ) {
    
    const res = this.ProductsService.addProduct(title, description, price);
    return res;
  }
  @Get()
  getAllProducts() {
    return [...this.ProductsService.getAllProducts()];
  }
}
