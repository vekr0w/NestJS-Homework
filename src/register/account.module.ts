import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from 'src/account/account.controller';
import { AccountService } from 'src/account/account.service';
import { AccountRepository } from './account.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AccountRepository])], // add this
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
