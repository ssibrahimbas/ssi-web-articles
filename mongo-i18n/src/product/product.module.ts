import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProductDetail,
  ProductDetailSchema,
} from './schemas/product-detail.schema';
import { Product, ProductSchema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ProductDetail.name,
        schema: ProductDetailSchema,
      },
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
