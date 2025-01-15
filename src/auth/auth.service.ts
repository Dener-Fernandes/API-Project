import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validatUserPassword(
    username: string,
    password: string,
  ): Promise<boolean> {
    const user = await this.userService.valideteUserPassword(
      username,
      password,
    );

    if (!user) throw new UnauthorizedException();

    return true;
  }
}
