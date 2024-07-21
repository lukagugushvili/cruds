import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { DataTypes } from './types/dataType';
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

  deleteUser(id: number) {
    const deleteUser = this.users.filter((user) => user.id !== id);
    const findDeletedUser = this.users.find((user) => user.id === id);

    if (!findDeletedUser) {
      throw new HttpException(
        `User with id: ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }

    this.users = deleteUser;

    return findDeletedUser;
  }

  createNewUser(user: DataTypes) {
    const lastId = this.users[this.users.length - 1].id;
    const id = lastId ? lastId + 1 : 1;

    const newUser = {
      id,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  changeUserValues(id: number, user: DataTypes) {
    const findIndex = this.users.findIndex((user) => user.id === id);

    if (findIndex === -1) {
      throw new HttpException(`User not found`, HttpStatus.NOT_FOUND);
    }

    this.users[findIndex] = {
      ...this.users[findIndex],
      ...user,
    };

    return this.users[findIndex];
  }
}
