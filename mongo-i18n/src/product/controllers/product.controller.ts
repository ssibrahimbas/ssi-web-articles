import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductDocument } from '../schemas/product.schema';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductDocument> {
    return this.productService.createProduct(createProductDto);
  }

  @Get('all')
  async getAllProducts(
    @Query() query: { lang: string },
  ): Promise<Array<ProductDocument>> {
    return this.productService.getAllProducts(query.lang);
  }
}
