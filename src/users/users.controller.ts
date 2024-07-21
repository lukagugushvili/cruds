import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Delete('/:id')
  deleteUser(@Param('id') id) {
    return this.usersService.deleteUser(parseInt(id));
  }

  @Post()
  createNewUser(@Body() user) {
    return this.usersService.createNewUser(user);
  }

  @Put('/:id')
  changeUserValues(@Param('id') id, @Body() user) {
    return this.usersService.changeUserValues(parseInt(id), user);
  }
}
