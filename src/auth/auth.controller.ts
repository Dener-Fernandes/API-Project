import { Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth-guard';
import { AuthUser } from './decorator/auth-user.decorator';
import { UserDto } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('protected')
  signIn(@AuthUser() user: UserDto) {
    return user;
  }
}
