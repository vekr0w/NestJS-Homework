import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAccountDTO } from 'src/register/dto/create-account.dto';
import { Account } from 'src/register/account.entity';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post('create')
  public async createAccount(
    @Body() createAccountDto: CreateAccountDTO,
  ): Promise<Account> {
    const account = await this.accountService.createAccount(createAccountDto);
    return account;
  }

  @Get('all')
  public async getAccounts(): Promise<Account[]> {
    const accounts = await this.accountService.getAccounts();
    return accounts;
  }

  @Get('/:accountId')
  public async getAccount(@Param('accountId') accountId: number) {
    const account = await this.accountService.getAccount(accountId);
    return account;
  }

  @Patch('/edit/:accountId')
  public async editAccount(
    @Body() createAccountDto: CreateAccountDTO,
    @Param('accountId') accountId: number,
  ): Promise<Account> {
    const account = await this.accountService.editAccount(
      accountId,
      createAccountDto,
    );
    return account;
  }

  @Delete('/delete/:accountId')
  public async deleteAccount(@Param('accountId') accountId: number) {
    const deletedAccount = await this.accountService.deleteAccount(accountId);
    return deletedAccount;
  }
}
