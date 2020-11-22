import 'reflect-metadata';
import 'source-map-support/register';
import serverless from 'serverless-http';
import { createExpressServer } from 'routing-controllers';
import * as StaticConfig from '@app/config/static';

const app = createExpressServer({
  controllers:  [__dirname + '/src/**/*.controller.ts'],
  middlewares:  [__dirname + '/src/**/*.middleware.ts'],
  interceptors: [__dirname + '/src/**/*.interceptor.ts'],
});

export const main = serverless(app);

if (StaticConfig.IS_LOCAL) {
  console.log('Application is in local development mode');

  const serverPort = StaticConfig.LOCAL_PORT;  
  app.listen(serverPort, () => {
    console.log(`Local server is listening on ${serverPort} port`);
  });
}
