import { CommonEntity } from 'src/common/entities/common.entity';
import { Column, Entity, ManyToOne, OneToMany, Unique } from 'typeorm';
import { UserRoleInterface } from '../interfaces';
import { User } from 'src/user/entities/user.entity';
import { Role } from 'src/role/entities/role.entity';

@Entity()
@Unique(['userId', 'roleId'])
export class UserRole extends CommonEntity implements UserRoleInterface {
  @Column()
  userId: string;

  @Column()
  roleId: string;

  @ManyToOne(() => User, (user) => user.userRoles)
  user!: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  role!: Role;
}
