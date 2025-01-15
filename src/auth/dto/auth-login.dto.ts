import { Exclude, Expose } from 'class-transformer';
import { AuthLoginInterface } from '../interfaces/auth-login.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Exclude()
export class AuthLoginDto implements AuthLoginInterface {
  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'username.',
  })
  @IsString()
  username: string;

  @Expose()
  @ApiProperty({
    type: 'string',
    description: 'password.',
  })
  @IsString()
  password: string;
}
