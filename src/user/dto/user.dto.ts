import { Exclude, Expose, Transform, Type } from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

import { UserRoleDto } from '../../user-role/dto/user-role.dto';
import { UserInterface } from '../interfaces';

import {
  IsBoolean,
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  USER_EMAIL_MAX_LENGTH,
  USER_EMAIL_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
  USER_NAME_MIN_LENGTH,
} from '../constant/user.constants';
import { CommonEntityDto } from 'src/common/dto/common-entity.dto';

@Exclude()
export class UserDto
  extends CommonEntityDto
  implements Omit<UserInterface, 'salt' | 'password'>
{
  id: string;

  @Expose()
  @ApiProperty({
    title: 'Username',
    description: 'Username.',
    minLength: USER_NAME_MIN_LENGTH,
    maxLength: USER_NAME_MAX_LENGTH,
  })
  @IsString()
  @MinLength(USER_NAME_MIN_LENGTH)
  @MaxLength(USER_NAME_MAX_LENGTH)
  username!: string;

  @Expose()
  @ApiProperty({
    title: 'First Name',
    description: "User's first name.",
    minLength: USER_NAME_MIN_LENGTH,
    maxLength: USER_NAME_MAX_LENGTH,
  })
  @IsString()
  @MinLength(USER_NAME_MIN_LENGTH)
  @MaxLength(USER_NAME_MAX_LENGTH)
  firstName!: string;

  @Expose()
  @ApiProperty({
    title: 'Last Name',
    description: "User's last name.",
    minLength: USER_NAME_MIN_LENGTH,
    maxLength: USER_NAME_MAX_LENGTH,
  })
  @IsString()
  @MinLength(USER_NAME_MIN_LENGTH)
  @MaxLength(USER_NAME_MAX_LENGTH)
  lastName!: string;

  @Expose()
  @ApiProperty({
    title: 'Email',
    description: "User's email.",
    minLength: USER_EMAIL_MIN_LENGTH,
    maxLength: USER_EMAIL_MAX_LENGTH,
  })
  @IsEmail()
  @MinLength(USER_EMAIL_MIN_LENGTH)
  @MaxLength(USER_EMAIL_MAX_LENGTH)
  email!: string;

  @Expose()
  @ApiProperty({
    title: 'Active',
    description: 'Flag to inform if user is active or not.',
  })
  @IsBoolean()
  @Type(() => Boolean)
  active!: boolean;

  @Expose()
  @ApiProperty({
    type: [UserRoleDto],
    description: 'roles',
    required: false,
  })
  @Transform(({ value }) => {
    return value?.map((role: UserRoleDto) => {
      return role?.role?.name;
    });
  })
  userRoles!: UserRoleDto[];

  createdAt: Date;

  updatedAt: Date;
}
