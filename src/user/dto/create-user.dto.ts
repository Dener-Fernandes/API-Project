import { IsEmail, IsString } from 'class-validator';
import { UserCreatableInterface } from '../interfaces/user-creatable.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateUserDto implements UserCreatableInterface {
  @Expose()
  id?: string;

  @Expose()
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

  @Expose()
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  firstName!: string;

  @Expose()
  @ApiProperty({
    type: 'string',
  })
  @IsString()
  lastName!: string;

  @Expose()
  @ApiProperty({
    type: 'string',
  })
  @Expose()
  @IsString()
  @IsEmail()
  email!: string;
}
