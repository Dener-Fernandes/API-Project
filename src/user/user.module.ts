import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user-repository';
import { UUIDValidationMiddleware } from './middlewares/uuid-validation.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUIDValidationMiddleware).forRoutes('user/:id');
  }
}
