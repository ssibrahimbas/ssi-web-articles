import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mongo-i18n'),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
