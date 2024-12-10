import { CommonEntityDto } from 'src/common/dto/common-entity.dto';
import { RoleInterface } from '../interfaces';
import { Exclude, Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class RoleDto extends CommonEntityDto implements RoleInterface {
  @ApiProperty({
    type: 'string',
    description: 'Username',
  })
  @IsString()
  @Expose()
  name: string;
}
