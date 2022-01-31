import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../register/account.entity';
import { CreateAccountDTO } from '../register/dto/create-account.dto';
import { AccountRepository } from '../register/account.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(AccountRepository)
    private productRepository: AccountRepository,
  ) {}

  public async createProduct(
    createProductDto: CreateAccountDTO,
  ): Promise<Account> {
    return await this.productRepository.createProduct(createProductDto);
  }


  public async getProducts(): Promise<Account[]> {
    return await this.productRepository.find();
  }


  public async getProduct(productId: number): Promise<Account> {
    const foundProduct = await this.productRepository.findOne(productId);
    if (!foundProduct) {
      throw new NotFoundException('Account not found');
    }
    return foundProduct;
  }


  public async editProduct(
    productId: number,
    createProductDto: CreateAccountDTO,
  ): Promise<Account> {
    const editedProduct = await this.productRepository.findOne(productId);
    if (!editedProduct) {
      throw new NotFoundException('Account not found');
    }
    return this.productRepository.editProduct(createProductDto, editedProduct);
  }


  public async deleteProduct(productId: number): Promise<void> {
    await this.productRepository.delete(productId);
  }
}