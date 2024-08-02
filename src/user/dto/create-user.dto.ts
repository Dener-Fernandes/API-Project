import { UserCreatableInterface } from '../interfaces/user-creatable.interface';

export class CreateUserDto implements UserCreatableInterface {
  id?: string;
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}
