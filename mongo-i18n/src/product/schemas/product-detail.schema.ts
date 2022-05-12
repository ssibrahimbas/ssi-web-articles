import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDetailDocument = ProductDetail & Document;

@Schema()
export class ProductDetail {
  @Prop({})
  lang: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const ProductDetailSchema = SchemaFactory.createForClass<
  ProductDetail,
  ProductDetailDocument
>(ProductDetail);
