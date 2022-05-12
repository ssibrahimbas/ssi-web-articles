import { CreateProductDetailDto } from './create-product-detail.dto';

export class CreateProductDto {
  price: number;
  stockCount: number;
  details: Array<CreateProductDetailDto>;
}
