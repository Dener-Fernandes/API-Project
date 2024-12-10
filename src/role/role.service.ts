import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { RoleDto } from './dto/role.dto';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) {}

  public async create(createRole: CreateRoleDto): Promise<RoleDto> {
    const role = this.roleRepository.create(createRole);

    const dbRole = await this.roleRepository.save(role);

    return plainToInstance(RoleDto, dbRole);
  }

  public async findAll(): Promise<RoleDto[]> {
    const roles = await this.roleRepository.find();

    return plainToInstance(RoleDto, roles);
  }

  public async findById(id: string): Promise<Role> {
    const role = await this.roleRepository.findOneBy({
      id,
    });

    if (!role) throw new NotFoundException();

    return role;
  }

  public async findOne(id: string): Promise<RoleDto> {
    const role = await this.roleRepository.findOneBy({
      id,
    });

    return plainToInstance(RoleDto, role);
  }

  public async update(
    id: string,
    updateRoleDto: UpdateRoleDto,
  ): Promise<RoleDto> {
    const role = await this.findById(id);

    const newRole: Role = {
      ...role,
      ...updateRoleDto,
    };

    this.roleRepository.save(newRole);

    return plainToInstance(RoleDto, newRole);
  }

  public async remove(id: string): Promise<void> {
    const role = await this.findById(id);

    await this.roleRepository.remove(role);
  }
}
