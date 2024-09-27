import { ApiProperty } from '@nestjs/swagger';
import { UserUpdatableInterface } from '../interfaces';

export class UpdateUserDto implements UserUpdatableInterface {
  @ApiProperty({
    type: 'string',
  })
  firstName?: string;

  @ApiProperty({
    type: 'string',
  })
  lastName?: string;

  @ApiProperty({
    type: 'boolean',
  })
  active?: boolean;
}
