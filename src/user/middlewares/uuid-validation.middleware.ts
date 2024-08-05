import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { IsUUID, validate } from 'class-validator';

class UUIDParam {
  @IsUUID()
  id: string;
}

@Injectable()
export class UUIDValidationMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const uuidParam = new UUIDParam();

    uuidParam.id = id;

    const errors = await validate(uuidParam);

    if (errors.length > 0) {
      throw new BadRequestException('Invalid UUID parameter');
    }

    next();
  }
}
