import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from 'src/dto/CreateProductDto';

@Controller('products')
export class ProductsController {
  constructor(private readonly ProductsService: ProductsService) {}

  @Get()
  async readAll() {
    return await this.ProductsService.read();
  }

  @Post()
  async create(@Body() CreateProductDto: CreateProductDto) {
    return await this.ProductsService.create(CreateProductDto);
  }
}
