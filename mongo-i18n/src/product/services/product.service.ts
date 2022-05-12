import { Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import {
  ProductDetail,
  ProductDetailDocument,
} from '../schemas/product-detail.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { CreateProductDto } from '../dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductDetail.name)
    private productDetailModel: Model<ProductDetailDocument>,
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductDocument> {
    const product = new this.productModel(createProductDto);
    const details: Array<mongoose.Schema.Types.ObjectId & ProductDetail> = [];
    for (const detailDto of createProductDto.details) {
      const detail = new this.productDetailModel(detailDto);
      await detail.save();
      details.push(detail._id);
    }
    product.details = details;
    return product.save();
  }

  async getAllProducts(lang: string): Promise<Array<ProductDocument>> {
    return this.productModel
      .find()
      .populate([
        {
          path: 'details',
          match: { lang: lang },
        },
      ])
      .exec();
  }
}
