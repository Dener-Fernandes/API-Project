import { IsEmail, IsString } from 'class-validator';
import { UserCreatableInterface } from '../interfaces/user-creatable.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto implements UserCreatableInterface {
  id?: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  username!: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  password!: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  firstName!: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  lastName!: string;

  @ApiProperty({
    type: 'string',
  })
  @IsString()
  @IsEmail()
  email!: string;
}
