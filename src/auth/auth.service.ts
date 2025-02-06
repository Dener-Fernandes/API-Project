import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthResponseDto } from './dto/auth-response.dto';
import { JwtService } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>,
  ) {}

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

  async jwtSign(user: UserDto): Promise<AuthResponseDto> {
    const accessConfig = this.config.access;
    const refreshConfig = this.config.refresh;

    const payload: JwtPayload = { sub: user.id };

    const accessToken = await this.jwtService.sign(
      payload,
      accessConfig?.signOptions,
    );

    const refreshToken = await this.jwtService.sign(
      payload,
      refreshConfig?.signOptions,
    );

    return new AuthResponseDto(accessToken, refreshToken);
  }
}
