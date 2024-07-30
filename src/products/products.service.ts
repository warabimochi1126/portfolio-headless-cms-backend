import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from 'src/dto/CreateProductDto';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(CreateProductDto: CreateProductDto) {
    return await this.productsRepository.save(CreateProductDto);
  }
}
