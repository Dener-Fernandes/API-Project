import { IsEmail, IsString } from 'class-validator';
import { UserCreatableInterface } from '../interfaces/user-creatable.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class CreateUserDto implements UserCreatableInterface {
  @Expose()
  id?: string;

  @ApiProperty({
    type: 'string',
  })
  @Expose()
  @IsString()
  username!: string;

  @ApiProperty({
    type: 'string',
  })
  @Expose()
  @IsString()
  password!: string;

  @ApiProperty({
    type: 'string',
  })
  @Expose()
  @IsString()
  firstName!: string;

  @ApiProperty({
    type: 'string',
  })
  @Expose()
  @IsString()
  lastName!: string;

  @ApiProperty({
    type: 'string',
  })
  @Expose()
  @IsString()
  @IsEmail()
  email!: string;
}
