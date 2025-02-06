import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, Injectable } from '@nestjs/common';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UserService } from 'src/user/user.service';
import { config } from 'process';
import { ConfigType } from '@nestjs/config';
import { jwtConfig } from 'src/config/jwt.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UserService,
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.secret,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findOne(payload.sub);

    if (!user) return false;

    return user;
  }
}
