import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { UserCreatableInterface } from 'src/user/interfaces';

@Exclude()
export class UserResponseDto implements UserCreatableInterface {
  @ApiProperty({ example: 'bcb34216-1ccd-4a10-a97b-637f303e2763' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'Rick Deckard' })
  @Expose()
  username: string;

  @ApiProperty({ example: '06102021' })
  password: string;

  @ApiProperty({ example: 'Rick' })
  @Expose()
  firstName: string;

  @ApiProperty({ example: 'Deckard' })
  @Expose()
  lastName: string;

  @ApiProperty({ example: 'RickDeckard@gmail.com' })
  @Expose()
  email: string;

  @ApiProperty({ example: true })
  @Expose()
  active: boolean;
}
