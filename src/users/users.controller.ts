import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}

    @Get()
    getAllUsers(){
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param() param ){
        return this.userService.getUser(param.id)
    }

    @Get()
    createUser(@Body() user: User){
        return this.userService.createUser(user);
    }

    @Put()
    udpateUser(@Body() user: User) {
        return this.userService.updateUser(user);
    }

    @Delete()
    deteletUser(@Param() param){
        return this.userService.deleteUser(param.id);
    }
}
