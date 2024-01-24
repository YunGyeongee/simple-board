import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';

export default ({} = {}) => {
  return ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `.env.local`,
    load: [configuration],
  });
};
