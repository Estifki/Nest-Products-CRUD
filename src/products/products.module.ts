import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { productSchema } from './products.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Products',
        schema: productSchema,
      },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
