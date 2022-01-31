import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../register/account.entity';
import { CreateAccountDTO } from '../register/dto/create-account.dto';
import { AccountRepository } from '../register/account.repository';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountRepository)
    private AccountRepository: AccountRepository,
  ) {}

  public async createAccount(
    createAccountDto: CreateAccountDTO,
  ): Promise<Account> {
    return await this.AccountRepository.createAccount(createAccountDto);
  }


  public async getAccounts(): Promise<Account[]> {
    return await this.AccountRepository.find();
  }


  public async getAccount(accountId: number): Promise<Account> {
    const foundAccount = await this.AccountRepository.findOne(accountId);
    if (!foundAccount) {
      throw new NotFoundException('Account not found');
    }
    return foundAccount;
  }


  public async editAccount(
    accountId: number,
    createAccountDto: CreateAccountDTO,
  ): Promise<Account> {
    const editedAccount = await this.AccountRepository.findOne(accountId);
    if (!editedAccount) {
      throw new NotFoundException('Account not found');
    }
    return this.AccountRepository.editAccount(createAccountDto, editedAccount);
  }


  public async deleteAccount(accountId: number): Promise<void> {
    await this.AccountRepository.delete(accountId);
  }
}