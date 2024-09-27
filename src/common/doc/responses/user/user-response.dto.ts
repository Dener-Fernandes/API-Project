import { ApiProperty } from '@nestjs/swagger';
import { UserCreatableInterface } from 'src/user/interfaces';

export class UserResponseDto implements UserCreatableInterface {
  @ApiProperty({ example: 'bcb34216-1ccd-4a10-a97b-637f303e2763' })
  id: string;

  @ApiProperty({ example: 'Rick Deckard' })
  username: string;

  @ApiProperty({ example: '06102021' })
  password: string;

  @ApiProperty({ example: 'Rick' })
  firstName: string;

  @ApiProperty({ example: 'Deckard' })
  lastName: string;

  @ApiProperty({ example: 'RickDeckard@gmail.com' })
  email: string;

  @ApiProperty({ example: true })
  active: boolean;
}
