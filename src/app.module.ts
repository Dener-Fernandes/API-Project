import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { typeormConfig } from './config/typeorm.config';
import { UserRoleModule } from './user-role/user-role.module';
import { RoleModule } from './role/role.module';
import { AuthModule } from './auth/auth.module';
import { jwtConfig } from './config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig, jwtConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: async (config: ConfigType<typeof typeormConfig>) => config,
    }),
    UserModule,
    UserRoleModule,
    RoleModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
