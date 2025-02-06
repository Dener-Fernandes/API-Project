import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthLocalStrategy } from './auth-local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfig } from 'src/config/jwt.config';
import { ConfigType } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [jwtConfig.KEY],
      useFactory: async (config: ConfigType<typeof jwtConfig>) => config,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthLocalStrategy, JwtStrategy],
})
export class AuthModule {}
