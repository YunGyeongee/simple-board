import { Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const startTime = Date.now();
    res.on('finish', () => {
      const { statusCode } = res;
      const responseTime = Date.now() - startTime;

      this.logger.log(`[${method}]${originalUrl}: ${statusCode} - ${responseTime}ms`);
    });
    next();
  }
}
