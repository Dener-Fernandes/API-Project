import { CommonEntityDto } from 'src/common/dto/common-entity.dto';
import { UserRoleInterface } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { Expose } from 'class-transformer';
import { RoleDto } from 'src/role/dto/role.dto';

export class UserRoleDto extends CommonEntityDto implements UserRoleInterface {
  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  userId: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID()
  roleId: string;

  @ApiProperty({ type: () => RoleDto, required: false })
  @Expose()
  role!: RoleDto;
}
