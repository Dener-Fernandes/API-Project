import { Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { AuthUser } from './decorator/auth-user.decorator';
import { UserDto } from 'src/user/dto/user.dto';
import { JwtAuthGuard } from './guards/jwt-auth-guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  signIn(@AuthUser() user: UserDto) {
    return this.authService.jwtSign(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('protected')
  protected(@AuthUser() user: UserDto) {
    return user;
  }
}
