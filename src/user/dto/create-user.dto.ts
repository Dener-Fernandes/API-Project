import { UserCreatableInterface } from '../interfaces/user-creatable.interface';

export class CreateUserDto implements UserCreatableInterface {
  username!: string;
  password!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
}
