import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/CreateProductDto';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Post()
  async create(@Body() CreateProductDto: CreateProductDto) {
    return await this.ProductsService.create(CreateProductDto);
  }
}
