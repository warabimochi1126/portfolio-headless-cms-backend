import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/config/typeormConfig';
import { ProductsModule } from './products/products.module';
import { imageToR2 } from './middleware/imageToR2middleware';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(imageToR2).forRoutes({ path: "products", method: RequestMethod.POST })
  }
}
