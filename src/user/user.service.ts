import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { randomUUID } from 'crypto';
import { UserRepository } from './user-repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

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

    return this.userRepository.create(user);
  }

  public findAll() {
    return this.userRepository.findAll();
  }

  public findOne(id: string) {
    const user = this.userRepository.findOne(id);

    if (!user) throw new NotFoundException();

    return user;
  }

  public update(id: string, updateUser: UpdateUserDto) {
    this.findOne(id);

    const user = this.userRepository.update(id, updateUser);

    return user;
  }

  public remove(id: string) {
    this.findOne(id);

    this.userRepository.remove(id);
  }
}
