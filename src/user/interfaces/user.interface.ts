import { CommonEntityInterface } from 'src/common/interfaces';

export interface UserInterface extends CommonEntityInterface {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  salt: string;
  active: boolean;
  //userRoles?: UserRoleInterface[];
}
