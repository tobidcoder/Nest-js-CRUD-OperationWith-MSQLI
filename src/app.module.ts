import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { ContactsService } from './contacts/contacts/contacts.service';
// 
import { ContactsController } from './contacts/contacts/contacts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({

  imports: [
    TypeOrmModule.forRoot(),
    UsersModule
  ],
   controllers: [AppController, ContactsController, UsersController],
    providers: [AppService, ContactsService, UsersService],
})
export class AppModule {}
