import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ProductDetail } from './product-detail.schema';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({})
export class Product {
  @Prop({ type: Date, default: Date.now })
  time: Date;

  @Prop()
  price: number;

  @Prop()
  stockCount: number;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: ProductDetail.name }],
  })
  details: Array<ProductDetail>;
}

export const ProductSchema = SchemaFactory.createForClass<
  Product,
  ProductDocument
>(Product);
