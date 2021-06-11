import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../contact.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';


@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>,
    ){}

    async findAll(): Promise<Contact[]>{
        return await this.contactRepository.find();
    }

    async  create(contact: Contact): Promise<Contact> {
        return await this.contactRepository.save(contact);
    }
    
    async update(contact: Contact): Promise<UpdateResult>{
        return await this.contactRepository.update(contact.id, contact);
    }

    async delete(id: number): Promise<DeleteResult>{
        return await this.contactRepository.delete(id)
    }

    async find(id: number): Promise<Contact>{
        return await this.contactRepository.findOne(id);
    }
}
