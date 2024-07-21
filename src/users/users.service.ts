import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { data } from './data/data';

@Injectable()
export class UsersService {
  private users = data;

  getUsers() {
    if (this.users.length === 0) {
      throw new HttpException('No users available', HttpStatus.NOT_FOUND);
    }

    return this.users;
  }

  getUsersById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new HttpException(
        `User with id: ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    return user;
  }
}
