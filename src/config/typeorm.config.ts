import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserSubscriber } from 'src/user/subscribers/user.subscriber';

/*
Configurations for postgres
const config = {
      type: 'postgres',
      url: '
      migrationsRun: true,
      entities: [__dirname + './*.entity.{js,ts}'],
      subscribers: [__dirname + './*.subscriber.{js,ts}'],
      synchronize: false,
      migrations: [__dirname + '/../migrations/*.{js,ts}'],
      extra: {
        ssl: false
      }
    Env Variables
    - process.env.DATABASE_SSL
    - process.env.DATABASE_URL
    - process.env.DATABASE_MIGRATIONS_RUN
    - process.env.DATABASE_SYNCHRONIZE
*/
export const typeormConfig = registerAs(
  'TYPEORM_MODULE_CONFIG',
  (): TypeOrmModuleOptions => {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL
        ? process.env.DATABASE_URL
        : 'postgresql://postgres:postgres@localhost:5432/api-project',
      migrationsRun:
        'string' === typeof process.env.DATABASE_MIGRATIONS_RUN
          ? process.env.DATABASE_MIGRATIONS_RUN === 'true'
          : false,
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      subscribers: [UserSubscriber],
      synchronize:
        'string' === typeof process.env.DATABASE_SYNCHRONIZE
          ? process.env.DATABASE_SYNCHRONIZE === 'true'
          : true,
      migrations: [__dirname + '/../migrations/*.{js,ts}'],
      autoLoadEntities: true,
      logging: true,
      logger: 'file',
    };
  },
);