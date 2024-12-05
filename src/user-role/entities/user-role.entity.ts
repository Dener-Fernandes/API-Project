import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, Unique } from 'typeorm';
import { UserRoleInterface } from '../interfaces';
import { User } from 'src/user/entities/user.entity';

@Entity()
@Unique(['userId', 'roleId'])
export class UserRole extends CommonEntity implements UserRoleInterface {
  @Column()
  userId: string;

  @Column()
  roleId: string;

  user!: User;

  // role: Role
}
