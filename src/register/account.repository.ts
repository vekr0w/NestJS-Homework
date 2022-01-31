import { Repository, EntityRepository } from 'typeorm';
import { Account } from './account.entity';
import { CreateAccountDTO } from './dto/create-account.dto';

@EntityRepository(Account)
export class AccountRepository extends Repository<Account> {

  public async createAccount(
    CreateAccountDTO: CreateAccountDTO,
  ): Promise<Account> {
    const { email, password, country } = CreateAccountDTO;

    const account = new Account();
    account.email = email;
    account.password = password;
    account.country = country;

    await account.save();
    return account;
  }

  public async editAccount(
    CreateAccountDTO: CreateAccountDTO,
    editedAccount: Account,
  ): Promise<Account> {
    const { email, password, country } = CreateAccountDTO;

    editedAccount.email = email;
    editedAccount.password = password;
    editedAccount.country = country;
    await editedAccount.save();

    return editedAccount;
  }
}