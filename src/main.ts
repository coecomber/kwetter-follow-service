import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { FollowModule } from './follow.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

import 'dotenv/config';

var cors = require('cors')

async function bootstrap() {
  const app = await NestFactory.create(FollowModule);

  const config = new DocumentBuilder()
    .setTitle('Kwetter follow service')
    .setDescription('This is the kwetter follow service for Joost.')
    .setVersion('1.0')
    .addTag('follow')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(cors())

  const configService = app.get<ConfigService>(ConfigService);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'follow-service',
        brokers: configService.get<string>('BROKERS').split(','),
      },
    },
  });

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT, "0.0.0.0");

  const logger = new Logger('Follow Service Nest Application');
  logger.log(`Follow service is running on: ${await app.getUrl()}`);
}
bootstrap();
