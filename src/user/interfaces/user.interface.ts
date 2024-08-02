export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  salt: string;
  active: boolean;
  //userRoles?: UserRoleInterface[];
}
