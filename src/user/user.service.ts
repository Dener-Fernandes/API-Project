import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  public users: User[];
  constructor() {
    this.users = [];
  }

  private convertToUser(createUser: CreateUserDto): User {
    const user = new User();

    user.username = createUser.username;
    user.password = createUser.password;
    user.firstName = createUser.firstName;
    user.lastName = createUser.lastName;
    user.email = createUser.email;
    user.active = true;

    return user;
  }

  public create(createUser: CreateUserDto) {
    const user = this.convertToUser(createUser);
    user.id = randomUUID();

    this.users.push(user);

    return user;
  }

  public findAll() {
    return this.users;
  }

  public findOne(id: string) {
    const user = this.users.find((user) => user.id === id);

    if (!user) throw new NotFoundException();

    return user;
  }

  public update(id: string, updateUser: UpdateUserDto) {
    const user = this.findOne(id);

    if (updateUser.firstName) user.firstName = updateUser.firstName;
    if (updateUser.lastName) user.lastName = updateUser.lastName;

    return user;
  }

  public remove(id: string) {
    const index = this.users.findIndex((user) => user.id === id);

    if (index < 0) throw new NotFoundException();

    this.users.splice(index, 1);
  }
}
