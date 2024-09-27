import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from 'src/common/doc/responses/user/user-response.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    operationId: 'createUser',
    description: 'It creates an user.',
  })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: UserResponseDto,
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiOperation({
    operationId: 'findAll',
    description: 'It returns all users.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: [UserResponseDto],
  })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiOperation({
    operationId: 'findUser',
    description: 'It finds an user by id.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserResponseDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @ApiOperation({
    operationId: 'updateUser',
    description: 'It updates and user by id.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserResponseDto,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUser: UpdateUserDto) {
    return this.userService.update(id, updateUser);
  }

  @ApiOperation({
    operationId: 'deleteUser',
    description: 'It deletes an user by id.',
  })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
