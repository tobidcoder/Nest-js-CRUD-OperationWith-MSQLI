import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async getUser(id: number): Promise<User[]> {
        return await this.userRepository.find({
            select:["userName","dateOfBirth","isActive"],
            where:[{"id": id}]
        });
    }

    //OR
    // async getUser(id: number): Promise<User>{
    //     return await this.userRepository.findOne(id);
    // }

    async updateUser(user: User): Promise<UpdateResult>{
        return await this.userRepository.update(user.id, user);
    }

    async createUser(user: User): Promise<User>{
        return await this.userRepository.save(user);
    }

    async deleteUser(id: number): Promise<DeleteResult>{
        return await this.userRepository.delete(id)
    }
}
