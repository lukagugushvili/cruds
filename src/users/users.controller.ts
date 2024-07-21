import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  getUsersById(@Param('id') id) {
    return this.usersService.getUsersById(parseInt(id));
  }
}
