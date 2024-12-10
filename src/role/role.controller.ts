import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDto } from './dto/role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@ApiTags('Roles')
@Controller('role')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @ApiOperation({
    operationId: 'role_create',
    description: 'Endpoint to create a new role',
  })
  @ApiOkResponse({
    description: 'Success role created',
  })
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<RoleDto> {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({
    operationId: 'role_findAll',
    description: 'Endpoint to find all',
  })
  @Get()
  findAll(): Promise<RoleDto[]> {
    return this.rolesService.findAll();
  }

  @ApiOperation({
    operationId: 'role_findOne',
    description: 'Endpoint to create a new role',
  })
  @ApiOkResponse({
    description: 'Success role created',
  })
  @ApiNotFoundResponse({
    description: 'Was not able to find role',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @ApiOperation({
    operationId: 'role_update',
    description: 'Endpoint to update role',
  })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(id, updateRoleDto);
  }

  @ApiOperation({
    operationId: 'role_delete',
    description: 'Endpoint to delete all',
  })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}
