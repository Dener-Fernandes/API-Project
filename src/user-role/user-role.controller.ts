import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User-role')
@Controller('user-role')
export class UserRoleController {
  constructor(private readonly userRoleService: UserRoleService) {}

  @Post()
  @ApiOperation({
    operationId: 'createUserRole',
    description: 'It creates an user role.',
  })
  @ApiResponse({
    status: 201,
    description: 'User role created',
  })
  create(@Body() createUserRoleDto: CreateUserRoleDto) {
    return this.userRoleService.create(createUserRoleDto);
  }

  @Get()
  @ApiOperation({
    operationId: 'getUserRole',
    description: "It returns all user's roles.",
  })
  findAll() {
    return this.userRoleService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'findSpecificUserRole',
    description: 'It returns the roles from a specific user.',
  })
  findOne(@Param('id') id: string) {
    return this.userRoleService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateUserRoleDto: UpdateUserRoleDto,
  // ) {
  //   return this.userRoleService.update(+id, updateUserRoleDto);
  // }

  @Delete(':id')
  @ApiOperation({
    operationId: 'deletepecificUserRole',
    description: 'It deletes all roles from a specific user.',
  })
  remove(@Param('id') id: string) {
    return this.userRoleService.remove(id);
  }
}
