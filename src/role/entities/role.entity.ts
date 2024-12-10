import { CommonEntity } from 'src/common/entities/common.entity';
import { UserRole } from 'src/user-role/entities/user-role.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToMany, OneToMany, Unique } from 'typeorm';

@Entity()
@Unique(['name'])
export class Role extends CommonEntity {
  @Column()
  name: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles!: UserRole[];

  @ManyToMany(() => User, (user) => user.roles)
  users!: User[];
}
