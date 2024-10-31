import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async create(createUser: CreateUserDto): Promise<CreateUserDto> {
    const user = this.userRepository.create(createUser);
    const dbUser = await this.userRepository.save(user);

    return plainToInstance(CreateUserDto, dbUser);
  }

  public async findAll(): Promise<CreateUserDto[]> {
    const users = await this.userRepository.find();

    return plainToInstance(CreateUserDto, users);
  }

  public async findById(id: string): Promise<User> {
    const user = this.userRepository.findOneBy({ id });

    if (!user) throw new NotFoundException();

    return user;
  }

  public async findOne(id: string): Promise<CreateUserDto> {
    const user = await this.findById(id);
    return plainToInstance(CreateUserDto, user);
  }

  public async update(id: string, updateUser: UpdateUserDto) {
    this.findById(id);

    const user = this.userRepository.update(id, updateUser);

    return user;
  }

  public async remove(id: string): Promise<void> {
    const user = await this.findById(id);
    await this.userRepository.remove(user);
  }
}
