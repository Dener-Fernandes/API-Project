import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { randomUUID } from 'crypto';
import { User } from './entities/user.entity';
import { UserInterface } from './interfaces';

@Injectable()
export class UserRepository {
  public users: User[];
  constructor() {
    this.users = [];
  }

  public create(createUser: UserInterface) {
    createUser.id = randomUUID();

    this.users.push(createUser);

    return createUser;
  }

  public findAll() {
    return this.users;
  }

  public findOne(id: string) {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  public update(id: string, updateUser: UpdateUserDto) {
    const index = this.users.findIndex((user) => user.id === id);

    if (updateUser.firstName)
      this.users[index].firstName = updateUser.firstName;

    if (updateUser.lastName) this.users[index].lastName = updateUser.lastName;

    return this.users[index];
  }

  public remove(id: string) {
    const index = this.users.findIndex((user) => user.id === id);

    this.users.splice(index, 1);
  }
}
